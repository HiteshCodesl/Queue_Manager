import { NextRequest, NextResponse } from "next/server";
import prismaClient from "@/app/config/prisma";

interface Params {
    params: {
        queueId: string
    }
}
export async function GET({params}: Params){
    try{
    const tokens = await prismaClient.token.findMany({
        where: {
            queueId: params.queueId
        },
        orderBy: {
            position: 'asc'
        }
    })

    return NextResponse.json(tokens);
    }catch(error){
    console.log(error)
    return NextResponse.json(error);
   } 
}
