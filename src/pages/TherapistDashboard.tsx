import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, Send, ChevronUp, Smile, Clock, Calendar } from "lucide-react";

const TherapistDashboard = () => {
  const [message, setMessage] = useState("");
  const [isTopicExpanded, setIsTopicExpanded] = useState(false);

  const emotionData = [
    { name: "Joy", value: 30, color: "bg-emotion-joy" },
    { name: "Gratitude", value: 25, color: "bg-pink-500" },
    { name: "Pride", value: 20, color: "bg-orange-500" },
    { name: "Neutral", value: 15, color: "bg-emotion-neutral" },
    { name: "Sadness", value: 10, color: "bg-emotion-sadness" },
  ];

  const patientEmotions = [
    { name: "Neutral", value: 35, color: "bg-gray-400" },
    { name: "Joy", value: 20, color: "bg-green-500" },
    { name: "Sadness", value: 12, color: "bg-blue-500" },
    { name: "Anger", value: 5, color: "bg-red-500" },
    { name: "Fear", value: 5, color: "bg-purple-500" },
    { name: "Surprise", value: 5, color: "bg-yellow-500" },
    { name: "Disgust", value: 5, color: "bg-green-700" },
    { name: "Content", value: 5, color: "bg-teal-500" },
    { name: "Gratitude", value: 5, color: "bg-pink-500" },
    { name: "Pride", value: 5, color: "bg-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="flex h-screen">
        {/* Left Sidebar */}
        <div className="w-72 bg-white/80 backdrop-blur border-r border-purple-200 p-6 space-y-6 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
              <span className="text-xl">👤</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Simon Jones</h2>
              <p className="text-sm text-gray-600">28 yrs • Male</p>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2 text-gray-700">
              <Clock className="w-4 h-4 text-blue-500" />
              <span>Last session: 5 days ago</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar className="w-4 h-4 text-purple-500" />
              <span>Current session: 25 minutes</span>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg shadow-inner">
            <p className="text-sm leading-relaxed text-gray-800">
              Patient has been experiencing anxiety and mild depression. Previous session showed
              improvement in sleep pattern but continued worry about work-related stress.
            </p>
          </div>

          <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 border-orange-200 p-4 shadow-md">
            <button
              onClick={() => setIsTopicExpanded(!isTopicExpanded)}
              className="w-full flex items-center justify-between mb-3"
            >
              <h3 className="font-semibold text-gray-900">Topic-Emotion Analysis</h3>
              <ChevronUp
                className={`w-5 h-5 transition-transform text-orange-600 ${
                  isTopicExpanded ? "" : "rotate-180"
                }`}
              />
            </button>

            {isTopicExpanded && (
              <div className="space-y-3">
                <div className="p-3 bg-white/60 rounded-lg shadow">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Smile className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-medium text-gray-900">Neutral</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">35%</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Social Interactions</p>
                  <p className="text-xs italic text-gray-600">
                    "Large gatherings still make me nervous, but I managed to attend my friend's
                    party last weekend."
                  </p>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col bg-white/50 backdrop-blur">
          <div className="border-b border-purple-200 bg-gradient-to-r from-purple-100 to-pink-100 p-4 flex items-center justify-between shadow">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="hover:bg-white/50">
                <ChevronLeft className="w-5 h-5 text-purple-600" />
              </Button>
              <h1 className="text-xl font-semibold text-gray-900">Chat Session</h1>
            </div>
            <span className="text-sm text-gray-600 font-medium">9/9/2025</span>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Patient Message */}
            <div className="flex justify-start">
              <Card className="max-w-2xl bg-gradient-to-br from-green-400 to-teal-400 text-white p-4 rounded-2xl shadow-lg">
                <p className="mb-3">
                  therapeutic. I also reconnected with an old friend, which made me feel better.
                  These small moments have been bright spots in an otherwise difficult time.
                </p>
                <div className="mt-4 p-3 bg-white/20 backdrop-blur rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Smile className="w-5 h-5 text-yellow-300" />
                    <span className="font-medium">Joy</span>
                    <span className="ml-auto font-bold text-lg">30%</span>
                  </div>
                  <div className="text-sm mb-2">Primary emotion detected in response</div>
                  <div className="space-y-2">
                    <div className="text-xs font-medium mb-1">Emotion Breakdown</div>
                    {emotionData.map((emotion) => (
                      <div key={emotion.name} className="flex items-center gap-2">
                        <Smile className="w-4 h-4" />
                        <span className="text-xs flex-1">{emotion.name}</span>
                        <div className="flex-1 h-2 bg-white/30 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${emotion.color}`}
                            style={{ width: `${emotion.value}%` }}
                          />
                        </div>
                        <span className="text-xs w-8 text-right">{emotion.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Therapist Response */}
            <div className="flex justify-end">
              <Card className="max-w-2xl bg-gradient-to-br from-purple-400 to-pink-400 text-white border-0 p-4 rounded-2xl shadow-lg">
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-xs text-white/90">Dr. Thompson</span>
                  <span className="text-xs text-white/90">11:08 AM</span>
                </div>
                <p>
                  That's wonderful to hear about the gardening and reconnecting with your friend.
                  These are excellent coping strategies. Have you been practicing any of the
                  mindfulness techniques we discussed in our last session?
                </p>
              </Card>
            </div>
          </div>

          <div className="border-t border-purple-200 bg-white/80 backdrop-blur p-4">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="bg-white border-purple-300 focus:border-purple-500"
              />
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="border-t border-purple-200 bg-gradient-to-r from-blue-100 to-purple-100 p-4">
            <Button variant="ghost" className="w-full justify-between hover:bg-white/50 text-gray-900">
              <span>Emotion History</span>
              <ChevronUp className="w-4 h-4 rotate-180 text-purple-600" />
            </Button>
          </div>

          <div className="border-t border-purple-200 bg-gradient-to-r from-purple-100 to-pink-100 p-4">
            <Button variant="ghost" className="w-full justify-between hover:bg-white/50 text-gray-900">
              <span>AI MedScribe - SOAP Note</span>
              <span className="text-purple-600 font-semibold">🔄 Regenerate</span>
            </Button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-gradient-to-br from-orange-100 to-yellow-100 border-l border-orange-200 p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Patient's Emotional State</h2>
            <ChevronUp className="w-5 h-5 text-orange-600" />
          </div>

          <div className="mb-6 p-4 bg-white/60 rounded-lg shadow">
            <div className="flex items-center gap-2 mb-2">
              <Smile className="w-5 h-5 text-blue-500" />
              <span className="text-sm text-gray-700 font-medium">Neutral</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Primary emotion detected in response</span>
              <span className="text-2xl font-bold text-gray-900">35%</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4 text-gray-900">Emotion Breakdown</h3>
            <div className="space-y-3">
              {patientEmotions.map((emotion) => (
                <div key={emotion.name} className="p-3 bg-white/60 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <Smile className="w-4 h-4 text-purple-500" />
                      <span className="text-sm font-medium text-gray-900">{emotion.name}</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">{emotion.value}%</span>
                  </div>
                  <Progress value={emotion.value} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistDashboard;
