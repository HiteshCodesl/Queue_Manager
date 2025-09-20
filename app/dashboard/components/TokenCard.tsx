
import { SquareArrowDown, SquareArrowUp } from "lucide-react";
import { Token } from "./AddQueueToken";
import { Button } from "@/components/ui/button";
import axios from "axios";

export function TokenCard({token, onCancel}: {token: Token,  onCancel: (updatedToken: Token) => void }) {
   
  const cancelToken = async(id: string) =>{
    console.log('tokenId', id)
     const response = await axios.post(`/api/tokens/remove/${id}`); 

     if(response){
      onCancel(response.data);
      console.log(response.data)
     }
  }

  const moveUp = async(id: string) =>{
    const direction = "up";
     const response = await axios.post(`/api/tokens/move/${id}`, {direction})

     if(response){
       console.log('moved up')
     }
  }

  return (
      <div className="flex justify-between mt-5 w-[60vw] max-w-screen-md items-center border">
     
       <div className="py-6 rounded-md shadow-md px-4 flex text-accent gap-3 items-center">
          <p>{token.position}</p>
          <p>{token.label}</p>
          <p className="text-gray-400">{`(${token.status})`}</p>
       </div>

       <div className="flex gap-3 mr-3 items-center">
        <SquareArrowUp onClick={() => moveUp(token.id)} className="hover:bg-green-500" />
       <SquareArrowDown className="hover:bg-red-500"/>

       {token.status === 'cancelled' ?  '' :<Button onClick={() => cancelToken(token.id)} className="border px-6 hover:bg-gray-500">Cancel</Button>}

       </div>
      </div> 
  )
}
