import React from 'react';
import { Link } from 'react-router-dom';

// Import example team images
import teamMember1 from '../../assets/images/exp1.jpg';
import teamMember2 from '../../assets/images/exp2.jpg';
import teamMember3 from '../../assets/images/exp3.jpg';

function ArAbout() {
  return (
    <div className="about-page bg-gray-600">
      {/* Hero Section */}
      <div className="hero-section relative bg-cover bg-center h-64" data-aos="fade-left">
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-gold-500">
          <h1 className="text-5xl font-bold mb-4">معلومات عنا</h1>
          <p className="text-lg max-w-xl">
          نحن ملتزمون بربط العائلات بالعاملين المنزليين المتفانين والمهرة لتلبية احتياجاتهم المنزلية.
          </p>
        </div>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className="container mx-auto py-16 px-4" data-aos="fade-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-500 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gold-500 mb-4">مهمتنا</h2>
            <p className="text-gray-700">
            توفير خدمات التوظيف المحلية الموثوقة والمهنية، وضمان رضا العملاء والموظفين على حد سواء.
            </p>
          </div>
          <div className="p-6 bg-gray-500 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gold-500 mb-4">رؤيتنا</h2>
            <p className="text-gray-700">
            أن نكون الوكالة الرائدة في إثيوبيا للعمالة المحلية الأجنبية، والمعروفة بخدماتها الجيدة والممارسات الأخلاقية.
            </p>
          </div>
          <div className="p-6 bg-gray-500 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gold-500 mb-4">قيمنا</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>النزاهة والثقة</li>
              <li>الالتزام بالتميز</li>
              <li>الاحترام والشمول</li>
              <li>رضا العملاء</li>
              <li>رفاهية الموظفين</li>
            </ul>
          </div>
        </div>
      </div>

      {/* History/Story Section */}
      <div className="bg-gray-500 py-16" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gold-500 mb-6">تاريخنا</h2>
            <p className="text-gray-700 mb-6">
            تأسست شركة أم أولاد بهدف سد الفجوة بين العاملات المنزليات الماهرات والأسر التي تحتاج إلى خدماتهن. وبفضل سنوات الخبرة والفهم العميق لديناميكيات الصناعة، فإننا ملتزمون بتعزيز بيئة داعمة ومنتجة للجميع.
            </p>
            <p className="text-gray-700">
            بدأت رحلتنا بفريق صغير وحلم كبير، وعلى مر السنين، أصبحنا اسمًا موثوقًا به في القطاع، حيث ساعدنا العديد من العائلات والعمال في العثور على الشريك المثالي. نحن نؤمن بخلق علاقات دائمة مبنية على الثقة والاحترام والمنفعة المتبادلة.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto py-16 px-4 bg-gray-500" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-gold-500 mb-8 text-center">التق بفريقنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="team-member text-center bg-white p-6 rounded-lg shadow-md">
            <img src={teamMember1} alt="Team Member 1" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-2xl font-bold text-gray-800"><Link to="/ar/teams/arhanan">Hanan Hussen</Link></h3>
            <p className="text-gray-600">Owner</p>
          </div>
          <div className="team-member text-center bg-white p-6 rounded-lg shadow-md">
            <img src={teamMember2} alt="Team Member 2" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-2xl font-bold text-gray-800"><Link to="/ar/teams/arabdurezaq">Abdurezaq Akmel</Link></h3>
            <p className="text-gray-600">Agent</p>
          </div>
          <div className="team-member text-center bg-white p-6 rounded-lg shadow-md">
            <img src={teamMember3} alt="Team Member 3" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-2xl font-bold text-gray-800"><Link to="/ar/teams/arroman">Roman Akmel</Link></h3>
            <p className="text-gray-600">Manager</p>
          </div>
          <div className="team-member text-center bg-white p-6 rounded-lg shadow-md">
            <img src={teamMember3} alt="Team Member 3" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-2xl font-bold text-gray-800"><Link to="/ar/teams/arimamudin">Imamudin Akmel</Link></h3>
            <p className="text-gray-600">Unknown</p>
          </div>
          <div className="team-member text-center bg-white p-6 rounded-lg shadow-md">
            <img src={teamMember3} alt="Team Member 3" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-2xl font-bold text-gray-800"><Link to="/ar/teams/armuhammed">Muhammed Seid</Link></h3>
            <p className="text-gray-600">IT Man</p>
          </div>
          <div className="team-member text-center bg-white p-6 rounded-lg shadow-md">
            <img src={teamMember3} alt="Team Member 3" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-2xl font-bold text-gray-800"><Link to="/ar/teams/arezedin">Ezedin Nigussie</Link></h3>
            <p className="text-gray-600">UnKnown</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gray-600 py-16" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">ابقى على تواصل</h2>
          <p className="text-lg mb-8">
          نحن هنا لمساعدتك في كل ما يتعلق باحتياجاتك من العمالة المنزلية. اتصل بنا اليوم لمعرفة المزيد عن خدماتنا وكيف يمكننا مساعدتك.
          </p>
          <Link to="/ar/contact" className="bg-gold-600 text-white px-6 py-3 rounded-md text-lg font-bold hover:bg-gold-500">
          اتصل بنا
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ArAbout;
