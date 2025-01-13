import React from "react";
import ButtonGradient from "../../assets/svg/ButtonGradient";
import Footer from "../Footer";
import Header from "../Header";
import { heroBackground, blowfish, aero, tristan, ruth } from "../../assets";

const About = () => {
  return (
    <>
      <div
        className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden text-white"
        style={{ backgroundImage: `url(${heroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <Header />

        <div className="container mx-auto px-4 py-8 lg:py-16">
          {/* Company Overview */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-6">Company Overview</h2>
            <div className="p-8 rounded-lg ">
              <p className="text-lg text-center mb-4">
                Phoenix Labs is dedicated to leveraging advanced AI and data analytics to revolutionize everyday
                experiences. Our mission is to address complex challenges with innovative solutions, making technology
                accessible and beneficial for everyone.
              </p>
            </div>
          </section>

          {/* Our Team */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-6">Our Team</h2>
            <div className="p-8 rounded-lg ">
              <p className="text-lg text-center mb-4">
              Meet the brilliant minds behind Phoenix Labs. Our diverse team of AI engineers, data scientists, and
              industry experts work tirelessly to create cutting-edge solutions.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { name: "Blowfish", position: "Senior Software Developer", img: blowfish },
                { name: "Tristan", position: "Senior AI Engineer", img: tristan },
                { name: "Aero", position: "Web Development", img: aero },
                { name: "Ruth Adingwu", position: "Senior Vice President", img: ruth },
              ].map((member, index) => (
                <div key={index} className="w-[18rem] text-center border border-gradient-to-b from-[#B9AEDF] to-[#1A1A32] p-6 rounded-lg">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-56 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-300">{member.position}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Press & Media */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-6">Press & Media</h2>
            <div className="p-8 rounded-lg ">
              <p className="text-lg text-center mb-4">
              Stay updated with the latest news and developments at Phoenix Labs. Explore our press releases, media
coverage, and exciting announcements.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { title: "Phoenix Labs in the News", link: "#", date: "July 2024" },
                { title: "Press Release: New Product Launch", link: "#", date: "June 2024" },
                { title: "Media Coverage on Our Innovations", link: "#", date: "May 2024" },
              ].map((article, index) => (
                <div key={index} className="w-[18rem] text-center border border-gradient-to-b from-[#88E5BE] to-[#1A1A32] p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">{article.title}</h4>
                  <p className="text-gray-300 mb-4">{article.date}</p>
                  <a
                    href={article.link}
                    className="text-pink-400 hover:underline"
                  >
                    Read More
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Careers */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-6">Careers</h2>
            <div className="p-8 rounded-lg border border-gradient-to-b from-[#DD734F] to-[#1A1A32]">
              <p className="text-lg text-center mb-4">
              Join our dynamic team and help shape the future of AI technology. Explore our current job openings and
              find your perfect role at Phoenix Labs.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { title: "Software Engineer", location: "Remote" },
                  { title: "AI/ML Engineer", location: "Remote" },
                  { title: "Blockchain Developer", location: "Remote" },
                ].map((job, index) => (
                  <div key={index} className="w-[18rem] text-center border  border-gradient-to-b from-[#B9AEDF] to-[#1A1A32] p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">{job.title}</h4>
                    <p className="text-gray-300 mb-4">{job.location}</p>
                    <a
                      href="/contact"
                      className="text-pink-400 hover:underline"
                    >
                      Apply Now
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default About;
