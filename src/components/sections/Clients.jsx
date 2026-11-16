import { Hexagon, Triangle, Circle, Square, Star, Zap, Diamond, Cloud, Flame, Leaf, Anchor, Rocket } from 'lucide-react'
import Marquee from '../common/Marquee.jsx'
import { clients } from '../../data/site.js'

const icons = [Hexagon, Triangle, Circle, Square, Star, Zap, Diamond, Cloud, Flame, Leaf, Anchor, Rocket]

export default function Clients() {
  return (
    <section className="border-y border-line bg-navy py-12" aria-labelledby="clients-heading">
      <div className="container-x mb-8 flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
        <h2 id="clients-heading" className="font-heading text-lg font-semibold text-white">Trusted by growing brands</h2>
        <p className="text-xs uppercase tracking-[0.2em] text-muted">Demo client names for illustration</p>
      </div>
      <Marquee className="[mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        {clients.map((name, i) => {
          const Icon = icons[i % icons.length]
          return (
            <div
              key={`${name}-${i}`}
              className="group mx-5 flex items-center gap-3 rounded-full border border-white/5 px-6 py-3 text-muted grayscale transition-all duration-500 hover:border-violet/40 hover:text-white hover:grayscale-0 md:mx-7"
            >
              <Icon className="size-5 text-lavender opacity-50 transition group-hover:opacity-100" aria-hidden="true" />
              <span className="whitespace-nowrap font-heading text-lg font-semibold">{name}</span>
            </div>
          )
        })}
      </Marquee>
    </section>
  )
}
