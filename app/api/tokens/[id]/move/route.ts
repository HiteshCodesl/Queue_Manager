import { NextRequest, NextResponse } from "next/server";
import prismaClient from "@/app/config/prisma";

interface Params {
    params: {
        id: string
    }
}

export async function POST(request: NextRequest, {params}: Params){
    const direction = await request.json();

    if(!['up', 'down'].includes(direction)) return NextResponse.json('invalid direction');

    try{
    const token = await prismaClient.token.findUnique({
        where: {
            id: params.id
        }
    })

    const queue = await prismaClient.queue.findUnique({ where: { id: token?.queueId } });


    if(token?.status !== 'waiting') return NextResponse.json({ error: "Only waiting tokens can be moved" }, { status: 400 });

    const currentPosition = token.position;

    const targetPosition = direction === 'up' ? currentPosition - 1 : currentPosition + 1;

    if (targetPosition < 1) return NextResponse.json({ ok: false });

    const otherTokens = await prismaClient.token.findFirst({
        where: {
            queueId: token.queueId,
            position: targetPosition,
            status: 'waiting'
        }
    })

    if(!otherTokens){
        return NextResponse.json({ ok : false})
    }

    await prismaClient.$transaction([
        prismaClient.token.update({
            where: {
                id: otherTokens.id
            },
            data: {
                position: currentPosition
            }
        }),
         prismaClient.token.update({
            where: {
                id: token.id
            },
            data: {
                position: targetPosition
            }
        })
    ])

    return NextResponse.json({ok: true});
    }catch(error){
    console.log(error)
    return NextResponse.json(error);
   } 
}