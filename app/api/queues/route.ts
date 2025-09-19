import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import prismaClient from "@/app/config/prisma"

export async function POST(request: NextRequest){
     const session = await getServerSession(authOptions);
     if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

     const managerId = session.user.id;
    try{
     const name = await request.json();
      
     const queue = await prismaClient.queue.create({
        data:{
            name, managerId
        }
    })
    return NextResponse.json(queue, { status: 201 });
    }catch(error){
    console.log(error)
    return NextResponse.json(error);
   } 
}

export async function GET(){
   const session = await getServerSession(authOptions);
     if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

   const managerId = session.user.id as string;
   try{
   const queues = await prismaClient.queue.findMany({
    where: {
        managerId: managerId
    },
    include: {
        tokens: {
            orderBy: 
             {position: 'asc'
        }}},
    orderBy: {
        createdAt: 'desc'
    }
   })

   return NextResponse.json(queues);
   }catch(error){
    console.log(error)
    return NextResponse.json(error);
   } 
}
