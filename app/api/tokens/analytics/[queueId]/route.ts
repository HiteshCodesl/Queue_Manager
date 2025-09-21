import { NextRequest, NextResponse } from "next/server";
import prismaClient from "@/app/config/prisma";

export async function GET(
    request: NextRequest,
    context: {params: {queueId: string}})
    {
    const {queueId} = context.params;

    console.log(queueId, "queueId")

    try{
    const queue = await prismaClient.queue.findUnique({
        where: {
            id: queueId
        }
    })

    if(!queue) {
        return NextResponse.json("queue not found")
    }

    const currentWaiting = await prismaClient.token.count({
        where: {
            queueId: queueId,
            status: 'waiting'
        },    
    })

     const totalServed = await prismaClient.token.count({
        where: {
            queueId: queueId,
            status: 'served'
        },    
    })

    const cancelled = await prismaClient.token.count({
        where: {
            queueId: queueId,
            status: 'cancelled'
        },    
    })

    const allServed = await prismaClient.token.findMany({
        where: {
            queueId: queueId,
            servedAt: {not: null}
        },
        select: {
            createdAt: true,
            servedAt: true
        }
    })

     const waitSecondsAll = allServed.map((t) => 
        (t.servedAt! ? (t.servedAt.getTime() - t.createdAt.getTime()) / 1000 : 0))

    const avgWaitSec = waitSecondsAll.length
      ? waitSecondsAll.reduce((a, b) => a + b, 0) / waitSecondsAll.length
      : 0;

    return NextResponse.json({cancelled, currentWaiting, avgWaitSec, totalServed})

  }catch (err){
    console.log(err)
  } 
}