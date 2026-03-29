'use client'

import { useState } from 'react'
import { 
  Code2, 
  Zap, 
  Shield, 
  BookOpen, 
  Copy, 
  ExternalLink,
  Check
} from 'lucide-react'

const features = [
  {
    icon: Code2,
    title: 'Simple Integration',
    description: 'Just one iframe tag - no complex setup required',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for performance with HLS.js and modern streaming',
  },
  {
    icon: Shield,
    title: 'Isolated Storage',
    description: 'Each configuration uses separate localStorage - no conflicts',
  },
  {
    icon: BookOpen,
    title: 'Full Documentation',
    description: 'Complete API reference with examples and best practices',
  },
]

const urlParameters = [
  {
    parameter: 'color',
    type: 'string',
    description: 'Primary color (hex without #)',
    example: '?color=ff0000',
  },
  {
    parameter: 'autoPlay',
    type: 'boolean',
    description: 'Enable auto-play feature',
    example: '?autoPlay=true',
  },
  {
    parameter: 'nextEpisode',
    type: 'boolean',
    description: 'Show next episode button (TV only)',
    example: '?nextEpisode=true',
  },
  {
    parameter: 'episodeSelector',
    type: 'boolean',
    description: 'Enable episode selection menu (TV only)',
    example: '?episodeSelector=true',
  },
  {
    parameter: 'progress',
    type: 'number',
    description: 'Start time in seconds',
    example: '?progress=120',
  },
]

const events = [
  { name: 'timeupdate', description: 'Continuous progress during playback' },
  { name: 'play', description: 'When video starts' },
  { name: 'pause', description: 'When video pauses' },
  { name: 'ended', description: 'When video ends' },
  { name: 'seeked', description: 'When user seeks to different time' },
]

const codeExamples = [
  {
    title: 'Basic Movie Player',
    description: 'Simple movie player without extra features',
    code: `<iframe
  src="https://www.aryanmovies.com/embed/movie/1078605"
  width="100%"
  height="600"
  frameborder="0"
  allowfullscreen>
</iframe>`,
  },
  {
    title: 'TV Series with All Features',
    description: 'TV player with custom color and all features enabled',
    code: `<iframe
  src="https://www.aryanmovies.com/embed/tv/119051/1/8?color=e50914&autoPlay=true&nextEpisode=true&episodeSelector=true"
  width="100%"
  height="600"
  frameborder="0"
  allowfullscreen>
</iframe>`,
  },
  {
    title: 'Custom Branded Player',
    description: 'Player with custom brand colors and autoplay',
    code: `<iframe
  src="https://www.aryanmovies.com/embed/movie/1078605?color=9146ff&autoPlay=true"
  width="100%"
  height="600"
  frameborder="0"
  allowfullscreen>
</iframe>`,
  },
  {
    title: 'Player with Start Time',
    description: 'Start video at 2 minutes (120 seconds) with custom color',
    code: `<iframe
  src="https://www.aryanmovies.com/embed/movie/1078605?color=e50914&progress=120&autoPlay=true"
  width="100%"
  height="600"
  frameborder="0"
  allowfullscreen>
</iframe>`,
  },
]

const progressTrackingCode = `// Add this script to your website
window.addEventListener("message", function (event) {
  // console.log("event: ", event);
  console.log("Message received from the player: ", JSON.parse(event.data)); // Message received from player
  if (typeof event.data === "string") {
    var messageArea = document.querySelector("#messageArea");
    messageArea.innerText = event.data;
  }
});`

const eventDataStructure = `{
  "type": "PLAYER_EVENT",
  "data": {
    "event": "timeupdate|play|pause|ended|seeked",
    "currentTime": 120.5,
    "duration": 7200,
    "progress": 1.6,
    "id": "299534",
    "mediaType": "movie",
    "season": 1,
    "episode": 8,
    "timestamp": 1640099520000
  }
}`

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 px-3 py-1.5 text-sm bg-surface-light hover:bg-surface-lighter text-white rounded-lg transition-colors"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-green-400" />
          Copied
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          Copy
        </>
      )}
    </button>
  )
}

export default function ApiPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            API Documentation
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Everything you need to integrate AryanMovies Player into your website
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-surface border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-text-muted text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* API Routes */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">API Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Movies</h3>
              <code className="block bg-black/50 rounded-lg px-4 py-3 text-primary text-sm mb-3">
                /embed/movie/&#123;tmdbId&#125;
              </code>
              <p className="text-text-muted text-sm">
                Replace <code className="text-primary">&#123;tmdbId&#125;</code> with the TMDB movie ID
              </p>
            </div>
            <div className="bg-surface border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">TV Series</h3>
              <code className="block bg-black/50 rounded-lg px-4 py-3 text-primary text-sm mb-3">
                /embed/tv/&#123;tmdbId&#125;/&#123;season&#125;/&#123;episode&#125;
              </code>
              <p className="text-text-muted text-sm">
                Specify the show ID, season number, and episode number
              </p>
            </div>
          </div>
        </div>

        {/* URL Parameters */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">URL Parameters</h2>
          <div className="bg-surface border border-white/10 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-6 py-4 text-white font-semibold">Parameter</th>
                    <th className="text-left px-6 py-4 text-white font-semibold">Type</th>
                    <th className="text-left px-6 py-4 text-white font-semibold">Description</th>
                    <th className="text-left px-6 py-4 text-white font-semibold">Example</th>
                  </tr>
                </thead>
                <tbody>
                  {urlParameters.map((param, index) => (
                    <tr key={param.parameter} className={index !== urlParameters.length - 1 ? 'border-b border-white/5' : ''}>
                      <td className="px-6 py-4">
                        <code className="text-primary">{param.parameter}</code>
                      </td>
                      <td className="px-6 py-4 text-text-muted">{param.type}</td>
                      <td className="px-6 py-4 text-text-muted">{param.description}</td>
                      <td className="px-6 py-4">
                        <code className="text-primary">{param.example}</code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Watch Progress Tracking */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Watch Progress Tracking</h2>
          <div className="bg-surface border border-white/10 rounded-xl p-6">
            <p className="text-text-muted mb-6">
              The player can send watch progress events to the parent window. You can save this progress to localStorage or your own backend. Here&apos;s a complete example:
            </p>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold">Progress Tracking Script</h3>
                <CopyButton code={progressTrackingCode} />
              </div>
              <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto">
                <code className="text-sm text-text-muted">{progressTrackingCode}</code>
              </pre>
            </div>

            <div className="mb-6">
              <h3 className="text-white font-semibold mb-4">The player sends progress updates containing:</h3>
              <div className="space-y-2 text-sm">
                <p><code className="text-white font-medium">id:</code> <span className="text-text-muted">Content ID</span></p>
                <p><code className="text-white font-medium">type:</code> <span className="text-text-muted">Content type (movie/tv)</span></p>
                <p><code className="text-white font-medium">progress:</code> <span className="text-text-muted">Watch progress percentage</span></p>
                <p><code className="text-white font-medium">timestamp:</code> <span className="text-text-muted">Current playback position in seconds</span></p>
                <p><code className="text-white font-medium">duration:</code> <span className="text-text-muted">Total duration in seconds</span></p>
                <p><code className="text-white font-medium">season:</code> <span className="text-text-muted">Season number (for TV shows)</span></p>
                <p><code className="text-white font-medium">episode:</code> <span className="text-text-muted">Episode number (for TV shows)</span></p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-white font-semibold mb-4">Events Sent</h3>
              <div className="space-y-2">
                {events.map((event) => (
                  <div key={event.name} className="flex gap-4 text-sm">
                    <code className="text-primary min-w-[100px]">{event.name}</code>
                    <span className="text-text-muted">{event.description}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">Event Data Structure</h3>
              <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto">
                <code className="text-sm text-text-muted">{eventDataStructure}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Code Examples</h2>
          <div className="space-y-6">
            {codeExamples.map((example) => (
              <div key={example.title} className="bg-surface border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white font-semibold mb-1">{example.title}</h3>
                    <p className="text-text-muted text-sm">{example.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <CopyButton code={example.code} />
                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-surface-light hover:bg-surface-lighter text-primary rounded-lg transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      Preview
                    </button>
                  </div>
                </div>
                <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto">
                  <code className="text-sm text-text-muted">{example.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
