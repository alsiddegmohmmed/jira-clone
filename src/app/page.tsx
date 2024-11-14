
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; 

export default function Home() {
  return (
    <div className=""> 
        <Input />
        <Button > Primary </Button>
        <Button variant="secondary"> Secondary </Button>
        <Button variant="destructive"> desturctive </Button>
        <Button variant="ghost"> Ghost </Button>
        <Button variant="muted"> muted </Button>
        <Button variant="outline"> outline  </Button>
        <Button variant="teritray"> treitary </Button>
    </div>
  );
}
  