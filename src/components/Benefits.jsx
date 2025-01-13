import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="chatbots">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with our AI Smartbots"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] group"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  {item.title === "FutureFarm Agronomist" ? (
                    <a
                      href="/agribot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider flex items-center pointer-events-auto"
                    >
                      LET'S CHAT
                      <Arrow />
                    </a>
                  ) :
                  item.title === "FinWiz Bot" ? (
                    <a
                      href="/finwiz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider flex items-center pointer-events-auto"
                    >
                      LET'S CHAT
                      <Arrow />
                    </a>
                  ): 
                  item.title === "MindMate Pro" ? (
                    <a
                      href="/mindmate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider flex items-center pointer-events-auto"
                    >
                      LET'S CHAT
                      <Arrow />
                    </a>
                  ):
                  item.title === "EduSynth Tutor" ? (
                    <a
                      href="/edusynth"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider flex items-center pointer-events-auto"
                    >
                      LET'S CHAT
                      <Arrow />
                    </a>
                  ):
                  item.title === "HealthBot360" ? (
                    <a
                      href="/healthbot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider flex items-center pointer-events-auto"
                    >
                      LET'S CHAT
                      <Arrow />
                    </a>
                  ): 
                  (
                    <div className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider flex items-center">
                      LET'S CHAT
                      <Arrow />
                    </div>
                  )}
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;