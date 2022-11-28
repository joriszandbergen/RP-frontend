import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import SavingsCard from "./SavingsCard";
import subDays from "date-fns/subDays";

const SavingsPage = () => {
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
          fontSize: "42px",
        }}
      >
        Kosten van het laden
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
      <SavingsCard withReadMore={false} />
      <div
        style={{
          fontWeight: 300,
          fontSize: "20px",
          lineHeight: "25px",
          color: "black",
        }}
      >
        <p>
          Dit zouden je kosten zijn met een vehicle-to-grid systeem. Dit is
          gebaseerd op jouw eigen rijgedrag en actuele dynamische energie
          tarieven.
        </p>
        <br />
        <p>
          Doordat er energie is ingekocht (opladen) wanneer deze goedkoop was en
          verkocht (ontladen) wanneer deze duurder was kan er winst worden
          gemaakt met je elektrische auto.{" "}
        </p>
        <br />
        <p>
          De normale prijs is op basis van je hoeveelheid kilometers gereden in
          een scenarios van “dom laden”. Dit betekent dat de auto gelijk
          volledig oplaad met een vaste energieprijs van, 0.40 €/kWh.
        </p>
      </div>
    </div>
  );
};

export default SavingsPage;
