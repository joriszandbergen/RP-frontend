import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import batteryImage from "../../images/battery.svg";

const BatteryCard = ({ withReadMore }) => {
  const [costSavings, setCostSavings] = useState(0);
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
          return setCostSavings(0);
        }
        console.log(typeof response.data.v2gCosts);
        setCostSavings(response.data.v2gCosts);
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
        opacity: 0.2,
      }}
    >
      <img src={batteryImage} style={{ width: "120px" }} />
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
          batterij degradatie
        </p>
        <p
          style={{
            fontWeight: 700,
            fontSize: "32px",
            color: "#434343",
          }}
        >
          +0.0048% V2G
        </p>
        <p
          style={{
            fontWeight: 700,
            fontSize: "16px",
            color: "#434343",
          }}
        >
          +0.002% normaal
        </p>
        {withReadMore && (
          <Link to="/battery">
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

export default BatteryCard;
