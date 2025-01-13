import React, { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { heroBackground, contributor1, contributor2, blog1, blog2, blog3 } from "../../assets";
import ButtonGradient from "../../assets/svg/ButtonGradient";

const Blog = () => {
  const [expandedPostId, setExpandedPostId] = useState(null); // State to track the expanded post
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Welcome to Synth-Mind Solutions: Pioneering Ethical AI for a Better Tomorrow",
      category: "Finance",
      image: blog1,
      excerpt:
        "In a world where technology is rapidly evolving, Synth-Mind Solutions, Inc., a subsidiary of ...",
      content: "In a world where technology is rapidly evolving, Synth-Mind Solutions, Inc., a subsidiary of Phoenix Labs Global, is committed to setting new standards in ethical AI. Our mission is to create and deploy intelligent AI models that not only enhance human potential but also foster inclusivity and drive positive societal impact. We believe that AI should be a force for good, and our vision is to be a trailblazer in ethical AI, ensuring that the solutions we create benefit both individuals and society as a whole. At Synth-Mind Solutions, we understand the profound impact that AI can have on our lives. That's why we've developed a platform that offers a suite of AI-powered smartbots designed to assist with various tasks across different sectors. Our smartbots are not just tools—they are partners in your journey, offering personalized assistance and advice to help you navigate the complexities of modern life. Our commitment to ethical AI is at the core of everything we do. We believe that AI should be transparent, fair, and designed with the end-user in mind. That's why our smartbots are built on a foundation of responsible AI development, ensuring that they are not only effective but also trustworthy and safe. Join us on this exciting journey as we continue to push the boundaries of what's possible with AI. Welcome to Synth-Mind Solutions—where ethical AI meets human potential.",
    },
    {
      id: 2,
      title: "Unleashing the Power of AI: Discover Our Suite of AI-Powered Smartbots",
      category: "Education",
      image: blog2,
      excerpt:
        "At Synth-Mind Solutions, Inc., we are redefining the way people interact with technology. Our ...",
      content: "At Synth-Mind Solutions, Inc., we are redefining the way people interact with technology. Our platform offers a suite of AI-powered smartbots designed to assist with a wide range of tasks across business, technology, mental health, education, and dating/relationships. These smartbots are more than just algorithms—they are intelligent companions that adapt to your unique needs, providing personalized assistance and advice. In the fast-paced world of business and technology, staying ahead requires the right tools. Our business and technology smartbots are designed to help you manage tasks, streamline operations, and stay informed about the latest trends. Whether you&#39;re an entrepreneur, a tech enthusiast, or a corporate professional, our smartbots offer the support you need to succeed. Mental health is another area where our smartbots excel. We understand the importance of mental well- being in today&#39;s hectic world. That&#39;s why our mental health smartbots are designed to provide compassionate, evidence-based support, helping you manage stress, anxiety, and other mental health challenges. These smartbots offer personalized advice and coping strategies, empowering you to take control of your mental well-being. Education is the foundation of a better future, and our education smartbots are here to assist learners of all ages. Whether you're a student looking for help with your studies or a lifelong learner seeking new knowledge, our smartbots provide tailored educational support to help you achieve your goals. Finally, our dating and relationship smartbots are designed to help you navigate the complexities of modern relationships. Whether you're seeking advice on dating, communication, or maintaining a healthy relationship, our smartbots offer personalized guidance to help you build meaningful connections. At Synth-Mind Solutions, we are committed to creating AI that makes a difference. Our smartbots are designed with you in mind, offering the support and guidance you need to thrive in every aspect of your life.",
    },
    {
      id: 3,
      title: "Building a Future with Ethical AI: The Vision of Synth-Mind Solutions",
      category: "Health",
      image: blog3,
      excerpt:
        "At Synth-Mind Solutions, Inc., we are driven by a bold vision—to be a trailblazer in ethical AI...",
      content: "At Synth-Mind Solutions, Inc., we are driven by a bold vision—to be a trailblazer in ethical AI, setting the standard for responsible AI development and deployment. As a subsidiary of Phoenix Labs Global, our mission is to create intelligent AI models that enhance human potential, foster inclusivity, and drive positive societal impact. We believe that AI has the power to transform lives, and we are committed to ensuring that this transformation is positive, equitable, and ethical. Our platform is at the forefront of this mission, offering a suite of AI-powered smartbots designed to assist with various tasks across business, technology, mental health, education, and dating/relationships. Each smartbot is powered by advanced AI, capable of providing personalized assistance and advice tailored to your unique needs. But what truly sets our smartbots apart is their ethical foundation—every interaction is guided by our commitment to transparency, fairness, and user well-being. In the business and technology sectors, our smartbots are helping professionals streamline their work, stay ahead of trends, and make informed decisions. They are designed to be your trusted partners, offering insights and assistance that can make a real difference in your success. Our mental health smartbots are another cornerstone of our platform. In a world where mental well-being is more important than ever, these smartbots provide compassionate, evidence-based support to help you manage life's challenges. Whether you're dealing with stress, anxiety, or other mental health issues, our smartbots are here to help you navigate your journey to well-being. Education is key to personal and societal growth, and our education smartbots are designed to support learners at every stage. Whether you're a student, a teacher, or a lifelong learner, our smartbots offer personalized educational assistance to help you reach your full potential. When it comes to relationships, our dating and relationship smartbots provide guidance to help you build and maintain meaningful connections. Whether you're navigating the dating scene or seeking advice on communication, our smartbots offer insights that can help you thrive in your relationships. At Synth-Mind Solutions, we are not just building AI—we are building a future where AI serves humanity in the most ethical and impactful ways. Join us as we lead the way in ethical AI, creating solutions that benefit individuals and society as a whole.",
    },
  ];

  const toggleReadMore = (postId) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  const contributors = [
    { name: "Anya Soze", image: contributor1 },
    { name: "Vaughn Braswell Sr.", image: contributor2 },
  ];

  const categories = ["Finance", "Education", "Health", "Technology", "Business"];

  const filterPostsByCategory = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <>
      <div
        className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden text-white"
        style={{ backgroundImage: `url(${heroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <Header />

        <div className="container mx-auto px-4 py-8 lg:py-16">
          {/* Latest Posts */}
          <section className="mb-12">
            <h2 className="text-6xl font-bold text-center mb-12">Latest Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-72 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-400 mb-4">{expandedPostId === post.id ? post.content : post.excerpt}</p>
                    <button
                      onClick={() => toggleReadMore(post.id)}
                      className="text-blue-500 hover:underline"
                    >
                      {expandedPostId === post.id ? "Read less" : "Read more"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Categories */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-center mb-10 pt-16">Categories</h2>
            <div className="flex justify-center flex-wrap gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => filterPostsByCategory(category)}
                  className={`text-lg px-4 py-2 rounded-md bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 ${
                    selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-600 text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {/* Contributors */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-12 pt-20">Contributors</h2>
            <div className="flex justify-center flex-wrap gap-80">
              {contributors.map((contributor, index) => (
                <div key={index} className="text-center">
                  <div className="rounded-full overflow-hidden mx-auto mb-2" style={{ width: 100, height: 100 }}>
                    <img src={contributor.image} alt={contributor.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{contributor.name}</h3>
                </div>
              ))}
            </div>
          </section>
        </div>

        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Blog;
