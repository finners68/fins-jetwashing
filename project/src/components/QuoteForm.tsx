import { useState, useRef, type ChangeEvent, type FormEvent } from 'react';
import { Send, Upload, X, Loader2, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  serviceType: string;
  message: string;
}

const serviceOptions = [
  'Driveway jetwashing',
  'Patio cleaning',
  'Front path cleaning',
  'Steps and entrance areas',
  'General outdoor surface cleaning',
  'Multiple areas',
];

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    serviceType: '',
    message: '',
  });

  const [files, setFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles].slice(0, 5));
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const uploadFiles = async (): Promise<string[]> => {
    const urls: string[] = [];

    for (const file of files) {
      const ext = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

      const { data, error: uploadError } = await supabase.storage
        .from('quote-photos')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from('quote-photos')
        .getPublicUrl(data.path);

      urls.push(urlData.publicUrl);
    }

    return urls;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      let photoUrls: string[] = [];

      if (files.length > 0) {
        photoUrls = await uploadFiles();
      }

      const { error: insertError } = await supabase.from('quotes').insert({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        service_type: formData.serviceType,
        message: formData.message,
        photo_urls: photoUrls,
      });

      if (insertError) throw insertError;

      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again or call us directly.');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="quote" className="py-20 bg-slate-50">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-slate-100">
            <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Quote Request Sent
            </h3>
            <p className="text-slate-600 text-lg">
              Thank you! We will get back to you with a fixed price as soon as possible.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-20 bg-slate-50">
      <div className="max-w-xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="inline-block text-cyan-600 font-semibold text-sm tracking-wide uppercase mb-3">
            Get in touch
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Request a Free Quote
          </h2>

          <p className="text-slate-600 text-lg">
            Fill in the form below and we will get back to you with a fixed price.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none transition-all text-slate-900"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none transition-all text-slate-900"
              placeholder="Your phone number"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none transition-all text-slate-900"
              placeholder="Your email address"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-1">
              Address or area <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none transition-all text-slate-900"
              placeholder="Your address or local area"
            />
          </div>

          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700 mb-1">
              What needs cleaning?
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none transition-all text-slate-900 bg-white"
            >
              <option value="">Select a service</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Upload photos of the area (Optional)
            </label>
            <p className="text-xs text-slate-500 mb-2">
             Up to 5 photos. Helps us give you a quicker and accurate quote.
            </p>

            <div
              onClick={() => fileInputRef.current?.click()}
              className="w-full px-4 py-6 rounded-lg border-2 border-dashed border-slate-200 hover:border-cyan-300 bg-slate-50 hover:bg-cyan-50/30 cursor-pointer transition-all text-center"
            >
              <Upload className="w-6 h-6 text-slate-400 mx-auto mb-2" />
              <p className="text-sm text-slate-500">Click to upload photos</p>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />

            {files.length > 0 && (
              <div className="mt-3 space-y-2">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-slate-50 rounded-lg px-3 py-2"
                  >
                    <span className="text-sm text-slate-600 truncate">
                      {file.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none transition-all text-slate-900 resize-none"
              placeholder="Any extra details about the job..."
            />
          </div>

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-300 text-slate-900 font-semibold py-4 rounded-lg text-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-[0.98] flex items-center justify-center gap-2"
          >
            {submitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Quote Request
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}