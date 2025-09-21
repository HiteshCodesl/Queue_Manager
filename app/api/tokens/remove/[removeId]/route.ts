import { NextRequest, NextResponse } from "next/server"
import prismaClient from "@/app/config/prisma"


export async function POST(request: NextRequest, context:{params: {removeId: string}}){
    try{
    const {removeId} = context.params;

    const cancelToken = await prismaClient.token.update({
        where: {
            id: removeId
        },
        data: {
            status: 'cancelled',
            cancelledAt: new Date(),
        }
    })

    return NextResponse.json({ok: true, token: cancelToken})

    }catch(error){
    console.log(error)
    return NextResponse.json(error);
   } 
}