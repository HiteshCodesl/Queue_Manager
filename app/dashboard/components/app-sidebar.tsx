"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { Queue, QueueContext } from "@/app/config/queueContext"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"

export function AppSidebar() { 
    const [name,setName] = useState('');

    const context = useContext(QueueContext);
    if(!context) return null;
    const {queues, setQueues, selectedQueueId, setSelectedQueueId} = context;
    const [loading, setLoading] = useState(false);

    const handleClick = async() =>{
      if(!name){
        return toast('Enter a Queue name first')
      }
      setLoading(true);
      toast('Queue Adding')
       const response = await axios.post('/api/queues', {name});

       if(response){
          const newQueue = response.data;
          console.log(newQueue);
          setQueues([newQueue, ...queues ]);
          setName('');
          setLoading(false);
       }
    }

    useEffect(() =>{
    const getQueues = async () =>{
        const response = await axios.get('/api/queues');
        setQueues(response.data)
        console.log(response.data)
    }
    getQueues();
   }, [setQueues])

  return (
   
      <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <p className="font-bold text-2xl text-center mt-10">Your Queues</p>
               <div className="p-3">
                  {queues.map((q) => (
                    <div onClick={() => setSelectedQueueId(q.id)}
                    key={q.id} className={`p-3 border gap-2 flex flex-col text-md mt-2 rounded-xl shadow-md hover:border-purple-600 ${selectedQueueId === q.id ? 'border-purple-800' : 'normal-case'}`}>
                        <p className="font-inter">{q.name}</p>
                    </div>
                  ))}
               </div>
                
               <div className="flex flex-col gap-3 mx-3">
                <Input
                className="text-lg font-inter shadow-lg"
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 placeholder="Enter a Queue Name"
                 />
                <Button onClick={handleClick}
                 className="btn-primary mx-5 font-inter ">Create a Queue {loading && <Loader2  className="inline-block "/>}</Button>
               </div> 
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    
  )
}