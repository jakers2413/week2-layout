import Button from "./components/Button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans px-6 text-center dark:bg-black">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 dark:text-white">
          Elevate Your Digital Experience
        </h1>

        {/* Subheadline with Lorem Ipsum */}
        <p className="text-lg text-slate-600 mb-8 max-w-xl dark:text-slate-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Our platforms provide high-performance design assets out of the box.
        </p>

        {/* Call-to-action Button component */}
        <Button text="Get Started Now" />
      </div>
    </div>
  );
}


