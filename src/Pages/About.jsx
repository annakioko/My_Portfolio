import React from "react";


export default function About() {
  return (
    <div className="text-slate-300">
      {/* About Me Section */}
      <section className="mb-16">
        <h1 className="text-4xl text-white font-bold mb-12">About Me .</h1>
        <p className="mb-4">
          Hey there! 👋 I'm Anna Kioko, a Full Stack Developer passionate about
          turning creative ideas into digital realities. I specialize in
          crafting sleek, responsive websites and ensuring seamless backend
          operations to help businesses thrive.
        </p>
        <p className="mb-4">
          I enjoy collaborating with small businesses, taking their vision from
          concept to reality it's like giving them the keys to their digital
          kingdom! With a focus on tailored solutions and a collaborative
          approach, I ensure that every project aligns with your unique goals.
        </p>
        <p className="mb-4">
          Ready to elevate your online presence? Let’s discuss how we can
          transform your ideas into a powerful digital solution. Schedule a call
          with me today, and let's start creating something exceptional for your
          business! 💻✨
        </p>
        <button className="bg-gold p-3 text-black rounded text-center font-bold mb-9">
          Schedule a Call Today!
        </button>
      </section>

      {/* What I Do for My Clients Section */}
      <section>
        <h2 className="text-2xl text-white mb-5">What I Do </h2>

        <div className="flex flex-wrap gap-6">
          <div className="bg-neutral-700 rounded-lg p-6 flex-1 min-w-[200px]">
            <h3 className="text-lg text-white font-bold mb-2">
              Web Development
            </h3>
            <p className="text-slate-100">
              Crafting custom, responsive websites that align with your brand
              and business goals.
            </p>
          </div>

          <div className="bg-neutral-700 rounded-lg p-6 flex-1 min-w-[200px]">
            <h3 className="text-lg text-white font-bold mb-2">Web Design</h3>
            <p className="text-slate-100">
              Designing visually appealing and user-friendly interfaces that
              enhance engagement.
            </p>
          </div>

          <div className="bg-neutral-700 rounded-lg p-6 flex-1 min-w-[200px]">
            <h3 className="text-lg text-white font-bold mb-2">
              Web Optimization
            </h3>
            <p className="text-slate-100">
              Improving site performance and speed to enhance user experience
              and search engine rankings.
            </p>
          </div>

          <div className="bg-neutral-700 rounded-lg p-6 flex-1 min-w-[200px]">
            <h3 className="text-lg text-white font-bold mb-2">
              Web Content Writing
            </h3>
            <p className="text-slate-100">
              Producing compelling, SEO-friendly content that captures your
              audience’s attention.
            </p>
          </div>

          <div className="bg-neutral-700 rounded-lg p-6 flex-1 min-w-[200px]">
            <h3 className="text-lg text-white font-bold mb-2">
              Software and Mobile App Development
            </h3>
            <p className="text-slate-100">
              Building customized software solutions and mobile applications to
              meet specific needs.
            </p>
          </div>

          <div className="bg-neutral-700 rounded-lg p-6 flex-1 min-w-[200px]">
            <h3 className="text-lg text-white font-bold mb-2">
              SEO (Search Engine Optimization)
            </h3>
            <p className="text-slate-100">
              Enhancing your website’s visibility on search engines through
              strategic optimization.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
