import React, {useState} from "react";
import Navbar from "./components/Navbar"; // Import the Navbar component
import contact from "./assets/contact.png";
import { FaLinkedin, FaTiktok, FaPhoneAlt } from "react-icons/fa"; 
import Prayerpraise from "./assets/Prayerpraise.png"
import ckiokohome from "./assets/ckiokohome.png"
import mealplanner from "./assets/mealplanner.png"
import Hrhub from "./assets/Hrhub.png"
import NukiBeauty from "./assets/NukiBeauty.png"
import landingpage from "./assets/landingpage.png"

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
        <h1 className="mt-36">Hello!</h1>
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
          <h1 className="text-2xl font-bold mb-6 text-center ml-5">
            A software developer/web-developer based in Nairobi, Kenya. I am
            also a content writer(I love writing) and a social media manager.
          </h1>
          <p className="text-lg mb-4 text-center">
            I absolutely love web creation, the ability to transform thoughts
            into reality is thrilling. Even more fulfilling is bringing my
            clients’ ideas to life. Capturing their visions, refining them, and
            producing websites and content that resonate with them is a truly
            beautiful experience.
          </p>
        </div>
        {/* Right side: Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src={contact} // Correct usage of the imported image
            alt="Anna"
            className="w-96 h-96 object-cover"
          />
        </div>
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
              <h3 className="text-center text-suede mb-4 font-bold font-serif">
                Web designer
              </h3>
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
                Media Management/web-designer
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
              src={mealplanner}
              alt="Project 3"
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <a
                href="https://ndisyamwende.github.io/Mindful-meal-planner/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="text-2xl font-serif font-bold mb-4 text-center bg-blue py-3 px-2 text-suede hover:scale-105">
                  Mindful Meal planner
                </h2>
              </a>
              <h3 className="font-bold font-serif text-center text-suede mb-4">
                Web designer
              </h3>
              <ul className="list-disc pl-5 space-y-2 mx-">
                <li>
                  Designed a responsive, user-friendly interface for seamless
                  meal planning
                </li>
                <li>
                  Focused on an intuitive layout to enhance user engagement and
                  experience
                </li>
                <li>
                  Developed a dynamic meal suggestion feature based on user
                  input and preferences
                </li>
                <li>
                  Integrated backend logic to generate personalized meal options
                  for users
                </li>
              </ul>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white ">
            <img
              src={Hrhub}
              alt="Project 4"
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <a
                href="https://alex-m-kimeu.github.io/HR-Hub-Frontend/signin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="text-2xl font-serif font-bold mb-4 text-center bg-blue py-3 px-2 text-suede hover:scale-105">
                  Hr-Hub
                </h2>
              </a>
              <h3 className="font-bold font-serif text-center text-suede mb-4">
                Web developer
              </h3>
              <ul className="list-disc pl-5 space-y-2 mx-2">
                <li>
                  Developed the leave management feature, allowing employees to
                  request leave through their dashboards
                </li>
                <li>
                  Enabled admins to review, approve, or reject leave requests in
                  real-time
                </li>
                <li>
                  Ensured the leave management page was fully responsive for
                  seamless access across devices
                </li>
              </ul>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white ">
            <img
              src={landingpage}
              alt="Project 5"
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <h2 className="text-2xl font-serif font-bold mb-4 text-center bg-blue py-3 px-2 text-suede hover:scale-105">
                  Eden-Oasis
                </h2>
                <h3 className="font-bold font-serif text-center text-suede mb-4">
                  Web developer / in-progress
                </h3>
              </a>
              <ul className="list-disc pl-5 space-y-2 mx-2">
                <li>
                  Designing a serene and inviting landing page to showcase spa
                  services and attract new clients
                </li>
                <li>
                  Developing a responsive layout for smooth viewing on all
                  devices
                </li>
                <li>
                  Creating sections to highlight services, special offers, and
                  client testimonials
                </li>
                <li>
                  Crafting engaging calls-to-action to encourage bookings and
                  inquiries
                </li>
                <li>Demo coming soon</li>
              </ul>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white ">
            <img
              src={NukiBeauty}
              alt="Project 6"
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <h2 className="text-2xl font-serif font-bold mb-4 text-center bg-blue py-3 px-2 text-suede hover:scale-105">
                  Nuki-Beauty
                </h2>
                <h3 className="font-bold font-serif text-center text-suede mb-4">
                  Web designer / in-progress
                </h3>
              </a>
              <ul className="list-disc pl-5 space-y-2 mx-2">
                <li>
                  Designing a user-friendly e-commerce platform for beauty and
                  fashion products, including jewelry, handbags, and clothing
                </li>
                <li>
                  Building secure checkout and payment integration for easy
                  transactions
                </li>
                <li>
                  Implementing a product categorization feature to enhance
                  browsing experience
                </li>
                <li>
                  Developing a responsive layout for seamless shopping on mobile
                  and desktop
                </li>
                <li>Demo Coming Soon</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="skills" className="min-h-screen p-10 bg-blue text-white">
        <h1 className="text-4xl font-bold ml-72 font-serif">
          My Skills and Services
        </h1>
        <hr className="border-suede w-1/4 ml-72 my-2 border-2 mb-3" />

        <div className="ml-8">
          {/* Web Design Section */}
          <div className="flex flex-row mt-6">
            <h2 className="font-serif text-2xl w-1/3">Web Design</h2>
            <div className="w-2/3">
              <p className="font-sans">
                I craft stunning, user-friendly websites that not only captivate
                your audience but also convert visitors into loyal customers. My
                designs prioritize functionality, ensuring a seamless experience
                across all devices.
              </p>
              <p className="text-brown font-sans mt-3">
                Great For: Clients looking to enhance their online presence with
                modern, responsive web designs that not only look great but also
                perform exceptionally well.
              </p>
            </div>
          </div>

          {/* Content Writing Section */}
          <div className="flex flex-row mt-6">
            <h2 className="font-serif text-2xl w-1/3">Content Writing</h2>
            <div className="w-2/3">
              <p className="font-sans">
                Words are powerful. I specialize in crafting compelling
                narratives that resonate with your audience, driving engagement
                and action. From blog posts to social media copy, I help you
                connect authentically with your customers.
              </p>
              <p className="text-brown font-sans mt-3">
                Great For: Clients who want ongoing support with community
                management, copywriting, and content creation to keep their
                audience engaged.
              </p>
            </div>
          </div>

          {/* Social Media Management Section */}
          <div className="flex flex-row mt-6">
            <h2 className="font-serif text-2xl w-1/3">
              Social Media Management
            </h2>
            <div className="w-2/3">
              <p className="font-sans">
                I create and manage engaging social media profiles that reflect
                your brand's voice and values. By strategically crafting content
                and managing interactions, I foster a vibrant online community
                that drives growth and loyalty.
              </p>
              <p className="text-brown font-sans mt-3">
                Great For: Clients who want to grow their social media presence,
                engage their audience, and ensure consistent, high-quality
                content across platforms like Instagram, LinkedIn, and TikTok.
              </p>
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
                className="bg-suede hover:bg-suede text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
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
