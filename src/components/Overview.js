import { Link } from "react-router-dom";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SavingsCard from "./savings/SavingsCard";
import CarbonCard from "./carbon/CarbonCard";
import BatteryCard from "./battery/BatteryCard";
import ScheduleCard from "./schedule/ScheduleCard";

import subDays from "date-fns/subDays";

const Overview = () => {
  const date = subDays(new Date(), 1);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
        flexGrow: 1,
        padding: "30px",
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
          color: "rgba(0, 0, 0, 0.4)",
        }}
      >
        Gisteren, {date.toDateString()}
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
      <SavingsCard withReadMore={true} />
      <CarbonCard withReadMore={true} />
      <ScheduleCard withReadMore={true} />
      {/* <BatteryCard withReadMore={true} /> */}
    </div>
  );
};

export default Overview;
