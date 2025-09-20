import { NextRequest, NextResponse } from "next/server";
import prismaClient from "@/app/config/prisma";

export async function GET(req:NextRequest, {params}:{params: {queueId: string}}){
    try{
     const {queueId} = params;

     const tokens = await prismaClient.token.findMany({
        where: {
            queueId: queueId
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
