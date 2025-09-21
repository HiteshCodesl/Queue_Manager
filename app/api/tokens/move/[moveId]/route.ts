import { NextRequest, NextResponse } from "next/server";
import prismaClient from "@/app/config/prisma";

export async function POST(
    request: NextRequest, 
    context: {params: {moveId: string}}){

    const {direction} = await request.json();

    const {moveId} = context.params;
    if(!['up', 'down'].includes(direction)) return NextResponse.json('invalid direction');

    try{
    const token = await prismaClient.token.findUnique({
        where: {
            id: moveId
        }
    })
    if (!token) return NextResponse.json({ error: "Token not found" }, { status: 404 });

    const currentPosition = token.position;

    const targetPosition = direction === 'up' ? currentPosition - 1 : currentPosition + 1;

    if (targetPosition < 1) return NextResponse.json({ ok: false });

    const otherTokens = await prismaClient.token.findFirst({
        where: {
            queueId: token.queueId,
            position: targetPosition,
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

    const tokens = await prismaClient.token.findMany({
        where: {queueId: token.queueId},
        orderBy: {position: 'asc'}
    })

    return NextResponse.json({ok: true, tokens});
    }catch(error){
    console.log(error)
    return NextResponse.json(error);
   } 
}