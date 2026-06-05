import { PoundSterling, ShieldCheck, Camera, MapPin, HeartHandshake } from 'lucide-react';
import { type ReactNode } from 'react';

interface Reason {
  icon: ReactNode;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: <PoundSterling className="w-6 h-6" />,
    title: 'Fixed price before work starts',
    description: 'You know exactly what you will pay before we begin. No surprises.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'No payment until the job is complete',
    description: 'You only pay once the work is done and you are happy with the result.',
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: 'Before and after photos',
    description: 'We take photos so you can clearly see the difference our work makes.',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Local to Conwy County & North Wales',
    description: 'Based in Deganwy, we cover Conwy, Llandudno, Rhos-on-Sea, Colwyn Bay and the surrounding North Wales area. We do the job properly and leave your driveway or patio looking cleaner, brighter, and well looked after.',
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: 'Simple, honest service',
    description: 'No jargon, no upselling, no fuss. Just a good job at a fair price.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-cyan-600 font-semibold text-sm tracking-wide uppercase mb-3">
            Why us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-lg">
            We keep things simple, honest and straightforward. Here is what sets us apart.
          </p>
        </div>

        <div className="space-y-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex items-start gap-5 bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-cyan-100 transition-colors"
            >
              <div className="flex-shrink-0 w-11 h-11 bg-cyan-50 rounded-lg flex items-center justify-center text-cyan-600">
                {reason.icon}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">{reason.title}</h3>
                <p className="text-slate-600 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
