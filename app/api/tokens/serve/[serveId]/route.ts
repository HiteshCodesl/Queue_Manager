import { NextRequest, NextResponse } from "next/server"
import prismaClient from "@/app/config/prisma"

export async function POST(request: NextRequest,
     context : {params: {serveId: string }}){
    const {serveId} = context.params;
    try{
        console.log("id",serveId)
    const token = await prismaClient?.token.findUnique({
        where: {
            id: serveId
        }
    })

    const updated = await prismaClient.token.update({
        where: {
            id: serveId
        },
        data: {
            status: 'served',
            servedAt: new Date()
        }
    })

    const tokens = await prismaClient.token.findMany({
        where: {
            queueId: token?.queueId,
        },
        orderBy: {
            position: 'asc'
        }
    })
    return NextResponse.json({ok: true, token: updated, tokens })
    }catch(error){
    console.log(error)
    return NextResponse.json(error);
   } 
}