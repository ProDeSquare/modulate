import app from "@/data/app";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        &copy;{" "}
        {currentYear === app.initYear
          ? currentYear
          : `${app.initYear}-${currentYear}`}{" "}
        {app.title}, a Product of{" "}
        <a href={app.creator.website}>{app.creator.title}</a>.
      </p>
    </footer>
  );
};

export default Footer;
