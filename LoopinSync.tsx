import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BadgeCheck, TimerReset } from "lucide-react"

export default function LoopinSync() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md rounded-2xl shadow-xl p-4 bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">🗳️ Cast Your Vote</h2>
            <BadgeCheck className="text-green-500" />
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Proposal: <span className="font-medium text-gray-800">Enable Daily Loopin Staking</span>
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-gray-700 text-sm">
            🚀 What’s next? You decide. Vote on rewards, features, staking — it’s all up to the community.
            ✅ Every vote counts. Every holder matters.
          </p>

          <div className="space-y-2">
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
              ✅ Yes, I Support
            </Button>
            <Button variant="outline" className="w-full">
              ❌ No, I Don’t Support
            </Button>
          </div>

          <div className="text-sm text-gray-600 pt-2">
            <div className="flex items-center justify-between mb-1">
              <span>Time left:</span>
              <span className="flex items-center gap-1">
                <TimerReset className="w-4 h-4" />
                2d 14h
              </span>
            </div>
            <Progress value={60} />
            <div className="text-xs text-gray-400 mt-1 text-right">60% votes in</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
