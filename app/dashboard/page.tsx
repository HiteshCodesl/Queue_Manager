import { AddQueueToken } from "./components/AddQueueToken";
import { Header } from "./components/Header";
import { TokenCard } from "./components/TokenCard";

export default function Page() {
  return (
    <div className="overflow-hidden">
      <Header />
      <AddQueueToken />
    </div>
  )
}
