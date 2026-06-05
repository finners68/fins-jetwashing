import { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface GalleryItem {
  before: string;
  after: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    before: '/Godrer_Coed_Garage_before.jpeg',
    after: '/Godrer_Coed_Garage_after.jpeg',
    caption: 'Driveway Wash and Re-Sand',
  },
  {
    before: '/Godrer_Coed_Weeds_Before.jpeg',
    after: '/Godrer_Coed_Weeds_After.jpeg',
    caption: 'Paving De-Weed and Re-Sand',
  },
  {
    before: '/photo_16_2026-05-17_22-24-04.jpg',
    after: '/photo_15_2026-05-17_22-24-04.jpg',
    caption: 'Patio Wash',
  },
  {
    before: '/photo_2_2026-05-17_22-24-04.jpg',
    after: '/photo_1_2026-05-17_22-24-04.jpg',
    caption: 'Outdoor Steps Wash',
  }
];

function GalleryCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  return (
    <div
      className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer border border-slate-100"
      onClick={onClick}
    >
      <div className="grid grid-cols-2 gap-0.5">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
          <img
            src={item.before}
            alt={`Before driveway and patio pressure washing - ${item.caption} - Fin's Jet Washing, North Wales`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <span className="absolute top-2 left-2 bg-red-500/90 text-white text-xs font-semibold px-2 py-1 rounded">
            Before
          </span>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
          <img
            src={item.after}
            alt={`After professional pressure washing and jetwashing - ${item.caption} - Fin's Jet Washing, North Wales`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <span className="absolute top-2 right-2 bg-emerald-500/90 text-white text-xs font-semibold px-2 py-1 rounded">
            After
          </span>
        </div>
      </div>
      <div className="p-4 flex items-center justify-between">
        <p className="font-medium text-slate-700">{item.caption}</p>
        <Maximize2 className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 transition-colors" />
      </div>
    </div>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
    }
  };

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-cyan-600 font-semibold text-sm tracking-wide uppercase mb-3">
            See the difference
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Before &amp; After Gallery
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-lg">
            Real results from real jobs. See what professional pressure washing and jetwashing can do for your outdoor surfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <GalleryCard key={index} item={item} onClick={() => openLightbox(index)} />
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="relative">
                <img
                  src={galleryItems[lightboxIndex].before}
                  alt="Before"
                  className="w-full rounded-lg shadow-2xl"
                />
                <span className="absolute top-3 left-3 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded">
                  Before
                </span>
              </div>
              <div className="relative">
                <img
                  src={galleryItems[lightboxIndex].after}
                  alt="After"
                  className="w-full rounded-lg shadow-2xl"
                />
                <span className="absolute top-3 right-3 bg-emerald-500 text-white text-sm font-semibold px-3 py-1 rounded">
                  After
                </span>
              </div>
            </div>
            <p className="text-center text-white text-lg font-medium">
              {galleryItems[lightboxIndex].caption}
            </p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
