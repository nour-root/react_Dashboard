import { AppLineChat } from "@/components/AppLineChat";
import CardList from "@/components/CardList";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";

export default function SingleUserPage() {
  return (
    <div className="px-4 pb-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>test</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* Container */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* Left */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* user badges container */}
          <div className="bg-muted p-4 rounded-lg">
            <h1 className="font-semibold text-xl">Badges</h1>
            <div className="mt-4 flex gap-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border-1 border-blue-500/30 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verifies user</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-green-500/30 border-1 border-green-500/30 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    Admin users have access to all features and can manage
                    users.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/30 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Awarded</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been awarded fot their contributions.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-orange-500/30 border-1 border-orange-500/30 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been popular in this community.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* user information  */}
          <div className="bg-muted p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-xl capitalize">
                user information
              </h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit user</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-2">
                <p className="text-sm text-muted-foreground">
                  Profile completion
                </p>
                <Progress value={66} />
                <div className="flex items-center gap-2">
                  <span className="font-bold">Username:</span>
                  <span>Test</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">Email:</span>
                  <span>Test@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">Phone number:</span>
                  <span>+1 234 5678</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">Location:</span>
                  <span>New York, NY</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">Role:</span>
                  <Badge>Admin</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Joined on 2025.01.01
                </p>
              </div>
            </div>
          </div>
          {/* CardList */}
          <div className="bg-muted p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>
        {/* Right */}
        <div className="w-full xl:w-2/3 space-y-6">
          <div className="bg-muted p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="border size-12">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">Test</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              neque repellat ipsum quidem tempora. Corporis earum quasi eaque
              laudantium blanditiis obcaecati ipsam, nostrum perferendis labore
              nobis, optio, sapiente quia minima?
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <h1 className="text-xl font-semibold mb-4">User Activity</h1>
              <AppLineChat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
