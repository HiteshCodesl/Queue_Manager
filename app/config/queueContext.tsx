"use client"
import React, { createContext, useState } from "react"

export type Queue = {
    id: string,
    createdAt: string,
    managerId: string,
    name: string
}

type QueueType = {
    queues: Queue[],
    setQueues: (selectedQueue: Queue[]) => void;
    selectedQueueId: string | null,
    setSelectedQueueId: (selectedQueueId: string) => void
}

export const QueueContext = createContext<QueueType | undefined>(undefined);

export function QueueProvider({children}: {children: React.ReactNode}) {

   const [queues, setQueues] = useState<Queue[]>([]);
   const [selectedQueueId, setSelectedQueueId] = useState<string | null>(null);

  return (
    <QueueContext.Provider value={{ selectedQueueId, setSelectedQueueId, queues, setQueues }}>
       {children}
    </QueueContext.Provider>
  )
}

