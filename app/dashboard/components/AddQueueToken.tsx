"use client"
import { QueueContext } from "@/app/config/queueContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { TokenCard } from "./TokenCard";

export interface Token {
    id: string,
    label: string,
    position: number,
    queueId: string,
    servedAt: string | null,
    status: string,
    assignedAt: string | null,
    cancelledAt: string | null,
    createdAt: string
}

export function AddQueueToken() {
    const context = useContext(QueueContext);
    if(!context) return null;

    const {selectedQueueId} = context;
    const [label, setLabel] = useState('');
    const [tokens, setTokens] = useState<Token[]>([]);

    const addToken = async() =>{
        console.log("selectedid",selectedQueueId);
        const queueId = selectedQueueId;
        const response = await axios.post("/api/tokens", {queueId, label});

        if(response){
            console.log(response.data);
            setTokens(prev => [...prev, response.data])
            setLabel('');
        }
    }

    useEffect(() => {
    if(!selectedQueueId){
      console.log('selectedid not found')
      return;
    }
     const fetchTokens = async() => {
      console.log("selectedid", selectedQueueId)
      const queueId = selectedQueueId;
      try{
      const response = await axios.get(`/api/tokens/queue/${queueId}`);
      if(response){
        setTokens(response.data);
        console.log(response.data);
      }
      }catch(err){
        console.log(err);
      }
    } 
     fetchTokens();         
    }, [selectedQueueId])

  return (
    <div>
        <div className="flex mt-10 gap-4 flex-col md:flex-row">
            <Input
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="w-[70vw] md:w-[30vw] max-w-screen-md"
             placeholder='Token Label or auto'
             />
             <div className="flex gap-4">
            <Button onClick={addToken} className="btn-primary">
                Add Token
             </Button>
             <Button className="btn-primary">
                Assign Top
             </Button>
             </div>
        </div>
            {tokens.map((t) =>(
                <div key={t.id}>
                    <TokenCard token={t} onCancel={(updatedToken) => {
                        setTokens(prev => prev.map(token => token.id === updatedToken.id ? updatedToken : token))
                    }}  />
                </div>
            ))}
    </div>
  )
}

