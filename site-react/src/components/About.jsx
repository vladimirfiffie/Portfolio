import Skills from "./Skills";

export default function About() {
  return (
    <section
      id="about"
      className="w-screen relative overflow-hidden py-20 md:py-32 bg-gray-50 dark:bg-neutral-950"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center">
        {/* About text and skills */}
        <div className="max-w-3xl w-full text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 dark:text-white">
            A Bit About Me
          </h2>

          <div className="space-y-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
            <p>
              I'm an Information Technology graduate with a passion for creating
              engaging digital experiences. I specialize in combining creative
              coding with thoughtful design to build applications that are both
              functional and beautiful.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, experimenting
              with design patterns, and always looking for ways to push the
              boundaries of what's possible on the web.
            </p>
          </div>

          <Skills />
        </div>
      </div>
    </section>
  );
}
