import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ReviewCard() {
  return (
    <div className="max-w-sm rounded-[16px] p-[1px] bg-gradient-to-b from-[#883beb] to-[#2a0a57]">
      <Card className="rounded-[16px] bg-[linear-gradient(180deg,#1C053A_0%,#0B0019_24%)] text-white p-4 border-0">
        <CardContent className="space-y-4">

          {/* User info */}
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-semibold">John Doe</p>
              <strong className="text-sm text-gray-300">
                Software Engineer
              </strong>
            </div>

            <Avatar>
              <AvatarImage src="/user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>

          {/* Review text */}
          <p className="text-sm text-gray-300">
            This product exceeded my expectations. The UI is clean, fast,
            and very easy to integrate into my Next.js project.
          </p>

        </CardContent>
      </Card>
    </div>
  )
}