export const metadata = {
  title: 'About BilusTech LLC - Low Voltage Equipment Supplier',
  description:
    'Learn about BilusTech LLC, a professional low voltage equipment supplier based in Albuquerque, New Mexico serving businesses across the USA.',
};

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold">About BilusTech LLC</h1>
          <p className="text-xl text-blue-100 mt-4">Professional Low Voltage Solutions for Your Business</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 sm:py-24 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Company</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                BilusTech LLC is a trusted supplier of premium low voltage equipment serving businesses across
                the United States. Based in Albuquerque, New Mexico, we have established ourselves as a reliable
                partner for electrical panels, networking equipment, and CCTV systems.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our mission is to provide high-quality products at competitive prices with exceptional customer
                service. We believe in building long-term relationships with our clients by understanding their
                unique needs and delivering solutions that exceed expectations.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Whether you're a small business or a large enterprise, BilusTech LLC is committed to supporting
                your growth with reliable products and professional expertise.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Partner With Us?</h3>
              <ul className="space-y-4">
                {[
                  'Premium quality products from trusted manufacturers',
                  'Competitive pricing and flexible quote options',
                  'Professional and knowledgeable team',
                  'Fast and reliable service',
                  'Nationwide coverage and support',
                  'Years of industry experience and expertise',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold text-xl mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="bg-gray-100 dark:bg-slate-800 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md dark:shadow-slate-900 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl text-orange-600 mb-4">📍</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Address</h3>
              <p className="text-gray-600 dark:text-gray-300">
                2201 Menaul Blvd NE, Ste A<br />
                Albuquerque, NM 87107<br />
                USA
              </p>
            </div>
            <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md dark:shadow-slate-900 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl text-orange-600 mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Phone</h3>
              <a href="tel:+17389666630" className="text-gray-600 dark:text-gray-300 hover:text-blue-900 dark:hover:text-orange-600 transition-colors text-lg font-semibold">
                (738) 966-6630
              </a>
            </div>
            <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md dark:shadow-slate-900 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl text-orange-600 mb-4">✉️</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email</h3>
              <a href="mailto:ceo@bilustech.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-900 dark:hover:text-orange-600 transition-colors text-lg font-semibold">
                ceo@bilustech.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Quality', description: 'We source only the highest quality products from trusted manufacturers.' },
              { title: 'Integrity', description: 'Honest communication and fair pricing are the foundation of our business.' },
              { title: 'Service', description: 'Customer satisfaction is our top priority in every interaction.' },
              { title: 'Expertise', description: 'Our team brings years of experience and technical knowledge to every project.' },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-orange-600">◆</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
