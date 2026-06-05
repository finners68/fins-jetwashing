import { ArrowDown } from 'lucide-react';

interface CTAProps {
  onGetQuote: () => void;
}

export default function CTA({ onGetQuote }: CTAProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Want your driveway or patio pressure washed in North Wales?
        </h2>
        <p className="text-slate-300 text-lg mb-8">
          Get a free, no-obligation quote for driveway cleaning, patio cleaning or any outdoor surface across Deganwy, Conwy, Llandudno and surrounding areas.
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
