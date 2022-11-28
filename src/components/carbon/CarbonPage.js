import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import CarbonCard from "./CarbonCard";
import subDays from "date-fns/subDays";

const CarbonPage = () => {
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
        CO2 emissies
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
      <CarbonCard withReadMore={false} />
      <div
        style={{
          fontWeight: 300,
          fontSize: "20px",
          lineHeight: "25px",
          color: "black",
        }}
      >
        <p>
          Dit is je CO2 impact van het opladen van je elektrische auto. Omdat
          energie vaak goedkoop is op momenten wanneer er veel hernieuwbare
          energie (vanuit zon & wind) beschikbaar is sturen op prijs in veel
          gevallen ook sturen op zo min mogelijk CO2 uistoot.
        </p>
        <br />
        <p>
          Deze CO2 emissies gaan alleen over de uitstoot van de broeikasgassen
          tijdens de opwek van electriciteit en niet over de uitstoot die nodig
          is geweest voor, bijvoorbeeld, de productie van je electrische auto of
          infrastructuur zoals snelwegen.
        </p>
        <br />
        <p>
          De normale uitstoot is op basis van je hoeveelheid kilometers gereden
          in een scenarios van “dom laden”. Dit betekent dat de auto gelijk
          volledig oplaad.
        </p>
      </div>
    </div>
  );
};

export default CarbonPage;
