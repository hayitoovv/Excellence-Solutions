import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Ushbu platforma qanday ishlaydi?",
    answer: "Platformamiz zamonaviy texnologiyalar asosida ishlab chiqilgan bo'lib, foydalanuvchilarga qulay interfeys va tez xizmat ko'rsatishni ta'minlaydi. Siz ro'yxatdan o'tib, barcha imkoniyatlardan foydalanishingiz mumkin."
  },
  {
    question: "Tenderlarda qanday ishtirok etishim mumkin?",
    answer: "Tenderlarda ishtirok etish uchun avval ro'yxatdan o'tishingiz va kerakli hujjatlarni taqdim etishingiz kerak. Barcha tenderlar platformada e'lon qilinadi va siz o'z taklifingizni yuborishingiz mumkin."
  },
  {
    question: "Fuqarolar qanday ma'lumotlarga ega bo'lishadi?",
    answer: "Fuqarolar platformadagi barcha ochiq ma'lumotlarga kirish huquqiga ega. Bu davlat xaridlari, tender natijalari va boshqa ommaviy ma'lumotlarni o'z ichiga oladi."
  },
  {
    question: "Platformaga qanday kirishim mumkin?",
    answer: "Platformaga kirish uchun veb-saytimizga tashrif buyuring va ro'yxatdan o'ting. Mobil ilovamiz ham mavjud bo'lib, uni App Store yoki Google Play'dan yuklab olishingiz mumkin."
  },
  {
    question: "Murojaatlarimni qanday yuborishim mumkin?",
    answer: "Murojaatlaringizni ushbu sahifadagi aloqa formasi orqali yuborishingiz yoki qo'llab-quvvatlash xizmatiga murojaat qilishingiz mumkin. Biz 24-48 soat ichida javob beramiz."
  },
  {
    question: "Agar muammoga duch kelsam, qanday yordam olsam bo'ladi?",
    answer: "Texnik muammolar yuzaga kelganda, yordam markazimizga murojaat qiling. Bizning mutaxassislarimiz sizga tezkor yordam ko'rsatishga tayyor. Telefon, email yoki onlayn chat orqali bog'lanishingiz mumkin."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col h-full">
      <div className='bg-white rounded-2xl shadow-klsm p-8 h-full flex flex-col'>
        <h2 className="mb-8 font-bold text-gray-800">Ko'p beriladigan savollar</h2>
        
        <div className="grid grid-cols-1 gap-4 flex-grow">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className="text-gray-800 pr-4">
                  {item.question}
                </span>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#0EB57D] to-[#0BA36C] flex items-center justify-center text-white transition-transform duration-300"
                  style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: openIndex === index ? '500px' : '0px',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <div className="px-6 pb-5 pt-0 text-gray-600 border-t border-gray-100 mt-2">
                  <p className="mt-3">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}