import About from '../About/About';
import Service from '../Service/Service';
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="py-16 bg-white-900">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-4">Welcome to My Nails4<span className='font-playlist text-5xl text-red-700'>U</span></h2>
          <p className="text-xl mb-6">We provide amazing services for your nails.</p>
          <a href="#services" className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-xl hover:bg-yellow-400">Explore Our Services</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-11 lg:py-16 bg-gray-100">
        <Service />
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <About />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100 text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg mb-6">Have a question in mind? We'd love to hear from you!</p>
          <a href="mailto:info@example.com" className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-xl hover:bg-yellow-400">Contact Us</a>
        </div>
      </section>

    </div>
  );
};

export default Home;
