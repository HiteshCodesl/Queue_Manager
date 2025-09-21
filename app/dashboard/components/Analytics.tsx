"use client"
import { QueueContext } from "@/app/config/queueContext";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";

interface Analytics {
   currentWaiting: number,
   avgWaitSec: number,
   totalServed: number,
   cancelled: number
}

export function Analytics() {
   const context = useContext(QueueContext);
       if(!context) return null;
   
       const {selectedQueueId} = context;
       const [analytics, setAnalytics] = useState<Analytics>();

       useEffect(() =>{    
         if(!selectedQueueId) return;
         let cancelled = false;

         const fetchAnalytic = async() => {
            const response = await axios.get(`/api/tokens/analytics/${selectedQueueId}`)

            if(response){
               console.log(response.data);
               setAnalytics(response.data);
            }
         }
         fetchAnalytic();
         const id = setInterval(fetchAnalytic, 5000); 
         return () => { cancelled = true; clearInterval(id) };
       }, [selectedQueueId])

  return (
     <div className="mt-10 w-[20vw] h-[20vw] border p-8 rounded-md">
        <h2 className="text-center text-xl">DashBoard Analytics</h2>
            
                <div className="mt-2">
                 <div>
                    <h2 className="text-lg text-blue-500 border-b border-blue-500 font-inter">AVG Wait (sec)</h2>
                    <p className="mt-2">{analytics?.avgWaitSec}</p>
                 </div>

                 <div className="mt-5">
                    <h2 className="text-lg text-blue-500 border-b border-blue-500 font-inter">Current Waiting</h2>
                    <p className="mt-2">{analytics?.currentWaiting}</p>
                </div>

                  <div className="mt-5">
                    <h2 className="text-lg text-blue-500 border-b border-blue-500 font-inter">Total Served</h2>
                    <p className="mt-2">{analytics?.totalServed}</p>
                 </div>

                  <div className="mt-5">
                    <h2 className="text-lg text-blue-500 border-b border-blue-500 font-inter">Cancelled Token</h2>
                    <p className="mt-2">{analytics?.cancelled}</p>
                 </div>
              </div>
        </div>        
  )
}

