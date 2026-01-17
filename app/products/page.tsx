export const metadata = {
  title: 'Products - BilusTech LLC | Electrical Panels, Networking, CCTV',
  description:
    'Browse our comprehensive catalog of low voltage equipment including electrical panels, networking solutions, and CCTV systems.',
};

export default function Products() {
  const products = {
    panels: [
      {
        category: 'Distribution Panels',
        items: ['Main Breaker Panels', 'Sub-Panel Units', '100A & 200A Models', 'Enclosed Panels'],
      },
      {
        category: 'Protection & Control',
        items: ['Circuit Breakers', 'Surge Protectors', 'Disconnect Switches', 'Breaker Accessories'],
      },
      {
        category: 'Panel Accessories',
        items: ['Conduit & Connectors', 'Wire & Cables', 'Grounding Equipment', 'Panel Hardware'],
      },
    ],
    networking: [
      {
        category: 'Cabling Solutions',
        items: ['Cat6A Structured Cabling', 'Cat6 Cabling Systems', 'Fiber Optic Cable', 'Outdoor Cable Solutions'],
      },
      {
        category: 'Network Components',
        items: ['Patch Panels', 'Network Switches', 'Patch Cords & Connectors', 'Keystone Jacks'],
      },
      {
        category: 'Installation',
        items: ['Installation Services', 'Testing & Certification', 'Network Setup', 'Maintenance Packages'],
      },
    ],
    cctv: [
      {
        category: 'Cameras & Sensors',
        items: ['IP Cameras', 'Analog Cameras', 'Thermal Cameras', 'Motion Sensors'],
      },
      {
        category: 'Recording & Control',
        items: ['NVR Systems', 'DVR Systems', 'Video Management Software', 'Control Interfaces'],
      },
      {
        category: 'Installation & Support',
        items: ['Professional Installation', 'System Integration', 'Maintenance Plans', 'Technical Support'],
      },
    ],
  };

  const renderCategory = (categoryData: (typeof products.panels)[0]) => (
    <div key={categoryData.category} className="mb-8">
      <h4 className="text-lg font-bold text-blue-900 dark:text-orange-600 mb-4 border-b-2 border-orange-600 pb-2">
        {categoryData.category}
      </h4>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {categoryData.items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <span className="text-orange-600">→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold">Our Products</h1>
          <p className="text-xl text-blue-100 mt-4">Premium Low Voltage Equipment for Your Needs</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 sm:py-16 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
            BilusTech LLC provides a comprehensive selection of professional-grade low voltage equipment.
            All our products are sourced from trusted manufacturers and meet industry standards.
            Contact us for custom quotes and availability.
          </p>
        </div>
      </section>

      {/* Electrical Panels */}
      <section id="panels" className="bg-gray-50 dark:bg-slate-900 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-lg sticky top-24">
                <h2 className="text-3xl font-bold mb-4">Electrical Panels</h2>
                <p className="text-blue-100">
                  Complete distribution panel solutions for residential and commercial applications.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              {products.panels.map(renderCategory)}
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-orange-600">
                <p className="text-gray-700">
                  <strong>Custom Solutions:</strong> We can help you find the right panel configuration
                  for your specific project requirements. Contact us with your specifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Networking Equipment */}
      <section id="networking" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-lg sticky top-24">
                <h2 className="text-3xl font-bold mb-4">Networking Equipment</h2>
                <p className="text-blue-100">
                  Enterprise-grade structured cabling and network infrastructure solutions.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              {products.networking.map(renderCategory)}
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-orange-600">
                <p className="text-gray-700">
                  <strong>Professional Installation:</strong> Our team provides comprehensive network
                  installation services with full testing and certification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CCTV Systems */}
      <section id="cctv" className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-lg sticky top-24">
                <h2 className="text-3xl font-bold mb-4">CCTV Systems</h2>
                <p className="text-blue-100">
                  Complete surveillance solutions for security and monitoring needs.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              {products.cctv.map(renderCategory)}
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-orange-600">
                <p className="text-gray-700">
                  <strong>Full System Integration:</strong> We design and install complete CCTV systems
                  tailored to your security requirements and budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Don't See What You Need?</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            We can source additional products and custom solutions. Contact us with your specifications.
          </p>
          <a
            href="/contact"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
          >
            Request Custom Quote
          </a>
        </div>
      </section>
    </div>
  );
}
