import { Car, Trees, Footprints, Sparkles } from 'lucide-react';
import { type ReactNode } from 'react';

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Car className="w-7 h-7" />,
    title: 'Driveway Cleaning & Pressure Washing',
    description: 'Make your driveway look cleaner, brighter and better looked after. We remove built-up dirt, moss, weeds, algae and surface staining from block paving, tarmac, concrete and resin driveways.',
  },
  {
    icon: <Trees className="w-7 h-7" />,
    title: 'Patio Cleaning & Jetwashing',
    description: 'Bring your patio back to life with a proper pressure wash. We clean slabs, stone and patio surfaces that have become dull, dirty, slippery or covered in moss and algae.',
  },
  {
    icon: <Footprints className="w-7 h-7" />,
    title: 'Path & Entrance Cleaning',
    description: 'Make the front of your home look sharper from the moment people arrive. We clean paths, steps, porches and entrance areas so they look cleaner, safer and more welcoming.',
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: 'General Outdoor Surface Cleaning',
    description: 'Freshen up other outdoor areas including walls, decking, fencing and paved spaces. If it has built-up grime, moss or algae, we can help get it looking clean again.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-cyan-600 font-semibold text-sm tracking-wide uppercase mb-3">
            What we do
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Jetwashing Services in North Wales
          </h2>

          <p className="text-slate-600 max-w-xl mx-auto text-lg">
            We clean the outdoor areas that make your home look tired, dirty or poorly kept. Driveways, patios, paths, steps and entrances cleaned properly across Deganwy, Conwy, Llandudno, Rhos-on-Sea, Colwyn Bay and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-slate-50 hover:bg-white rounded-xl p-6 border border-slate-100 hover:border-cyan-200 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-cyan-50 group-hover:bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600 mb-4 transition-colors">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {service.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}