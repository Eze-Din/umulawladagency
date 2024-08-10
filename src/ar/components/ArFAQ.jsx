import React, { useState } from "react";

const ArFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    { question: "كم عدد الشركاء لدينا؟", answer: "لدينا حاليًا أكثر من 50 شريكًا." },
    { question: "كم عدد الخادمات اللاتي غادرن؟", answer: "لقد تم توظيف أكثر من 200 خادمة بنجاح." },
    { question: "كم عدد سنوات الخبرة لدينا؟", answer: "لدينا أكثر من 10 سنوات من الخبرة في الصناعة." },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-center text-4xl font-bold mb-8 text-gold-500">الأسئلة الشائعة</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg p-4 transition-all duration-300 hover:bg-gray-800 hover:text-gold-500"
          >
            <button
              className="w-full flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-semibold">{faq.question}</span>
              <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {activeIndex === index && (
              <p className="mt-4 text-gold-400">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArFAQ;
