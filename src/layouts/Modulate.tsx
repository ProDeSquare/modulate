import Footer from "@/components/sections/Footer";
import app from "@/data/app";

const Modulate = () => (
  <div className="max-w-screen-xl mx-auto font-medium text-gray-800">
    <h1 className="font-bold text-4xl">{app.title}.</h1>

    <p>{app.tagline}</p>

    <Footer />
  </div>
);

export default Modulate;
