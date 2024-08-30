// src/pages/Services.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// Example service images, replace these with actual paths
import serviceImage1 from '../../assets/images/followup.jpg';
import serviceImage2 from '../../assets/images/health.png';
import serviceImage3 from '../../assets/images/multiple.jpeg';
import serviceImage4 from '../../assets/images/contract.jpeg';

// Example services data
const servicesData = [
  {
    title: 'متابعة المطالبة',
    description: (
      <div>
        <p>
        تضمن خدمة متابعة المطالبات لدينا معالجة أي مطالبات أو مشكلات تتعلق بالموظفين الذين يتم توظيفهم من خلال وكالتنا بسرعة وكفاءة. تتضمن هذه الخدمة:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>المراقبة المنتظمة:</strong> الإشراف المستمر على حالة الموظفين وأدائهم لتحديد المشكلات المحتملة في وقت مبكر.</li>
          <li><strong>حل المشكلة:</strong> توفير الوساطة والدعم لحل أي نزاعات أو سوء تفاهم بين أصحاب العمل والموظفين.</li>
          <li><strong>إدارة المطالبات:</strong> المساعدة في إدارة المطالبات المتعلقة بسوء سلوك الموظفين أو التغيب أو غيرها من القضايا.</li>
        </ul>
        <p className="mt-2">
        من خلال تقديم هذه الخدمة، فإننا نساعد في الحفاظ على علاقات سلسة وإيجابية بين أصحاب العمل والموظفين، مما يضمن رضا الطرفين عن ترتيبات التوظيف.
        </p>
      </div>
    ),
    image: serviceImage1,
  },
  {
    title: 'التأمين الصحي',
    description: (
      <div>
        <p>
        تضمن خدمة التأمين الصحي لدينا حصول جميع الموظفين الذين يتم توظيفهم من خلال وكالتنا على تغطية تأمين صحي شاملة. تتضمن هذه الخدمة:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>التغطية على النفقات الطبية:</strong> بما في ذلك الاستشفاء والأدوية والفحوصات الروتينية.</li>
          <li><strong>خدمات الطوارئ:</strong> الوصول الفوري إلى خدمات الرعاية الصحية في حالات الطوارئ.</li>
          <li><strong>الفحوصات الصحية الدورية:</strong> ضمان المتابعة المستمرة لصحة الموظفين.</li>
        </ul>
        <p className="mt-2">
        بفضل هذه الخدمة، يمكن لأصحاب العمل ضمان صحة وسلامة موظفيهم، مما يؤدي إلى قوة عاملة أكثر صحة وإنتاجية.
        </p>
      </div>
    ),
    image: serviceImage2,
  },
  {
    title: 'بلدان متعددة',
    description: (
      <div>
        <p>
        تفتخر وكالتنا بتقديم خدماتها في العديد من البلدان، مما يضمن حصول عملائنا على دعم مستمر وعالي الجودة، بغض النظر عن موقعهم. حاليًا، نعمل في البلدان التالية:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>المملكة العربية السعودية:</strong> توفير حلول توظيف شاملة مصممة خصيصًا لتلبية احتياجات أصحاب العمل السعوديين.</li>
          <li><strong>الإمارات العربية المتحدة:</strong> تسهيل عملية توظيف العمالة الماهرة وضمان الامتثال القانوني لقوانين العمل في دولة الإمارات العربية المتحدة.</li>
          <li><strong>الأردن:</strong> تقديم خدمات التوظيف التي تلبي احتياجات المجتمع المحلي والمغترب في الأردن.</li>
        </ul>
        <p className="mt-2">
        نحن نعمل باستمرار على توسيع نطاق وصولنا إلى دول جديدة، بهدف تقديم خدمات التوظيف عالية الجودة في جميع أنحاء العالم. ترقبوا المزيد من المواقع التي نضيفها إلى شبكتنا!
        </p>
      </div>
    ),
    image: serviceImage3,
  },
  {
    title: 'العقود المرنة',
    description: (
      <div>
        <p>
        تدرك وكالتنا أن كل عميل لديه احتياجات وظروف فريدة. ولهذا السبب نقدم خيارات عقود مرنة مصممة لتناسب مجموعة متنوعة من المواقف. يتم إنشاء عقودنا بالميزات التالية:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>المدة المخصصة:</strong> اختر مدة العقد التي تناسب احتياجاتك، سواء كانت قصيرة الأمد أو طويلة الأمد.
          </li>
          <li>
            <strong>شروط قابلة للتعديل:</strong> تتيح عقودنا إمكانية إجراء تعديلات من حيث الخدمات المقدمة وخطط الدفع وعوامل رئيسية أخرى، مما يضمن أقصى قدر من الراحة.
          </li>
          <li>
            <strong>لا توجد رسوم خفية:</strong> أسعار شفافة ولا توجد رسوم خفية حتى تعرف بالضبط ما تدفعه مقابله.
          </li>
        </ul>
        <p className="mt-2">
        سواء كنت بحاجة إلى حل مؤقت أو شراكة طويلة الأمد، فإن عقودنا المرنة توفر لك <strong>حرية</strong> لاختيار الشروط التي تناسبك بشكل أفضل. تواصل معنا لمعرفة المزيد حول كيفية تصميم عقد يناسب متطلباتك المحددة.
        </p>
      </div>
    ),
    image: serviceImage4,
  },
];

function ArServices() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-gold-500 mb-8 text-center">خدماتنا</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-gray-500 rounded-lg shadow-md p-6">
            <img src={service.image} alt={service.title} className="w-full h-64 object-cover rounded-t-md mb-4" />
            <h2 className="text-2xl font-bold text-gold-500 mb-2">{service.title}</h2>
            <p className="text-gray-700 mb-4">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/ar" className="bg-gold-500 text-white px-6 py-3 rounded-md text-lg font-bold hover:bg-gold-600">
        العودة إلى الرئيسية
        </Link>
      </div>
    </div>
  );
}

export default ArServices;
