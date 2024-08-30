// src/pages/Recruitment.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// Example recruitment process image, replace with actual path
import recruitmentImage from '../../assets/images/recruitment.png';
import FilterablePeopleSections from '../components/ArFilterablePeopleSections';

function ArRecruitment() {
  return (
    <div className="mx-auto px-4">
      <div className="rounded-lg shadow-lg overflow-hidden">
        <img
          src={recruitmentImage}
          alt="Recruitment Process"
          className="w-full h-64"
        />
        <div className="p-6">
          <h2 className="text-3xl text-center font-bold text-gold-500 mb-4">عملية التوظيف لدينا</h2>
          <p className="mb-4">
          في شركة أم الأولاد، لدينا عملية توظيف مبسطة لضمان العثور على أفضل المرشحين لاحتياجاتك.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>الاستشارة الأولية: فهم متطلباتك وتوقعاتك.</li>
            <li>البحث عن المرشحين: تحديد المرشحين المحتملين من خلال قنوات مختلفة.</li>
            <li>الفرز والاختيار: إجراء المقابلات الأولية والتحقق من الخلفية.</li>
            <li>مقابلات العملاء: ترتيب المقابلات بين العملاء والمرشحين المختارين.</li>
            <li>الاختيار النهائي: المساعدة في عملية اتخاذ القرار النهائي.</li>
            <li>التوجيه: تسهيل التكامل السلس للمرشح المختار.</li>
            <li>المتابعة: الدعم المستمر وجمع الملاحظات بعد التوظيف.</li>
          </ul>
          <ul className="list-disc list-inside mb-4">
            <li>التوثيق: ضمان استكمال جميع المستندات القانونية والإدارية اللازمة.</li>
            <li>التدريب: تقديم أي تدريب أو توجيه مطلوب للمرشح.</li>
            <li>النشر: تنسيق لوجستيات سفر المرشح وإقامته.</li>
            <li>جمع الملاحظات: جمع الملاحظات من كل من صاحب العمل والمرشح لتحسين خدماتنا.</li>
            <li>الدعم: تقديم الدعم المستمر لحل أي مشكلات قد تنشأ أثناء فترة التوظيف.</li>
          </ul>
        </div>
      </div>
      <h2 className="text-3xl text-center font-bold text-gold-500 mt-4 mb-4">قم بتصفية رغبتك</h2>
      <FilterablePeopleSections/>
      <div className="flex justify-center mt-8">
        <Link to="/ar" className="bg-gold-500 text-white px-3 py-1 mb-2 rounded-md text-lg hover:bg-gold-600">
        العودة إلى الرئيسية
        </Link>
      </div>
    </div>
  );
}

export default ArRecruitment;
