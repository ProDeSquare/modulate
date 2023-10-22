import app from "@/data/app";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const Modulate = () => (
  <div className="max-w-screen-xl mx-auto font-medium text-gray-800">
    <Header />

    <main className="px-5">
      <p>
        {app.creator.name} - {app.creator.email}
      </p>
    </main>

    <Footer />
  </div>
);

export default Modulate;
