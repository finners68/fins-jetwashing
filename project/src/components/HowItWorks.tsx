import { ClipboardList, PoundSterling, ThumbsUp } from 'lucide-react';
import { type ReactNode } from 'react';

interface Step {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '1',
    icon: <ClipboardList className="w-7 h-7" />,
    title: 'Request a Quote',
    description: 'Fill in the short form or give us a call. Tell us what needs cleaning and we will get back to you quickly.',
  },
  {
    number: '2',
    icon: <PoundSterling className="w-7 h-7" />,
    title: 'Get a Fixed Price',
    description: 'We will give you a clear, fixed price before any work starts. No surprises, no hidden costs.',
  },
  {
    number: '3',
    icon: <ThumbsUp className="w-7 h-7" />,
    title: 'Pay Only When Happy',
    description: 'We complete the job and you only pay once you are satisfied with the result. Simple as that.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-cyan-600 font-semibold text-sm tracking-wide uppercase mb-3">
            Simple process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-lg">
            Getting your outdoor surfaces cleaned is straightforward. Three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-slate-200" />
              )}
              <div className="relative z-10 w-20 h-20 bg-white border-2 border-cyan-200 rounded-full flex items-center justify-center text-cyan-600 mx-auto mb-6 shadow-sm">
                {step.icon}
              </div>
              <div className="inline-flex items-center justify-center w-7 h-7 bg-cyan-500 text-white text-sm font-bold rounded-full mb-3">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
