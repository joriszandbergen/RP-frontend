import { Link } from "react-router-dom";
import { FaArrowLeft, FaRegEdit } from "react-icons/fa";
import ScheduleCard from "./ScheduleCard";
import subDays from "date-fns/subDays";

const SchedulePage = () => {
  const date = subDays(new Date(), 1);
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
        Aantal keer moeten inplannen
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
      <ScheduleCard withReadMore={false} />

      <a
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
          marginTop: "-10px",
          marginBottom: "20px",
        }}
        href="https://forms.office.com/e/B1CUeVPmVz"
        target="_blank"
      >
        Vul het formulier in
        <FaRegEdit
          style={{
            width: "16px",
            height: "16px",
            marginLeft: "10px",
          }}
        />
      </a>

      <div
        style={{
          fontWeight: 300,
          fontSize: "20px",
          lineHeight: "25px",
          color: "black",
        }}
      >
        <p>
          Dit zou het aantal keer zijn dat je een rit had moeten ingeplannen met
          een V2G systeem. Omdat je opladingsniveau, ofwel 'state-of-charge'
          constant fluctueert tussen 20% en 80% zou het soms kunnen dat je
          batterij niet vol genoeg zit voor de rit die je wilt maken.
        </p>
        <br />
        <p>
          Deze ritten zou je kunnen inplannen in je V2G-systeem. Het nummer
          hierboven geeft dus aan hoe vaak je dat gisteren had moeten doen.
          Omdat de 'state-of-charge' van je auto's batterij nooit onder 20% komt
          hoeft dit dus in de praktijk alleen bij ritten boven de ~40 kilometer.
        </p>
      </div>
    </div>
  );
};

export default SchedulePage;
