import { NextRequest, NextResponse } from "next/server";
import prismaClient from "@/app/config/prisma";

export async function POST(request: NextRequest, context: {params: {queueId: string}}){
    const {queueId} = context.params;
    try{
    await prismaClient.queue.findUnique({
        where: {
            id: queueId
        }
    })

    const top = await prismaClient.token.findFirst({
        where: {
            queueId: queueId,
            status: 'waiting'
        },
        orderBy: {
            position: 'asc'
        }
    })

    if (!top) return NextResponse.json({ error: "No waiting tokens" }, { status: 404 });

    const updated = await prismaClient.token.update({
        where: {
            id: top.id
        },
        data: {
            status: 'assigned',
            assignedAt: new Date()
        }
    })

    const tokens = await prismaClient.token.findMany({
        where: {queueId},
        orderBy: {position: 'asc'}
    })

    return NextResponse.json({status: 200, body: {ok: true, token: updated, tokens}});
    
   }catch(error){
    console.log(error)
    return NextResponse.json(error);
   } 
}