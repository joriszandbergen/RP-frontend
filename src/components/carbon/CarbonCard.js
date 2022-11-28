import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import carbonImage from "../../images/carbon.svg";

const CarbonCard = ({ withReadMore }) => {
  const [carbonSavings, setCarbonSavings] = useState(0);
  const [defaultCosts, setDefaultCosts] = useState(0);
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const getLatestCarbonSavings = async () => {
      try {
        const response = await axiosPrivate.get(`/carbon/${auth.user}`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        if (!response.data.v2gCarbon) {
          setDefaultCosts(0);
          return setCarbonSavings(0);
        }
        console.log(typeof response.data.v2gCarbon);
        setDefaultCosts(response.data.defaultCarbon);
        setCarbonSavings(response.data.v2gCarbon);
      } catch (err) {
        console.log(err);
      }
    };
    getLatestCarbonSavings();
  }, []);

  return (
    <div
      style={{
        padding: "10px 0px",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <img src={carbonImage} style={{ width: "120px" }} />
      <div
        style={{ display: "flex", flexDirection: "column", padding: "10px" }}
      >
        {withReadMore && (
          <p
            style={{
              fontWeight: 300,
              fontSize: "20px",
              color: "black",
            }}
          >
            CO2 emissies
          </p>
        )}
        <p
          style={{
            fontWeight: 700,
            fontSize: "32px",
            color: "#434343",
          }}
        >
          {carbonSavings.toFixed(2)} kg{" "}
          <span style={{ color: "#D3D3D3" }}>V2G</span>
        </p>
        <p
          style={{
            fontWeight: 700,
            fontSize: "16px",
            color: "#434343",
          }}
        >
          {defaultCosts.toFixed(2)} kg{" "}
          <span style={{ color: "#D3D3D3" }}>normaal</span>
        </p>
        {withReadMore && (
          <Link to="/carbon">
            <p
              style={{
                fontWeight: 300,
                fontSize: "14px",
                color: "black",
                textDecorationLine: "underline",
              }}
            >
              lees meer
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CarbonCard;
