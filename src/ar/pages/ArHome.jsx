import React from 'react';
import { Link } from 'react-router-dom';
import FilterablePeopleSection from '../components/ArFilterablePeopleSection';
import ServiceCard from '../components/ArServiceCard'; // Import ServiceCard component
import ArStatesSection from '../components/ArStatesSection';
import TeamCard from '../components/ArTeamCard'; // Import TeamCard component
import ArFAQ from '../components/ArFAQ';
import PartnersCarousel from '../components/ArPartnersCarousel'; // Import PartnersCarousel component
// Import images
import ImageCarousel from '../components/ArImageCarousel';
import expert1Image from '../assets/images/exp1.jpg';
import expert2Image from '../assets/images/exp2.jpg';
import expert3Image from '../assets/images/exp3.jpg';
import WhatsAppIcon from '../assets/images/whatsapp.png';

function ArHome() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
      <ImageCarousel />
      </section>

      <section data-aos="fade-up">
        <div className="bg-gray-500 p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gold-500 mb-4">الخادمات بكل سهولة...</h1>
          <h2 className="text-2xl font-bold text-gold-500 mb-4">ابحث عن الخادمات الإثيوبيات بسهولة!</h2>
          <p className="text-gray-900 mb-6">
          أفضل وكالة في إثيوبيا للخادمات ومقدمي الرعاية والسائقين والمربيات. تبسيط التوظيف عبر الإنترنت. #القوى العاملة في إثيوبيا
          </p>
          <a href="https://wa.me/251914266446" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-gold-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-gold-600 transition duration-300">
            <img src={WhatsAppIcon} alt="WhatsApp" className="h-6 w-6 mr-2" />
            ابدأ الآن!
          </a>
        </div>

        {/* Filterable People Section */}
        <div className="bg-gray-500">
          <FilterablePeopleSection />
        </div>
      </section>

      {/* Recruitment Process Section */}
      <section className="py-16 bg-gray-500" data-aos="fade-left">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gold-500 mb-8">عملية التوظيف</h2>
          <p className="text-gray-700 mb-8">
          لدينا عملية توظيف شاملة ومفصلة وحكيمة ومهنية تشمل جميع أصحاب المصلحة في خدمتنا لتصدير الموظفين المؤهلين إلى الخارج. تم تصميم العملية للتأكد من حماية سلامة ورفاهية عملائنا. تسهل وكالة التوظيف الأجنبية أم الأولاد في إثيوبيا الوظائف مثل وظائف الفنادق ووظائف التمريض ووظائف الخادمة ووظائف التدريس ووظائف السائقين وغيرها في المقام الأول في الشرق الأوسط مثل المملكة العربية السعودية والكويت والإمارات العربية المتحدة (وظائف في دبي وأبو ظبي) والأردن. نحن نعمل بجد لتوفير عروض عمل أخرى للإثيوبيين من أوروبا.
          </p>
          <Link to="/ar/recruitment" className="bg-gold-500 text-white px-6 py-3 rounded-md text-lg font-bold hover:bg-gold-600">
          اقرأ أكثر
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-500" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gold-500 mb-8">خدماتنا</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <ServiceCard image={expert1Image} title="متابعة المطالبة" description="نقوم بمتابعة والإشراف على مختلف القضايا المتعلقة بالموظفين الذين يتم توظيفهم عن طريق وكالتنا" />
            <ServiceCard image={expert2Image} title="تأمين صحي" description="نتأكد من أن عملائنا يتمتعون بالتأمين الصحي" />
            <ServiceCard image={expert3Image} title="بلدان متعددة" description="نحن نعمل حاليًا مع المملكة العربية السعودية والإمارات العربية المتحدة والأردن، وسنتوسع قريبًا إلى أماكن أخرى" />
            <ServiceCard image={expert1Image} title="عقود مرنة​" description="لدينا نوع مرن من العقود التي تناسب عملائنا والتي تعالج المواقف المناسبة لعملائنا" />
          </div>
        </div>
        <ArStatesSection />
      </section>

      {/* Our Team of Experts Section */}
      <section className="py-4 bg-gray-500" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gold-500 mb-8">فريق الخبراء لدينا</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <TeamCard name={<Link to="/ar/teams/hanan">Hanan Hussen</Link>} role="Owner" image={expert1Image} /> {/* Use imported image */}
            <TeamCard name={<Link to="/ar/teams/abdurezaq">Abdurezaq Akmel</Link>} role="Agent" image={expert2Image} /> {/* Use imported image */}
            <TeamCard name={<Link to="/ar/teams/roman">Roman Akmel</Link>} role="Manager" image={expert3Image} /> {/* Use imported image */}
            <TeamCard name={<Link to="/ar/teams/imamudin">Imamudin Akmel</Link>} role="Unknown" image={expert3Image} /> {/* Use imported image */}
            <TeamCard name={<Link to="/ar/teams/muhammed">Muhammed Seid</Link>} role="IT Man" image={expert2Image} /> {/* Use imported image */}
            <TeamCard name={<Link to="/ar/teams/ezedin">Ezedin Nigussie</Link>} role="Unknown" image={expert3Image} /> {/* Use imported image */}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-gray-500">
        <ArFAQ />
      </section>

      {/* Our Partners Section */}
      <section className="py-16 bg-gray-500">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gold-500 mb-8">شركاؤنا</h2>
          <PartnersCarousel />
        </div>
      </section>
    </div>
  );
}

export default ArHome;
