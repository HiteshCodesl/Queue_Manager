"use client"
import { QueueContext } from "@/app/config/queueContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { TokenCard } from "./TokenCard";
import { toast } from "sonner";

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
        if(!selectedQueueId){
          return toast('select a Queue first');
        }
        toast('Adding Token')
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

    
  const moveHandler = async(id: string, direction: 'up' | 'down') =>{
    try{ 
    toast(`Moving the Token ${direction}`)
    const response = await axios.post(`/api/tokens/move/${id}`, {direction})
     
     if(response.data.ok && response.data.tokens){
       setTokens(response.data.tokens)
     }
     else{
       toast('token cannot be moved')
     }
    }catch(err){
      console.log(err)
    }
  }

  const handleAssignTop = async() => {
    try{
      toast('Assigning top token for serve')
      console.log('selectedId', selectedQueueId)
     const response = await axios.post(`/api/tokens/assign/${selectedQueueId}`);
 
     if(response.data.body.ok){
       setTokens(response.data.body.tokens)
     }
    }catch(err){
      console.log(err)
    }
  }

  const handleServe = async(id: string) => {
    try{
      toast('serving the token')
      console.log("id", id)
     const response = await axios.post(`/api/tokens/serve/${id}`);

     if(response.data.ok){
      setTokens(response.data.tokens)
     }
     
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div>
        <div className="flex mt-10 gap-4 flex-col md:flex-row">
            <Input
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="w-[70vw] md:w-[28vw] max-w-screen-md"
             placeholder='Token Label or auto'
             />
             <div className="flex gap-4">
            <Button onClick={addToken} className="btn-primary">
                Add Token
             </Button>
             <Button onClick={handleAssignTop}  className="btn-primary">
                Assign Top
             </Button>
             </div>
        </div>
        <div className="mt-10">
            {tokens.map((t) =>(
                <div key={t.id}>
                    <TokenCard token={t} onCancel={(updatedToken) => {
                        setTokens(prev => prev.map(token => token.id === updatedToken.id ? updatedToken : token)) 
                      }}
                       onMove={moveHandler}
                       onServe={handleServe}
                      />
                </div>
            ))}
          </div>
    </div>
  )
}

