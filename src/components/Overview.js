import { Link } from "react-router-dom";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SavingsCard from "./SavingsCard";
import CarbonCard from "./CarbonCard";
import BatteryCard from "./BatteryCard";
import ScheduleCard from "./ScheduleCard";

const Overview = () => {
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
      <Link to="/">
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
        Jouw impact
      </h1>
      <p
        style={{
          fontWeight: 300,
          fontSize: "20px",
          color: "rgba(0, 0, 0, 0.2)",
        }}
      >
        {date.toDateString()}
      </p>
      <Link to="/about">
        <button
          style={{
            fontWeight: 300,
            fontSize: "20px",
            color: "white",
            background: "#24E720",
            border: "none",
            fontSize: "20px",
            fontWeight: "700",
            padding: "10px 15px",
            cursor: "pointer",
          }}
        >
          bekijk hier hoe het werkt
          <FaArrowRight
            style={{
              width: "16px",
              height: "16px",
              marginLeft: "10px",
            }}
          />
        </button>
      </Link>
      <SavingsCard />
      <CarbonCard />
      <BatteryCard />
      <ScheduleCard />
    </div>
  );
};

export default Overview;
