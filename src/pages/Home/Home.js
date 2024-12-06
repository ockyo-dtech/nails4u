import About from '../About/About';
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="py-16 bg-white-900">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-4">Welcome to My Website</h2>
          <p className="text-xl mb-6">We offer amazing services for your business.</p>
          <a href="#services" className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-xl hover:bg-yellow-400">Explore Our Services</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Service 1</h3>
              <p>High-quality web development services for your business.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Service 2</h3>
              <p>Professional graphic design to enhance your brand.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Service 3</h3>
              <p>SEO optimization to help your website rank higher on search engines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <About/>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100 text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg mb-6">Have a project in mind? We'd love to hear from you!</p>
          <a href="mailto:info@example.com" className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-xl hover:bg-yellow-400">Contact Us</a>
        </div>
      </section>

    </div>
  );
};

export default Home;
