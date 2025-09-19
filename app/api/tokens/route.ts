import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import prismaClient from "@/app/config/prisma";

export async function POST(request: NextRequest){
  
    const {queueId, label} = await request.json();

    try{
    await prismaClient.queue.findUnique({
        where: {id: queueId}
    })

    const maxPosition = await prismaClient.token.aggregate({
        where: {
            queueId ,
            status: 'waiting'
        },
        _max: {
            position: true
        }
    })

    const nextPosition = (maxPosition._max.position ?? 0) + 1;

    const token = await prismaClient.token.create({
        data: {
            label: label || `T-${String(Date.now()).slice(-5)}`,
            queueId,
            position: nextPosition,
            status: 'waiting'
        }
    })

    return NextResponse.json(token, {status: 201});
    }catch(error){
    console.log(error)
    return NextResponse.json(error);
   } 
}