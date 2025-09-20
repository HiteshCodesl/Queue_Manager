import { NextRequest, NextResponse } from "next/server"
import prismaClient from "@/app/config/prisma"


export async function POST(request: NextRequest, {params}:{params: {removeId: string}}){
    try{
    const {removeId} = params;

    const cancelToken = await prismaClient.token.update({
        where: {
            id: removeId
        },
        data: {
            status: 'cancelled',
            cancelledAt: new Date(),
        }
    })

    return NextResponse.json(cancelToken)

    }catch(error){
        
    console.log(error)
    return NextResponse.json(error);
   } 
}