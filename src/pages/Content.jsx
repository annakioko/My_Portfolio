import React from "react";
import { useNavigate } from "react-router-dom";
import ContentCard from "../components/ContentCard";
import Aboutme from "/src/assets/Aboutme.jpg";
import Ai from "/src/assets/Ai.jpg";
import Ai2 from "/src/assets/Ai2.jpg";

const ContentPage = () => {
    const navigate = useNavigate();
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Introduction */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 bg-brown text-blue px-4 py-2 font-semibold font-serif rounded hover:bg-blue-700 transition duration-300"
      >
        ← Back to Portfolio
      </button>
      <h1 className="text-3xl font-bold text-center mb-6">Content Writing</h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto">
        Writing that connects, engages, and converts. Explore some of my pieces,
        published across various platforms.
      </p>

      {/* Image Cards Section */}
      <div className="grid md:grid-cols-2 gap-12 mt-8">
        <ContentCard
          title="Why I’m Choosing to Walk in Silence"
          image={Aboutme}
          description="Discover why personal growth thrives in silence. This piece explores the impact of limiting external influence, focusing on self-improvement, and using accessible resources to evolve on your own terms. Real change happens when no one is watching."
          publication="About me Publication"
          link="https://medium.com/about-me-stories/why-im-choosing-to-walk-in-silence-589228bb0837"
        />
        <ContentCard
          title="Why Elon Musk Is Afraid of AI"
          image={Ai}
          description="A thought-provoking look at Elon Musks concerns about AI, from its unchecked power to job displacement and ethical dilemmas. With AI rapidly evolving, should we be worried too?"
          publication="Illumination Publication"
          link="https://medium.com/illumination/why-elon-musk-is-afraid-of-ai-22cd65aa97b0"
        />
        <ContentCard
          title="The Dark Side of AI"
          image={Ai2}
          description="AI isn’t all sunshine and innovation—there’s a darker side we can’t ignore. From autonomous weapons and biased algorithms to job losses, deepfakes, and the looming threat of AI surpassing human control, the risks are real. This piece explores how AI could go off the rails and why we need to act now."
          publication="Medium"
          link="https://medium.com/@annakioko00/the-dark-side-of-ai-5d98b9ad3138"
        />
      </div>
    </div>
  );
};

export default ContentPage;
