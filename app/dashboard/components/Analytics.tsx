
export function Analytics() {
  return (
     <div className=" w-[30vw] h-[30vw] border p-8 rounded-md">
        <h2 className="text-center text-xl">DashBoard Analytics</h2>
            
                <div className="mt-4">
                 <div>
                    <h2 className="text-lg text-blue-500 border-b border-blue-500 font-inter">AVG Wait (sec)</h2>
                    <p className="mt-2"><span className="font-bold">time</span> - {}</p>
                 </div>

                 <div className="mt-5">
                    <h2 className="text-lg text-blue-500 border-b border-blue-500 font-inter">Queue Length</h2>
                    <p className="mt-2"><span className="font-bold">basic details</span> - {}</p>
                </div>

                  <div className="mt-5">
                    <h2 className="text-lg text-blue-500 border-b border-blue-500 font-inter">Summary</h2>
                    <p className="mt-2"><span className="font-bold">Doctor</span> - {}</p>
                 </div>

                 <div className="mt-5">
                    <h2 className="text-lg text-blue-500 border-b border-blue-500 font-inter">Symptoms</h2>
                    <p className="mt-2"><span className="font-bold"></span> - {}</p>
                </div>
              </div>
        </div>        
  )
}

