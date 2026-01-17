import Link from 'next/link';

export const metadata = {
  title: "BilusTech LLC - Professional Low Voltage Equipment Supplier",
  description:
    "Quality electrical panels, networking equipment, and CCTV systems for businesses. Competitive pricing, expert support, USA coverage.",
  openGraph: {
    title: "BilusTech LLC - Low Voltage Equipment Supplier",
    description: "Professional low voltage equipment for electrical, networking, and CCTV needs",
    type: "website",
    url: "https://bilustech.com",
    images: [
      {
        url: "https://bilustech.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "BilusTech LLC Home",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Professional Low Voltage Solutions
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              BilusTech LLC supplies premium electrical panels, networking equipment, and CCTV systems to businesses across the USA. Quality products. Expert service. Competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link
                href="/contact"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Get a Quote Today
              </Link>
              <Link
                href="/products"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose BilusTech?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality Products',
                description:
                  'We source and supply only the highest quality low voltage equipment from trusted manufacturers.',
                icon: '✓',
              },
              {
                title: 'Expert Support',
                description:
                  'Our team provides professional guidance to help you select the right solutions for your needs.',
                icon: '◆',
              },
              {
                title: 'Competitive Pricing',
                description:
                  'Get premium products at competitive prices with flexible quote options for your business.',
                icon: '★',
              },
              {
                title: 'Fast Service',
                description:
                  'Quick response times and efficient processing of orders and quote requests.',
                icon: '⚡',
              },
              {
                title: 'USA Coverage',
                description:
                  'Serving businesses nationwide with reliable delivery and support.',
                icon: '🌎',
              },
              {
                title: 'Trusted Partner',
                description:
                  'Established supplier with years of experience in the low voltage industry.',
                icon: '🤝',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md dark:shadow-slate-900 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 transform"
              >
                <div className="text-4xl text-orange-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-gray-100 dark:bg-slate-900 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Product Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Electrical Panels',
                description: 'Distribution panels, circuit breakers, surge protection, and panel accessories.',
                link: '/products#panels',
              },
              {
                title: 'Networking Equipment',
                description: 'Structured cabling, switches, patch panels, and network infrastructure solutions.',
                link: '/products#networking',
              },
              {
                title: 'CCTV Systems',
                description: 'Cameras, DVR/NVR systems, cabling, and surveillance monitoring solutions.',
                link: '/products#cctv',
              },
            ].map((category, index) => (
              <Link
                key={index}
                href={category.link}
                className="bg-white dark:bg-slate-700 rounded-lg shadow-md dark:shadow-slate-900 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform group cursor-pointer"
              >
                <div className="bg-gradient-to-r from-blue-900 to-blue-800 h-32 group-hover:from-orange-600 group-hover:to-orange-500 transition-all duration-300 flex items-center justify-center">
                  <span className="text-5xl text-white opacity-80">📦</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{category.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
                  <span className="text-orange-600 dark:text-orange-500 font-semibold group-hover:text-orange-700 dark:group-hover:text-orange-400">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 dark:bg-slate-950 text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Get Started?</h2>
          <p className="text-lg text-blue-100 dark:text-blue-200 max-w-2xl mx-auto">
            Contact BilusTech LLC today for a competitive quote on high-quality low voltage equipment.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
