import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const res = await fetch('https://formsubmit.co/ajax/harsh.k.77077@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
        }),
      });

      const data = await res.json();

      if (data.success === 'true') {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">{t('contact.title')}</h2>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 mb-8"></div>
        <p className="text-center text-gray-400 mb-12">{t('contact.description')}</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-[#111827] p-6 rounded-lg flex items-start gap-4">
              <div className="bg-blue-600 p-2 rounded-md">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-gray-300">harsh.k.77077@gmail.com</p>
              </div>
            </div>
            <div className="bg-[#111827] p-6 rounded-lg flex items-start gap-4">
              <div className="bg-green-600 p-2 rounded-md">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-gray-300">+91 850900xxxx</p>
              </div>
            </div>
            <div className="bg-[#111827] p-6 rounded-lg flex items-start gap-4">
              <div className="bg-pink-600 p-2 rounded-md">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-gray-300">India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-[#111827] p-6 rounded-lg">
            <input type="hidden" name="_captcha" value="false" />

            <div>
              <label className="block mb-2 font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full p-3 rounded bg-[#0f172a] text-white border border-gray-700 outline-none"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Your Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="your.email@example.com"
                className="w-full p-3 rounded bg-[#0f172a] text-white border border-gray-700 outline-none"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Your Message</label>
              <textarea
                name="message"
                required
                placeholder="Your message..."
                className="w-full p-3 rounded bg-[#0f172a] text-white border border-gray-700 outline-none"
                rows="5"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded flex items-center justify-center gap-2"
            >
              <Send size={18} /> {t('contact.send')}
            </button>

            {formStatus === 'success' && (
              <p className="text-green-400 mt-4">{t('contact.success')}</p>
            )}
            {formStatus === 'error' && (
              <p className="text-red-400 mt-4">{t('contact.error')}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;




