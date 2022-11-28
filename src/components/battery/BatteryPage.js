import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import BatteryCard from "./BatteryCard";

const BatteryPage = () => {
  const date = new Date();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
        flexGrow: 1,
        padding: "30px 30px",
        width: "100vw",
      }}
    >
      <Link to="/overview">
        <FaArrowLeft
          style={{
            width: "32px",
            height: "32px",
          }}
        />
      </Link>
      <h1
        style={{
          fontWeight: 700,
          fontSize: "48px",
        }}
      >
        Batterij Degradatie
      </h1>
      <p
        style={{
          fontWeight: 300,
          fontSize: "20px",
          color: "rgba(0, 0, 0, 0.2)",
        }}
      >
        Gisteren, {date.toDateString()}
      </p>
      <BatteryCard withReadMore={false} />
    </div>
  );
};

export default BatteryPage;
