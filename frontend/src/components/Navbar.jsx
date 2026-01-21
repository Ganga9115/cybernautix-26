import { useNavigate } from "react-router-dom";
import GooeyNav from "./Gooey/GooeyNav";

const Navbar = () => {
  const navigate = useNavigate();

  // Navbar items
  const items = [
    { label: "Home", href: "/", onClick: () => navigate("/") },
    { label: "Events", href: "/events", onClick: () => navigate("/events") },
    { label: "Rules", href: "/rules", onClick: () => navigate("/rules") },
    { label: "Bus Route", href: "/bus", onClick: () => navigate("/bus") },
    { label: "Timeline", href: "/timeline", onClick: () => navigate("/timeline") },
    { label: "Contact", href: "/contact", onClick: () => navigate("/contact") }
  ];

  return (
  <div style={{width:"100vw",display:"flex",justifyContent:"center"}}>
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
      </div>
  );
};

export default Navbar;