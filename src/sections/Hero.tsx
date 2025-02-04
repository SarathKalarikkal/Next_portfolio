import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import HeroOrbit from "@/components/HeroOrbit";

const Hero = () => {
  return (
    <div id="hero" className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image: linear-gradient(to_bottom, transparent, black_10%,black_70%, transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <HeroOrbit  size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
            <SparkleIcon className="text-emerald-300/20 size-8" />
          </HeroOrbit>
          <HeroOrbit  size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
            <SparkleIcon className="text-emerald-300/20 size-5" />
          </HeroOrbit>
          <HeroOrbit  size={520} rotation={-41} shouldOrbit orbitDuration="34s" shouldSpin spinDuration="3s">
            <div className="bg-emerald-300/20 size-2 rounded-full" />
          </HeroOrbit>
          <HeroOrbit  size={530} rotation={178} shouldOrbit orbitDuration="36s"  shouldSpin spinDuration="3s">
            <SparkleIcon className="text-emerald-300/20 size-10" />
          </HeroOrbit>
          <HeroOrbit  size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
            <StarIcon className="text-emerald-300 size-12" />
          </HeroOrbit>
          <HeroOrbit  size={590} rotation={90} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
            <StarIcon className="text-emerald-300 size-8" />
          </HeroOrbit>
          <HeroOrbit  size={650} rotation={-5} shouldOrbit orbitDuration="42s">
            <div className="bg-emerald-300/20 size-2 rounded-full" />
          </HeroOrbit>
          <HeroOrbit  size={710} rotation={85} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
            <div className="bg-emerald-300/20 size-3 rounded-full" />
          </HeroOrbit>
          <HeroOrbit  size={710} rotation={144} shouldOrbit orbitDuration="46s">
            <SparkleIcon className="text-emerald-300/20 size-14" />
          </HeroOrbit>
          <HeroOrbit  size={800} rotation={-71} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
            <StarIcon className="text-emerald-300 size-28" />
          </HeroOrbit>
        </div>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative ">
              <div className="bg-green-500 absolute animate-ping-large inset-0 rounded-full"></div>
            </div>
            <div className="text-sm font-medium">
            Hi, I&#39;m Sarath K
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h3 className="font-serif md:text-4xl text-3xl text-center mt-8 tracking-wide">
          Crafting Engaging & Scalable Web Experiences
          </h3>
          <p className="mt-4 text-center text-white/60 md:text-lg">
          Bringing ideas with clean code, modern design, and seamless user experiences. Specializing in front-end and full-stack solutions.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 relative z-50">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <a  href="#projects" className="font-semibold">Explore my work</a>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border-white text-gray-900 bg-white px-6 h-12 rounded-xl">
            <span>👋</span>
            <a href="#contact" className="font-semibold">Lets connect</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
