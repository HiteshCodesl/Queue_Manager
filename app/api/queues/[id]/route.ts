import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";
import prismaClient from "@/app/config/prisma";

interface Params {
    params: {queueId: string}
}

export async function GET() {
    const session = await getServerSession(authOptions);
      if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const managerId = session.user.id;
    try{
    const queue = await prismaClient.queue.findMany({
        where: {
            managerId: managerId
        },
        include: {tokens: {
            orderBy: {
                position: 'asc'
            }
        }}
    })

    if (!queue) {
     return NextResponse.json({ error: "Queue not found" }, { status: 403 });
    }

    return NextResponse.json(queue);
    }catch(error){
    console.log(error)
    return NextResponse.json(error);
   } 
}

export async function DELETE(request: NextRequest, {params}: Params) {
    const session = await getServerSession(authOptions);
      if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const managerId = session.user.id;
    try{
    const deleteQueue = await prismaClient.queue.delete({
        where: {
            id: params.queueId
        }
    })

    return NextResponse.json({ok: true, deleteId: deleteQueue})
   }catch(error){
    console.log(error)
    return NextResponse.json(error);
   } 
}