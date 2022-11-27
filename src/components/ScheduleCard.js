import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import scheduleImage from "../images/schedule.png";

const ScheduleCard = () => {
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
      }}
    >
      <img src={scheduleImage} style={{ width: "100px" }} />
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
          aantal keer moeten inplannen:
        </p>
        <p
          style={{
            fontWeight: 700,
            fontSize: "32px",
            color: "#434343",
          }}
        >
          3 keer
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

export default ScheduleCard;
