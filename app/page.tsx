import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Headphones, Mic, Zap } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useEffect, useRef, useState } from 'react'

const WaveDivider = ({ isReversed = false }: { isReversed?: boolean }) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect()
        setOffset({
          x: (event.clientX - rect.left) / rect.width,
          y: (event.clientY - rect.top) / rect.height,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className={`wave-divider relative overflow-hidden ${isReversed ? 'rotate-180' : ''}`}>
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="w-full h-24 md:h-32 lg:h-40 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${offset.x * 20}px, ${offset.y * 20}px)`,
        }}
      >
        <path
          fill="currentColor"
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,64L48,74.7C96,85,192,107,288,138.7C384,171,480,213,576,224C672,235,768,213,864,181.3C960,149,1056,107,1152,85.3C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </path>
      </svg>
    </div>
  )
}

export default function Component() {
  const discordOAuthURL = "https://discord.com/oauth2/authorize?client_id=1292149683090751569"

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-600 to-indigo-700 dark:from-gray-900 dark:to-gray-800">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between">
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
        <nav className="flex gap-4 sm:gap-6 items-center">
          <a className="text-sm font-medium hover:underline underline-offset-4 text-white hidden sm:inline-block" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4 text-white hidden sm:inline-block" href="#add-bot">
            Add to Discord
          </a>
          <ThemeToggle />
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
              <Button className="bg-white text-purple-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-purple-400 dark:hover:bg-gray-700" size="lg" asChild>
                <a href={discordOAuthURL} target="_blank" rel="noopener noreferrer">Add to Discord</a>
              </Button>
            </div>
          </div>
        </section>
        <WaveDivider />
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 dark:text-white">Features</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="dark:bg-gray-800 backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardHeader className="flex flex-col items-center">
                  <Music className="w-10 h-10 text-purple-600 mb-2 dark:text-purple-400" />
                  <CardTitle className="dark:text-white text-center">High-Quality Streaming</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <CardDescription className="dark:text-gray-300 text-center">Enjoy crystal-clear audio from various sources including YouTube, Spotify, and SoundCloud.</CardDescription>
                </CardContent>
              </Card>
              <Card className="dark:bg-gray-800 backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardHeader className="flex flex-col items-center">
                  <Headphones className="w-10 h-10 text-purple-600 mb-2 dark:text-purple-400" />
                  <CardTitle className="dark:text-white text-center">Intuitive Controls</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <CardDescription className="dark:text-gray-300 text-center">Easy-to-use commands for play, pause, skip, and queue management.</CardDescription>
                </CardContent>
              </Card>
              <Card className="dark:bg-gray-800 backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardHeader className="flex flex-col items-center">
                  <Mic className="w-10 h-10 text-purple-600 mb-2 dark:text-purple-400" />
                  <CardTitle className="dark:text-white text-center">Lyrics Integration</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <CardDescription className="dark:text-gray-300 text-center">Display synchronized lyrics for sing-alongs and karaoke nights.</CardDescription>
                </CardContent>
              </Card>
              <Card className="dark:bg-gray-800 backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardHeader className="flex flex-col items-center">
                  <Zap className="w-10 h-10 text-purple-600 mb-2 dark:text-purple-400" />
                  <CardTitle className="dark:text-white text-center">24/7 Uptime</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <CardDescription className="dark:text-gray-300 text-center">Reliable performance with minimal downtime, ensuring your music never stops.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <WaveDivider isReversed />
        <section id="add-bot" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-indigo-700 to-purple-600 dark:from-gray-800 dark:to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Ready to Ride the Wave?</h2>
                <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Add Wavy to your Discord server and start enjoying the best music experience with your friends.
                </p>
              </div>
              <Button className="bg-white text-purple-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-purple-400 dark:hover:bg-gray-700" size="lg" asChild>
                <a href={discordOAuthURL} target="_blank" rel="noopener noreferrer">Add Wavy to Discord</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t bg-white dark:bg-gray-900 dark:border-gray-700">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Wavy Bot. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <a className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400" href="https://legal.wavybot.me/">
              Legal Information
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}