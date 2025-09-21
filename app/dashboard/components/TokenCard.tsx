"use client"
import { SquareArrowDown, SquareArrowUp } from "lucide-react";
import { Token } from "./AddQueueToken";
import { Button } from "@/components/ui/button";
import axios from "axios";
import moment from 'moment'

export function TokenCard({
  token,
  onCancel,
  onMove,
  onServe
}: {
  token: Token,  
  onCancel: (updatedToken: Token) => void, 
  onMove: (id: string, direction:"up" | "down") => void 
  onServe: (id: string) => void
}) {
   
  const cancelToken = async(id: string) =>{
    console.log('tokenId', id)
     const response = await axios.post(`/api/tokens/remove/${id}`); 

     if(response){
      onCancel(response.data.token);
      console.log(response.data.token)
     }
  }

  return (
      <div className="flex justify-between mt-5 w-[60vw] max-w-screen-md items-center border rounded-md">
     
       <div className="py-6 rounded-md shadow-md px-4 flex text-accent gap-3 items-center">
          <p>{token.position}</p>
          <p>{token.label}</p>
          <p className="text-gray-400">{`(${token.status})`}</p>
          <p className="hidden md:flex text-gray-400">{moment(new Date(token.createdAt)).fromNow()}</p>
       </div>
       
       {token.status === 'waiting' ? 
       (<div className="flex gap-3 mr-3 items-center">
        <SquareArrowUp onClick={() => onMove(token.id, 'up')} className="hover:bg-green-500 rounded-md" />
       <SquareArrowDown onClick={() => onMove(token.id, 'down')} className="hover:bg-red-500 rounded-md"/>

      
       <Button onClick={() => cancelToken(token.id)} className="border px-6 hover:bg-red-500">Cancel</Button>

       </div>) : token.status === 'assigned' ? (
          <div className="flex gap-3 mr-3 items-center">
          <Button onClick={() => onServe(token.id)} className="text-white px-6 border hover:bg-green-600">
            Mark served
          </Button>
        </div>
       ) : (
        ''
       )
       }
      </div> 
  )
}
