import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import costImage from "../images/cost.png";

const Card = () => {
  const [costSavings, setCostSavings] = useState(0);
  const [defaultCosts, setDefaultCosts] = useState(0);
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const getLatestCostSavings = async () => {
      try {
        const response = await axiosPrivate.get(`/savings/${auth.user}`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        if (!response.data.v2gCosts) {
          setDefaultCosts(0);
          return setCostSavings(0);
        }
        console.log(typeof response.data.v2gCosts);
        setCostSavings(response.data.v2gCosts);
        setDefaultCosts(response.data.defaultCosts);
      } catch (err) {
        console.log(err);
      }
    };
    getLatestCostSavings();
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
      <img src={costImage} style={{ width: "100px" }} />
      <div
        style={{ display: "flex", flexDirection: "column", padding: "10px" }}
      >
        <p
          style={{
            fontWeight: 300,
            fontSize: "20px",
            color: "black",
          }}
        >
          kosten van het laden
        </p>
        <p
          style={{
            fontWeight: 700,
            fontSize: "32px",
            color: "#434343",
          }}
        >
          €{costSavings.toFixed(2)} V2G
        </p>
        <p
          style={{
            fontWeight: 700,
            fontSize: "16px",
            color: "#434343",
          }}
        >
          €{defaultCosts.toFixed(2)} normaal
        </p>
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
      </div>
    </div>
  );
};

export default Card;
