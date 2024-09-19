import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const About = () => {
  // Data for the Pie Chart (Fun Facts)
  const pieData = {
    labels: [
      "Reading Manga",
      "Watching Anime",
      "Telling Dad Jokes",
      "Cafe Hunting",
      "Gaming",
    ],
    datasets: [
      {
        data: [25, 25, 20, 15, 15],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  // Data for the Bar Chart (Skills)
  const barData = {
    labels: ["Python", "Figma", "JavaScript", "Quirky Skill"],
    datasets: [
      {
        label: "Skill Level",
        data: [80, 70, 85, 50],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white p-16">
        <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-white ">
          <div className="relative z-10 max-w-xl mx-auto text-left p-8 md:w-1/2">
            <h1 className="text-8xl font-bold text-gray-800 mb-3">about.</h1>
            <p className="mb-4 text-black">
              Hello there! I'm Anna Kioko, a full stack software developer based
              in the vibrant city of Nairobi, Kenya. What does that mean, you
              ask? Well, it means I’m like the superhero of software development
              – I handle everything from the front end (what you see) to the
              back end (what you don't see, but it makes the magic happen).
              Think of me as the jack-of-all-trades who builds websites and apps
              that can do everything except make you coffee (still working on
              that one)! When I'm not coding, you might find me exploring new
              cafes, binge-watching tech tutorials, or trying to conquer the
              latest coding challenge. Welcome to my digital diary, where code
              meets creativity and a little bit of quirkiness!
            </p>
          </div>
          <div className="relative z-10 md:w-1/2 flex justify-center">
            <img
              src="/src/assets/contactpage.jpg"
              alt="Your Image"
              className="w-full h-full mt-32 object-cover rounded-md shadow-lg "
            />
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <div className="bg-slate-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Fun Facts About Me
          </h2>
          <div className="max-w-2xl mx-auto">
            <Pie data={pieData} />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section className="p-20 bg-white">
        <div className="">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">My Skills</h2>
            <div className="max-w-7xl mx-9xl h-96">
              <Bar
                data={barData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                      max: 100,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
