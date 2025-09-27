import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
export default function TodoList() {
  const List = Array.from({ length: 6 });
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-4">Todo List</h1>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a day</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="rounded-2xl p-0 w-auto">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </PopoverContent>
      </Popover>
      {/* LIST */}
      <ScrollArea className="max-h-[350px] mt-4 overflow-y-auto scroll-area">
        {/* LIST ITEMS */}
        <div className="space-y-4 mr-4">
          {List.map((_, i) => (
            <Card className="p-4" key={i}>
              <div className="flex items-center gap-4">
                <Checkbox id="item1" defaultChecked={i >= 2} />
                <label
                  htmlFor="item1"
                  className="text-sm text-muted-foreground"
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
