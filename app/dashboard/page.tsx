import { AddQueueToken } from "./components/AddQueueToken";
import { Analytics } from "./components/Analytics";
import { Header } from "./components/Header";

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row gap-32 overflow-y-hidden">
      <div>
      <Header />
      <AddQueueToken />
      </div>
      <div className="mt-10 hidden lg:flex">
      <Analytics />
      </div>
    </div>
  )
}
