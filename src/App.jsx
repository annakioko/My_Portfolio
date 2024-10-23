import React, {useState} from "react";
import Navbar from "./components/Navbar"; // Import the Navbar component
import contact from "./assets/contact.png";
import { FaLinkedin, FaTiktok, FaPhoneAlt } from "react-icons/fa"; 
import Prayerpraise from "./assets/Prayerpraise.png"
import ckiokohome from "./assets/ckiokohome.png"

const App = () => {
    const testimonials = [
    {
      id: 1,
      name: "CKioko advocates",
      text: "I liked the website that Anna create we had agreed on a regal feel that law gives off and that what we got.",
    },
    {
      id: 2,
      name: "Praise prayer and worship",
      text: "Working with Anna is a pleaseant surprise, she said that growth might take some time and even getting increase in views would take about 3 months, but our views increase from 20 views a da to 99 views a day in less than 2 weeks.",
    },
  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  }
  return (
    <div className="bg-brown">
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <div
        id="hello"
        className="min-h-screen text-blue text-center text-9xl font-bold font-serif "
      >
        {" "}
        {/* Adjusted margin-bottom here */}
        <h1 className="">Hello!</h1>
        <h2>I'm Anna.</h2>
        <hr className="border-suede w-1/2  border-4 mx-auto" />
        {/* Add your content here */}
      </div>

      <div
        id="about"
        className="min-h-screen flex flex-col md:flex-row items-center pt-10 bg-white"
      >
        {" "}
        {/* Adjusted padding-top here */}
        {/* Left side: Text */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl font-bold mb-6 text-center ml-5">
            I am a web designer, content writer and social media manager based
            in Nairobi.
          </h1>
          <p className="text-lg mb-4 text-center">
            I am a passionate web developer with experience in building dynamic
            websites and creating engaging content for businesses. My expertise
            spans across multiple areas, including web development, content
            writing, and SEO optimization. I enjoy solving problems and
            continuously improving the digital presence of my clients through
            innovative and effective solutions.
          </p>
        </div>
        {/* Right side: Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src={contact} // Correct usage of the imported image
            alt="Anna"
            className="w-64 h-64 object-cover"
          />
        </div>
      </div>

      <div id="skills" className="min-h-screen  p-10 bg-blue text-white ">
        <h1 className="text-4xl font-bold ml-72 font-serif">
          My Skills and Services
        </h1>
        <hr className="border-suede w-1/4 ml-72 my-2 border-2 mb-3 " />
        <h2 className="font-serif text-2xl mt-4"> Web design</h2>
        <p className="ml-72 font-sans">
          I am passionate about creating visually appealing and user-friendly
          websites that align with brand identities. From clean, minimalistic
          layouts to dynamic, interactive designs, I focus on delivering
          seamless user experiences that drive engagement and conversions.
          Whether it's designing from scratch or optimizing an existing site, I
          ensure every element—from typography to navigation—supports both
          aesthetics and functionality. My goal is to bring your vision to life
          with a design that speaks to your audience.
        </p>
        <p className="ml-72 font-sans  mt-3 text-blue">
          Great For: clients looking to enhance their online presence with
          modern, responsive web designs that not only look great but also
          perform exceptionally well.
        </p>

        <h2 className="font-serif text-2xl">Content Writing</h2>
        <p className="ml-72 font-sans">
          I love good storytelling and the power of words. I have experience
          with blog posts, web copy for e-commerce & crafting brand stories from
          scratch. I can write long detailed paragraphs or short punchy scripts.
          I can also support with editing or proofreading.
        </p>

        <p className="ml-72 mt-3 text-blue font-sans">
          Great For: clients who want on-going social support with community,
          copy, and content creation.
        </p>

        <h2 className="font-serif text-2xl">Social Media Management</h2>
        <p className="ml-72 font-sans">
          I specialize in building and managing engaging social media profiles
          that reflect your brand’s voice and values. From crafting
          attention-grabbing captions and scheduling content to community
          management and performance analysis, I ensure your social platforms
          are active, engaging, and aligned with your goals. I help create a
          consistent online presence that fosters meaningful connections with
          your audience, driving growth and visibility.
        </p>
        <p className="ml-72 font-sans  mt-3 text-blue">
          Great For: clients who want to grow their social media presence,
          engage their audience, and ensure consistent, high-quality content
          across platforms like Instagram, LinkedIn, and TikTok.
        </p>
      </div>

      <div id="portfolio" className="min-h-screen p-10">
        <h1 className="text-4xl font-bold  text-center mb-8">
          Work I am Proud Of
        </h1>
      

        {/* Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white ">
            <img
              src={ckiokohome}
              alt="Project 1"
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <a
                href="https://ckiokolawfirm.com/homepage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="text-2xl font-serif font-bold mb-4 text-center bg-blue py-3 px-2 text-suede hover:scale-105">
                  CKioko Advocates
                </h2>
              </a>
              <h3 className="text-center text-suede mb-4 font-bold font-serif">Web designer</h3>
              <ul className="list-disc pl-5 space-y-2 mx-2">
                <li>
                  Designed and developed a fully responsive and user-friendly
                  website
                </li>
                <li>
                  Suggested new strategic content to boost online presence and
                  client engagement
                </li>
                <li>
                  Prepared digital marketing copy and provided creative
                  direction for online campaigns
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white ">
            <img
              src={Prayerpraise}
              alt="Project 2"
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <a
                href="https://prayer-praise-worship.blogspot.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="text-2xl font-serif font-bold mb-4 text-center bg-blue py-3 px-2 text-suede hover:scale-105">
                  Prayer, Praise & Worship
                </h2>
              </a>
              <h3 className="font-bold font-serif text-center text-suede mb-4">
                Media Management
              </h3>
              <ul className="list-disc pl-5 space-y-2 mx-2 font-sans">
                <li>Re-designed the entire blog to improve user experience</li>
                <li>
                  Restructured content to align with SEO best practices,
                  increasing organic search visibility
                </li>
                <li>
                  Optimized posts and pages, resulting in a 35% increase in
                  daily views within 2 weeks
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white ">
            <img
              src="https://via.placeholder.com/300"
              alt="Project 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Project Title 3
              </h2>
              <ul className="list-disc pl-5 space-y-2 mx-">
                <li>Bullet point 1</li>
                <li>Bullet point 2</li>
                <li>Bullet point 3</li>
                <li>Bullet point 4</li>
                <li>Bullet point 5</li>
              </ul>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white ">
            <img
              src="https://via.placeholder.com/300"
              alt="Project 4"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Project Title 4
              </h2>
              <ul className="list-disc pl-5 space-y-2 mx-2">
                <li>Bullet point 1</li>
                <li>Bullet point 2</li>
                <li>Bullet point 3</li>
                <li>Bullet point 4</li>
                <li>Bullet point 5</li>
              </ul>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white ">
            <img
              src="https://via.placeholder.com/300"
              alt="Project 5"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Project Title 5
              </h2>
              <ul className="list-disc pl-5 space-y-2 mx-2">
                <li>Bullet point 1</li>
                <li>Bullet point 2</li>
                <li>Bullet point 3</li>
                <li>Bullet point 4</li>
                <li>Bullet point 5</li>
              </ul>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white ">
            <img
              src="https://via.placeholder.com/300"
              alt="Project 6"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Project Title 6
              </h2>
              <ul className="list-disc pl-5 space-y-2 mx-2">
                <li>Bullet point 1</li>
                <li>Bullet point 2</li>
                <li>Bullet point 3</li>
                <li>Bullet point 4</li>
                <li>Bullet point 5</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="testimonials" className="min-h-screen p-10 bg-white ">
        {/* Testimonial Section */}
        <section className="relative py-20">
          {/* Heading Outside the Container */}
          <h2 className="text-5xl text-suede font-bold text-center font-serif mb-10">
            What Our Clients Say
          </h2>

          {/* Testimonial Container */}
          <div className="relative mx-auto z-10 bg-white p-12 max-w-4xl shadow-lg rounded-lg">
            <div className="flex items-center justify-between">
              {/* Previous Button */}
              <button
                onClick={prevTestimonial}
                className="text-blue text-4xl py-2 px-4 transition"
              >
                &lt;
              </button>

              {/* Testimonial Content */}
              <div className="flex-1 text-center">
                <p className="text-lg mb-4 font-sans italic">
                  "{testimonials[currentIndex].text}"
                </p>
                <p className="text-md font-semibold font-sans">
                  {testimonials[currentIndex].name}
                </p>
              </div>

              {/* Next Button */}
              <button
                onClick={nextTestimonial}
                className="text-blue text-4xl py-2 px-4 transition"
              >
                &gt;
              </button>
            </div>
          </div>
        </section>
      </div>

      <div id="contact" className="min-h-screen p-10 bg-blue text-white">
        <h1 className="text-4xl font-bold mb-10 text-center">Let's Chat</h1>

        {/* Contact Form */}
        <div className="  p-8 max-w-3xl mx-auto">
          <form>
            <div className="mb-6">
              <label
                className="block text-black  font-bold mb-2"
                htmlFor="name"
              >
                Your Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-black font-bold mb-2"
                htmlFor="email"
              >
                Your Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border  w-full py-6 px-3  leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-black  font-bold mb-2"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue hover:bg-suede text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="mt-10 flex flex-col items-center">
          <p className="text-lg font-semibold mb-4">
            You can also reach me here:
          </p>
          <div className="flex space-x-8">
            {/* LinkedIn */}
            <a
              href="www.linkedin.com/in/anna-kioko"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-3xl"
            >
              <FaLinkedin />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@your-tiktok"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-3xl"
            >
              <FaTiktok />
            </a>

            {/* Phone Number */}
            <a href="tel:+1234567890" className="text-gray-700 text-3xl">
              <FaPhoneAlt />
            </a>
          </div>

          {/* Phone Number Text */}
          <p className="mt-2 text-lg font-medium">Phone: +254 720 856 222</p>
        </div>
      </div>
    </div>
  );
};

export default App;
