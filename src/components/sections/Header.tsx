import app from "@/data/app";

const Header = () => (
  <header className="px-5 pb-3 pt-4 md:py-5">
    <h1 className="font-bold text-4xl md:text-5xl tracking-tight">
      {app.title}
      <span className="text-teal-500">.</span>
    </h1>

    <p>{app.tagline}.</p>
  </header>
);

export default Header;
