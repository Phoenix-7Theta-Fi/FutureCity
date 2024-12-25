import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const zonesData = [
    { title: 'Artificial Intelligence City', description: 'An innovation and incubation hub designed as per the T-AIM (AI framework).', fullDescription: 'Artificial Intelligence City: An innovation and incubation hub designed as per the T-AIM (AI framework) offering state-of-the-art facilities and resources for AI research and development.' },
    { title: 'Life Sciences Hub', description: 'Spanning over 4,207 acres, this zone will provide companies with environmental management utilities and common infrastructure facilities.', fullDescription: 'Life Sciences Hub: Spanning over 4,207 acres, this zone will provide companies with environmental management utilities and common infrastructure facilities, fostering collaboration and growth in the life sciences sector.' },
    { title: 'Electronics and Advanced Manufacturing Zone', description: 'Covering 3,642 acres, offering testing facilities, plug-and-play options, and e-waste disposal systems.', fullDescription: 'Electronics and Advanced Manufacturing Zone: Covering 3,642 acres, offering testing facilities, plug-and-play options, and e-waste disposal systems to support the electronics and advanced manufacturing industries.' },
    { title: 'Health City', description: 'A dedicated area for world-class laboratories, R&D zones, and business centers, promoting medical tourism.', fullDescription: 'Health City: A dedicated area for world-class laboratories, R&D zones, and business centers, promoting medical tourism and providing advanced healthcare facilities.' },
    { title: 'Sports Hub', description: 'Featuring a multi-purpose indoor arena, training centers, and facilities capable of hosting international events.', fullDescription: 'Sports Hub: Featuring a multi-purpose indoor arena, training centers, and facilities capable of hosting international events, promoting sports and recreation.' },
    { title: 'Education and University Zone', description: 'Including the Young India Skill University and other educational institutions to foster talent development.', fullDescription: 'Education and University Zone: Including the Young India Skill University and other educational institutions to foster talent development and provide quality education.' },
  ];

  const [expandedZone, setExpandedZone] = useState(null);

  const handleReadMore = (index) => {
    setExpandedZone(expandedZone === index ? null : index);
  };

  return (
    <div>
      <Head>
        <title>Future City Real Estate</title>
        <meta name="description" content="Welcome to Future City Real Estate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-4">
        <section className="hero py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Future City Real Estate</h1>
          <p className="text-lg">Find your dream home in the city of tomorrow.</p>
        </section>

        <section className="future-development mt-8">
          <h2 className="text-2xl font-bold mb-4">Future development</h2>
          <p className="text-lg">Welcome to <strong>Future City</strong>, your premier destination for real estate opportunities in Hyderabad's most dynamic and rapidly developing regions.</p>

          <h3 className="text-xl font-bold mt-6 mb-2">Explore the Future City</h3>
          <p className="text-lg">Hyderabad is expanding beyond its traditional boundaries of Hyderabad, Secunderabad, and Cyberabad with the introduction of the 'Future City' at Mucherla in Rangareddy district, approximately 50 km south of the main city. This visionary project is set to become India's first Net Zero Carbon city, focusing on sectors such as Artificial Intelligence, medical tourism, sports, software, and pharmaceuticals.</p>

          <h3 className="text-xl font-bold mt-6 mb-4">Prime Real Estate Opportunities</h3>
          <p className="text-lg mb-4">The Future City is planned to encompass various specialized zones:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {zonesData.map((zone, index) => (
              <div key={index} className="border rounded p-4">
                <h4 className="font-bold">{zone.title}</h4>
                <p className="text-sm mt-1">
                  {expandedZone === index ? zone.fullDescription : zone.description}
                </p>
                <button onClick={() => handleReadMore(index)} className="text-secondary-gold text-sm mt-2 block">
                  {expandedZone === index ? 'Read Less' : 'Read More'}
                </button>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold mt-6 mb-2">Why Invest with Us?</h3>
          <p className="text-lg">At Future City, we offer:</p>
          <ul className="list-disc list-inside">
            <li><strong>Exclusive Listings</strong>: Access to prime properties within the Future City and surrounding areas.</li>
            <li><strong>Expert Guidance</strong>: Our team of real estate professionals provides personalized assistance to help you make informed investment decisions.</li>
            <li><strong>Sustainable Investments</strong>: Opportunities in a city designed with a focus on sustainability and future technologies.</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-2">Stay Informed</h3>
          <p className="text-lg">Keep up with the latest developments in the Future City project and explore investment opportunities by subscribing to our newsletter.</p>

          <h3 className="text-xl font-bold mt-6 mb-2">Contact Us</h3>
          <p className="text-lg">Ready to invest in Hyderabad's Future City? Contact us today to schedule a consultation and discover how you can be part of this groundbreaking development.</p>
          <p className="text-lg">- Manikanta</p>
          <p className="text-lg"><strong>Future City</strong> – Connecting You to the Future of Hyderabad Real Estate.</p>
        </section>

        <section className="future-projects mt-8">
          <h2 className="text-2xl font-bold mb-4">Future projects</h2>
          <p className="text-lg">Discover our exciting future projects.</p>
        </section>

        <section className="ongoing-constructions mt-8">
          <h2 className="text-2xl font-bold mb-4">Ongoing Constructions</h2>
          <p className="text-lg">Track the progress of our current constructions.</p>
        </section>
      </main>
    </div>
  );
}
