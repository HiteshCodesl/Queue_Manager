import { NextRequest, NextResponse } from "next/server"
import prismaClient from "@/app/config/prisma"

interface Params {
    params : {
        id: string
    }
}

export async function POST(request: NextRequest, {params}: Params){
    try{
    const token = await prismaClient?.token.findUnique({
        where: {
            id: params.id
        }
    })

    const queue = await prismaClient.queue.findUnique({ where: { id: token?.queueId 
       } 
    });

    await prismaClient.token.update({
        where: {
            id: token?.id
        },
        data: {
            status: 'served',
            servedAt: new Date()
        }
    })

    const waiting = await prismaClient.token.findMany({
        where: {
            queueId: token?.queueId,
            status: 'waiting'
        },
        orderBy: {
            position: 'asc'
        }
    })

    const otherTokensPosition = waiting.map((token, index) => prismaClient.token.update({
        where: {
            id: token.id
        },
        data: {
            position: index + 1
        }
    }))

    if(otherTokensPosition.length) await prismaClient.$transaction(otherTokensPosition)

    return NextResponse.json('token successfully served')
    }catch(error){
    console.log(error)
    return NextResponse.json(error);
   } 
}