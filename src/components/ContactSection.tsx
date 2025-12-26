import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8081/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error("Server xatosi!");
      }

      alert("Murojaatingiz muvaffaqiyatli yuborildi!");

      // Formani tozalash
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: ""
      });

    } catch (err) {
      console.error(err);
      alert("Xabar yuborishda xatolik!");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id='contact-section' className="flex flex-col h-full">
      
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-klsm p-8 h-full flex flex-col">
        <h2 className="mb-8 font-bold text-gray-800">Biz bilan bog'laning</h2>

        <div className="space-y-6 flex-grow">

          {/* Full Name Field */}
          <div>
            <label htmlFor="fullName" className="block text-gray-700 mb-2">
              Ism-sharifingiz <span className="text-[#0EB57D]">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0EB57D]/30 focus:border-[#0EB57D] transition-all"
              placeholder="Ismingizni kiriting"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              E-mail <span className="text-[#0EB57D]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0EB57D]/30 focus:border-[#0EB57D] transition-all"
              placeholder="email@example.com"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-gray-700 mb-2">
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onFocus={(e) => {
              if (!e.target.value || e.target.value === "+998 ") {
              e.target.value = "+998 ";
              }
              }}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0EB57D]/30 focus:border-[#0EB57D] transition-all"
              placeholder="+998 (00) 000-00-00"
              />
           
            <p className="mt-2 text-sm text-gray-400">
              Murojaatingizni aniq va iloji boricha batafsil tushuntiring…
            </p>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Savolingiz / Ariza / Taklif <span className="text-[#0EB57D]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0EB57D]/30 focus:border-[#0EB57D] transition-all resize-none"
              placeholder="Xabaringizni shu yerga yozing..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#0EB57D] to-[#0BA36C] text-white py-4 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Yuborish</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path
                d="M16.5 1.5L8.25 9.75M16.5 1.5L11.25 16.5L8.25 9.75M16.5 1.5L1.5 6.75L8.25 9.75"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

        </div>
      </form>
    </div>
  );
}