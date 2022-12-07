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

        overflow: "hidden",
      }}
    >
      <Link to="/overview">
        <FaArrowLeft
          style={{
            width: "32px",
            height: "32px",
            marginLeft: "30px",
            marginTop: "30px",
          }}
        />
      </Link>
      <h1
        style={{
          fontWeight: 700,
          fontSize: "48px",
          marginLeft: "30px",
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
        }}
      >
        <p
          style={{
            fontWeight: 300,
            fontSize: "32px",
            color: "black",
            marginLeft: "30px",
            marginRight: "30px",
          }}
        >
          Jouw laad-data wordt verzameld via de app.
        </p>
        <img
          src={About01}
          style={{
            marginRight: "-20px",
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
            marginLeft: "30px",
            marginRight: "30px",
          }}
        >
          Slimme software maak een laadpatroon aan de hand van energieprijzen.
        </p>
        <img
          src={About02}
          style={{
            width: "100%",
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
            marginLeft: "30px",
            marginRight: "30px",
          }}
        >
          Met dit laadpatroon wordt vervolgens jouw impact berekend.
        </p>
        <img
          src={About03}
          style={{
            width: "100%",
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
          marginLeft: "30px",
          marginRight: "30px",
        }}
      >
        In de app krijg je elke dag een nieuw overzicht van je impact van
        gisteren te zien!
      </p>
    </div>
  );
};

export default About;
