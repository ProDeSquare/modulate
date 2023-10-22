import Form from "@/components/partials/Form";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const Modulate = () => (
  <div className="max-w-screen-xl mx-auto font-medium text-gray-800">
    <Header />

    <main>
      <div className="flex md:px-5">
        <Form />
      </div>
    </main>

    <Footer />
  </div>
);

export default Modulate;
