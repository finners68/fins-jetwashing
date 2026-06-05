import { Droplets, ArrowDown } from 'lucide-react';

interface HeroProps {
  onGetQuote: () => void;
}

export default function Hero({ onGetQuote }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 40%)`,
        }} />
      </div>
      <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 text-sm text-slate-300">
          <Droplets className="w-4 h-4 text-cyan-400" />
          Serving North Wales
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
          Driveway &amp; Patio Cleaning in{' '}
            <br />
          <span className="text-cyan-400">North Wales</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Professional jetwashing for driveways, patios, paths and all outdoor surfaces across North Wales. Fixed price agreed upfront — you only pay when the job is done and you are happy.
        </p>
        <button
          onClick={onGetQuote}
          className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-[0.98]"
        >
          Get a Free Quote
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
