import React from 'react';
import { Link } from 'react-router-dom';
import NotificationPanel from '../components/NotificationPanel';
import FilterablePeopleSection from '../components/FilterablePeopleSection';
import ServiceCard from '../components/ServiceCard';
import StatesSection from '../components/StatesSection';
import BlogSection from '../components/BlogSection';
import TeamCard from '../components/TeamCard';
import FAQ from '../components/FAQ';
import PartnersCarousel from '../components/PartnersCarousel';
// Import images
import serviceImage1 from '../assets/images/followup.jpg';
import serviceImage2 from '../assets/images/health.png';
import serviceImage3 from '../assets/images/multiple.png';
import serviceImage4 from '../assets/images/contract.png';
import ImageCarousel from '../components/ImageCarousel';
import teamMember1 from '../assets/images/hanan.jpeg';
import teamMember2 from '../assets/images/abdurezaq.jpeg';
import teamMember3 from '../assets/images/mame.jpeg';
import teamMember4 from '../assets/images/ezedin.jpeg';
import teamMember5 from '../assets/images/noimg.jpg';
import WhatsAppIcon from '../assets/images/whatsapp.png';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <NotificationPanel />
      <section className="relative pt-2">
      <ImageCarousel />
      </section>

      <section data-aos="fade-up">
        <div className="bg-gray-500 p-8 rounded-lg shadow-md text-center md:text-left">
          <h1 className="text-3xl font-bold text-gold-500 mb-4">MAIDS WITH EASE...</h1>
          <h2 className="text-2xl font-bold text-gold-500 mb-4">FIND ETHIOPIAN MAIDS WITH EASE!</h2>
          <p className="text-gray-900 mb-6">
          Ethiopia`s best agency for housemaids, caregivers, drivers, and nannies. Simplify hiring online. #ManpowerEthiopia
          </p>
          <a href="https://wa.me/251914266446" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-gold-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-gold-600 transition duration-300">
            <img src={WhatsAppIcon} alt="WhatsApp" className="h-6 w-6 mr-2" />
            Start Now!
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
          <h2 className="text-3xl font-bold text-gold-500 mb-8">Recruitment Process</h2>
          <p className="text-gray-700 mb-8">
          We do have an extensive, detailed,prudent and professional recruitment process that involves all the stakeholders in our service of exporting qualified employees abroad. The process is designed to make sure that the safety and welfare of our clients are protected. UmulAwlad foreign employment agency in Ethiopia facilitates jobs such as hotel jobs,nursing jobs, housemaid jobs,teaching jobs,driver jobs and others primarily in the Middle East such as in Saudi Arabia, Kuwait, UAE (jobs in Dubai, Abudabi), and Jordan. We are working hard to provide other job offers to Ethiopians from Europe.
          </p>
          <Link to="/en/recruitment" className="bg-gold-500 text-white px-6 py-3 rounded-md text-lg font-bold hover:bg-gold-600">
            Read More
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-500" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gold-500 mb-8">Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <ServiceCard image={serviceImage1} title="Claim Followup" description="We follow up and supervise different issues related to the employees who are recruited via our agency" />
            <ServiceCard image={serviceImage2} title="Health Insurance" description="Our customers are made sure that they have their health insurance covered." />
            <ServiceCard image={serviceImage3} title="Multiple Countries" description="Currently we are working with the Kingdom of Saudi Arabia, United Arab Emirates and Jordan. We will expand soon to other places." />
            <ServiceCard image={serviceImage4} title="Flexible contracts​" description="We have flexible type of contract  that suits our customers and that address the right situations of our clients." />
          </div>
        </div>
        <StatesSection />
      </section>

      {/* Blog Section */}
      <section className="bg-gray-500" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gold-500 mb-8">News</h2>
          <BlogSection />
        </div>
      </section>

      {/* Our Team of Experts Section */}
      <section className="py-4 bg-gray-500" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gold-500 mb-8">Our Team of Experts</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <TeamCard name={<Link to="/en/teams/hanan">Hanan Hussen</Link>} role="Owner" image={teamMember1} /> {/* Use imported image */}
            <TeamCard name={<Link to="/en/teams/abdurezaq">Abdurezaq Akmel</Link>} role="Agent" image={teamMember2} /> {/* Use imported image */}
            <TeamCard name={<Link to="/en/teams/roman">Roman Akmel</Link>} role="Manager" image={teamMember5} /> {/* Use imported image */}
            <TeamCard name={<Link to="/en/teams/imamudin">Abdurezaq</Link>} role="Unknown" image={teamMember5} /> {/* Use imported image */}
            <TeamCard name={<Link to="/en/teams/muhammed">Muhammed Seid</Link>} role="IT Man" image={teamMember3} /> {/* Use imported image */}
            <TeamCard name={<Link to="/en/teams/ezedin">Ezedin Nigussie</Link>} role="Unknown" image={teamMember4} /> {/* Use imported image */}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-gray-500">
        <FAQ />
      </section>

      {/* Our Partners Section */}
      <section className="py-16 bg-gray-500">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gold-500 mb-8">Our Partners</h2>
          <PartnersCarousel />
        </div>
      </section>
    </div>
  );
}

export default Home;
