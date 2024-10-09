import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Headphones, Mic, Zap } from "lucide-react"

export default function Component() {
  // Replace this with your actual OAuth2 URL
  const discordOAuthURL = "https://discord.com/oauth2/authorize?client_id=1292149683090751569"

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-600 to-indigo-700">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <div className="flex items-center">
          <Image
            src="https://i.ibb.co/YRzfm4d/Wavy-Bot-Logo.webp"
            alt="Wavy Bot Logo"
            width={32}
            height={32}
            className="mr-2 rounded-full"
          />
          <h1 className="text-2xl font-bold text-white">Wavy</h1>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4 text-white" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4 text-white" href="#add-bot">
            Add to Discord
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Meet Wavy - Your Discord Music Companion
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Elevate your Discord server with high-quality music streaming, intuitive controls, and a wave of awesome features.
                </p>
              </div>
              <Button className="bg-white text-purple-600 hover:bg-gray-100" size="lg" asChild>
                <a href={discordOAuthURL} target="_blank" rel="noopener noreferrer">Add to Discord</a>
              </Button>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <Music className="w-10 h-10 text-purple-600 mb-2" />
                  <CardTitle>High-Quality Streaming</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Enjoy crystal-clear audio from various sources including YouTube, Spotify, and SoundCloud.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Headphones className="w-10 h-10 text-purple-600 mb-2" />
                  <CardTitle>Intuitive Controls</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Easy-to-use commands for play, pause, skip, and queue management.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Mic className="w-10 h-10 text-purple-600 mb-2" />
                  <CardTitle>Lyrics Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Display synchronized lyrics for sing-alongs and karaoke nights.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="w-10 h-10 text-purple-600 mb-2" />
                  <CardTitle>24/7 Uptime</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Reliable performance with minimal downtime, ensuring your music never stops.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="add-bot" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Ride the Wave?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Add Wavy to your Discord server and start enjoying the best music experience with your friends.
                </p>
              </div>
              <Button className="bg-purple-600 text-white hover:bg-purple-700" size="lg" asChild>
                <a href={discordOAuthURL} target="_blank" rel="noopener noreferrer">Add Wavy to Discord</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500">© 2024 Wavy Bot. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4 text-gray-500" href="https://legal.thunderlink.xyz/">
            Legal Informations
          </a>
        </nav>
      </footer>
    </div>
  )
}