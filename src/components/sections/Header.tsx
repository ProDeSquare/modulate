import app from "@/data/app";

const Header = () => (
  <header className="p-5">
    <h1 className="font-bold text-4xl md:text-5xl tracking-tight">
      {app.title}.
    </h1>

    <p>{app.tagline}.</p>
  </header>
);

export default Header;
