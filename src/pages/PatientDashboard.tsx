import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Star, Heart, Calendar, Sparkles, Users } from "lucide-react";

const PatientDashboard = () => {
  const energyOptions = [
    { emoji: "😊", label: "Energized", color: "bg-energy-green" },
    { emoji: "😌", label: "Peaceful", color: "bg-calm-blue" },
    { emoji: "😐", label: "Balanced", color: "bg-balanced-teal" },
    { emoji: "😕", label: "Low Energy", color: "bg-joy-yellow" },
    { emoji: "😞", label: "Struggling", color: "bg-growth-pink" },
  ];

  const powerUps = [
    {
      icon: "❤️",
      title: "Breathing Space",
      description: "5-minute guided breathing exercise",
      points: "+15 points",
      color: "bg-red-100",
      iconColor: "text-red-500",
    },
    {
      icon: "⭐",
      title: "Gratitude Boost",
      description: "Quick gratitude journaling prompt",
      points: "+20 points",
      color: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      icon: "😊",
      title: "Connection Circle",
      description: "Send encouragement to a friend",
      points: "+25 points",
      color: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-2">
            Welcome back, Alex! <span className="inline-block animate-pulse">⭐</span>
          </h1>
          <p className="text-muted-foreground">Your journey of growth continues today</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-energy-green/30 border-energy-green/50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium mb-1">Energy Streak</p>
                <p className="text-4xl font-bold">7 days</p>
              </div>
              <Star className="w-12 h-12 text-green-600" />
            </div>
          </Card>

          <Card className="bg-growth-pink/30 border-growth-pink/50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium mb-1">Growth Points</p>
                <p className="text-4xl font-bold">2,450</p>
              </div>
              <Heart className="w-12 h-12 text-pink-600" />
            </div>
          </Card>

          <Card className="bg-checkin-blue/30 border-checkin-blue/50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium mb-1">Check-ins</p>
                <p className="text-4xl font-bold">24</p>
              </div>
              <Calendar className="w-12 h-12 text-blue-600" />
            </div>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Energy Check */}
            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6">
              <h2 className="text-2xl font-bold mb-6">How's your energy today?</h2>
              <div className="grid grid-cols-5 gap-3">
                {energyOptions.map((option, index) => (
                  <button
                    key={index}
                    className={`${option.color} p-4 rounded-xl hover:scale-105 transition-transform flex flex-col items-center gap-2`}
                  >
                    <span className="text-4xl">{option.emoji}</span>
                    <span className="text-xs text-center font-medium text-gray-800">
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
            </Card>

            {/* Power-Ups */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-500" />
                Today's Power-Ups
              </h2>
              <div className="space-y-4">
                {powerUps.map((powerUp, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <div
                      className={`w-12 h-12 ${powerUp.color} rounded-full flex items-center justify-center text-2xl`}
                    >
                      {powerUp.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{powerUp.title}</h3>
                      <p className="text-sm text-muted-foreground">{powerUp.description}</p>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">
                      Start {powerUp.points}
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Growth Garden */}
            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6">
              <h2 className="text-2xl font-bold mb-6">Your Growth Garden</h2>
              <div className="bg-white/20 backdrop-blur rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">🌸</div>
                <h3 className="text-xl font-bold mb-2">Resilience Rose</h3>
                <p className="text-sm mb-4">Your garden is blooming beautifully!</p>
                <div className="mb-3">
                  <Progress value={68} className="h-3 bg-white/30" />
                </div>
                <p className="text-sm">68% to next bloom stage</p>
                <p className="text-xs mt-4 italic">
                  "Every small step you take helps your garden grow. You're doing amazing! 🌱✨"
                </p>
              </div>
            </Card>

            {/* Support Circle */}
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Your Support Circle
              </h2>
              <div className="space-y-4">
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <h3 className="font-semibold mb-2">Community Check-in</h3>
                  <p className="text-sm mb-3">Share encouragement with peers who understand</p>
                  <Button variant="secondary" className="w-full">
                    Join
                  </Button>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">5 friends online</h3>
                    <p className="text-sm">Ready to connect</p>
                  </div>
                  <Button variant="secondary">Connect</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
