import { NextRequest, NextResponse } from "next/server";
import prismaClient from "@/app/config/prisma";

interface Params {
    params: {
        queueId: string
    }
}
export async function POST(request: NextRequest, {params}: Params){
    
    try{
    await prismaClient.queue.findUnique({
        where: {
            id: params.queueId
        }
    })

    const top = await prismaClient.token.findFirst({
        where: {
            queueId: params.queueId,
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
    
    return NextResponse.json(updated);
   }catch(error){
    console.log(error)
    return NextResponse.json(error);
   } 
}