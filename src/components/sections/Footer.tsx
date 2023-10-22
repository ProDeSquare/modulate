import app from "@/data/app";

const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="p-5 leading-snug">
      <p>
        &copy;{" "}
        {currentYear === app.initYear
          ? currentYear
          : `${app.initYear}-${currentYear}`}{" "}
        {app.title}, a Product of{" "}
        <a
          className="text-teal-500 hover:text-teal-600 transition-colors"
          href={app.creator.website}
        >
          {app.creator.title}
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
