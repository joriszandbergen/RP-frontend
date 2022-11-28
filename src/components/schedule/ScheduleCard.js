import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import scheduleImage from "../../images/schedule.svg";

const ScheduleCard = ({ withReadMore }) => {
  const [planningAmount, setPlanningAmount] = useState(0);
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const getPlanningAmount = async () => {
      try {
        const response = await axiosPrivate.get(`/planning/${auth.user}`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        if (!response.data) {
          return setPlanningAmount(0);
        }
        setPlanningAmount(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPlanningAmount();
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
      <img src={scheduleImage} style={{ width: "120px" }} />
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
            aantal keer moeten inplannen:
          </p>
        )}
        <p
          style={{
            fontWeight: 700,
            fontSize: "32px",
            color: "#434343",
          }}
        >
          {planningAmount} keer
        </p>
        {withReadMore && (
          <Link to="/schedule">
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

export default ScheduleCard;
