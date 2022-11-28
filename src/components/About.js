import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import About01 from "../images/about01.svg";
import About02 from "../images/about02.svg";
import About03 from "../images/about03.svg";

const About = () => {
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
        Hoe het werkt:
      </h1>
      <div
        style={{
          display: "flex",
          alignContent: "space-between",
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: "100px",
          gap: "20px",
          width: "100%",
        }}
      >
        <p
          style={{
            fontWeight: 300,
            fontSize: "32px",
            color: "black",
          }}
        >
          Jouw laad-data wordt verzameld via de app.
        </p>
        <img
          src={About01}
          style={{
            width: "90vw",
            marginRight: "-30px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexDirection: "column",
          marginTop: "150px",
          gap: "20px",
        }}
      >
        <p
          style={{
            fontWeight: 300,
            fontSize: "32px",
            color: "black",
          }}
        >
          Slimme software maak een laadpatroon aan de hand van energieprijzen.
        </p>
        <img
          src={About02}
          style={{
            width: "100vw",
            marginLeft: "-30px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexDirection: "column",
          marginTop: "150px",
          gap: "20px",
        }}
      >
        <p
          style={{
            fontWeight: 300,
            fontSize: "32px",
            color: "black",
            paddingRight: "30px",
          }}
        >
          Met dit laadpatroon wordt vervolgens jouw impact berekend.
        </p>
        <img
          src={About03}
          style={{
            width: "100vw",
            marginLeft: "-30px",
          }}
        />
      </div>

      <p
        style={{
          fontWeight: 300,
          fontSize: "32px",
          color: "black",
          textAlign: "center",
          marginTop: "40px",
          marginBottom: "200px",
        }}
      >
        In de app krijg je elke dag een nieuw overzicht van je impact van
        gisteren te zien!
      </p>
    </div>
  );
};

export default About;
