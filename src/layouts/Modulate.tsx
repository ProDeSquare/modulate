import app from "@/data/app";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const Modulate = () => (
  <div className="max-w-screen-xl mx-auto font-medium text-gray-800">
    <Header />

    <p>{app.tagline}</p>

    <Footer />
  </div>
);

export default Modulate;
