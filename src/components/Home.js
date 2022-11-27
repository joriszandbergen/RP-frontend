import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import useAuth from "../hooks/useAuth";
import "../index.css";

import { MdOutlineLogout, MdSocialDistance, MdClose } from "react-icons/md";
import StekkerErin from "../images/stekker_erin.png";
import StekkerEruit from "../images/stekker_eruit.png";
import fade from "../images/fade.png";

const Home = () => {
  const logout = useLogout();
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [isPluggedIn, setIsPluggedIn] = useState();
  const axiosPrivate = useAxiosPrivate();
  const [isPopped, setIsPopped] = useState();
  const [distance, setDistance] = useState();
  const [time, setTime] = useState("");
  const [isNumber, setIsNumber] = useState();

  const [fadeProp, setFadeProp] = useState({
    fade: "fade-in",
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === "fade-in") {
        setFadeProp({
          fade: "fade-out",
        });
      } else {
        setFadeProp({
          fade: "fade-in",
        });
      }
    }, 1000);

    return () => clearInterval(timeout);
  }, [fadeProp]);

  useEffect(() => {
    let regex = /^[0-9]+$/;
    if (regex.test(distance)) {
      setIsNumber(true);
    } else {
      setIsNumber(false);
    }
  }, [distance]);

  useEffect(() => {
    const getLatestChargeStatus = async () => {
      try {
        const response = await axiosPrivate.get(`/chargelog/${auth.user}`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });

        console.log(response.data);
        setIsPluggedIn(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getLatestChargeStatus();
  }, []);

  const handleUnPlug = async (e) => {
    e.preventDefault();
    const newPlugStatus = !isPluggedIn;
    console.log(newPlugStatus);
    try {
      const response = await axiosPrivate.post(
        "/chargelog",
        { isPluggedIn: newPlugStatus, user: auth.user, time: time },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setIsPopped(false);
      //console.log(isPluggedIn);
      setIsPluggedIn(newPlugStatus);
    } catch (err) {
      console.log(err);
    }
    console.log("gebeurt iets");
  };

  const handlePlugIn = async (e) => {
    e.preventDefault();
    console.log(time);

    if (isNumber) {
      const newPlugStatus = !isPluggedIn;
      console.log(newPlugStatus);
      setIsPopped(false);
      try {
        const response = await axiosPrivate.post(
          "/chargelog",
          {
            isPluggedIn: newPlugStatus,
            user: auth.user,
            distance: distance,
            time: time,
          },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        //console.log(isPluggedIn);
        setIsPluggedIn(newPlugStatus);
      } catch (err) {
        console.log(err);
      }
      console.log("gebeurt iets");
    }
  };

  const handleForm = async () => {
    const popUpStatus = !isPopped;
    setIsPopped(popUpStatus);
  };

  const signOut = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <>
      {isPopped && isPluggedIn && (
        <>
          <div
            style={{
              position: "absolute",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: "column",
              margin: "40px",
              background: "white",
              padding: "30px",
              zIndex: 10,
            }}
          >
            <form onSubmit={handleUnPlug}>
              <label
                htmlFor="time"
                style={{
                  marginBottom: "20px",
                }}
              >
                Hoelaat was het?
              </label>
              <input
                id="time"
                type="time"
                required
                onChange={(e) => setTime(e.target.value)}
                value={time}
              />
              <button>bevestigen</button>
            </form>
            <MdClose
              onClick={handleForm}
              style={{
                position: "absolute",
                top: "0px",
                right: "0px",
                margin: "20px",
                cursor: "pointer",
              }}
            />
          </div>
          <div
            onClick={handleForm}
            style={{
              position: "absolute",
              width: "100vw",
              height: "100vh",
              background: "rgba(0, 0, 0, 0.8)",
              zIndex: 9,
            }}
          ></div>
        </>
      )}
      {isPopped && !isPluggedIn && (
        <>
          <div
            style={{
              position: "absolute",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: "column",
              margin: "40px",
              background: "white",
              padding: "30px",
              zIndex: 10,
            }}
          >
            <form onSubmit={handlePlugIn}>
              <label
                htmlFor="time"
                style={{
                  marginBottom: "20px",
                }}
              >
                Hoelaat was het?
              </label>
              <input
                id="time"
                type="time"
                required
                onChange={(e) => setTime(e.target.value)}
                value={time}
              />
              <label
                htmlFor="distance"
                style={{
                  marginBottom: "20px",
                }}
              >
                Hoeveel kilometer heb je zojuist gereden? (km)
              </label>
              <input
                type="text"
                id="text"
                autoComplete="off"
                onChange={(e) => setDistance(e.target.value)}
                value={distance}
                required
              />
              {!isNumber && (
                <p
                  style={{
                    marginTop: "10px",
                    color: "red",
                  }}
                >
                  alleen nummers zijn geldig
                </p>
              )}
              <button>bevestigen</button>
            </form>
            <MdClose
              onClick={handleForm}
              style={{
                position: "absolute",
                top: "0px",
                right: "0px",
                margin: "20px",
                cursor: "pointer",
              }}
            />
          </div>
          <div
            onClick={handleForm}
            style={{
              position: "absolute",
              width: "100vw",
              height: "100vh",
              background: "rgba(0, 0, 0, 0.8)",
              zIndex: 9,
            }}
          ></div>
        </>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          flexDirection: "column",
          flexGrow: 1,
          gap: "30px",
          marginBottom: "120px",
          overflow: "hidden",
          width: "100%",
        }}
      >
        {isPluggedIn ? (
          <div
            style={{
              position: "relative",
              left: 0,
              top: 0,
            }}
          >
            <img
              src={StekkerErin}
              alt="Stekker Erin"
              style={{
                width: "100vw",
                overflow: "hidden",
                zIndex: -1,
                position: "relative",
                left: 0,
                top: 0,
              }}
            />
            <img
              className={fadeProp.fade}
              src={fade}
              style={{
                width: "100vw",
                overflow: "hidden",
                zIndex: 3,
                position: "absolute",
                left: 0,
                top: 0,
              }}
            />
          </div>
        ) : (
          <img
            src={StekkerEruit}
            alt="Stekker Erin"
            style={{
              width: "100vw",
              overflow: "hidden",
            }}
          />
        )}
        {isPluggedIn ? (
          <button
            style={{
              fontSize: "32px",
              fontWeight: 600,
              color: "#FFFFFF",
              backgroundColor: "#8E8E8E",
              boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.1)",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => handleForm()}
          >
            stekker eruit!
          </button>
        ) : (
          <button
            style={{
              fontSize: "32px",
              fontWeight: 600,
              color: "#8E8E8E",
              backgroundColor: "#FFFFFF",
              boxShadow: "4px 4px 3px rgba(0, 0, 0, 0.3)",
              padding: "10px 20px",
              border: "1px solid #8E8E8E",
              cursor: "pointer",
            }}
            onClick={() => handleForm()}
          >
            stekker erin!
          </button>
        )}
        <p
          style={{
            fontSize: "24px",
            fontWeight: 300,
            color: "black",
          }}
        >
          of
        </p>
        <Link to="/overview">
          <p
            style={{
              fontSize: "32px",
              fontWeight: 300,
              color: "black",
              textDecorationLine: "underline",
            }}
          >
            bekijk je overzicht van gisteren
          </p>
        </Link>
        <button
          style={{
            position: "absolute",
            left: "20px",
            top: "20px",
            background: "none",
            border: "none",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            margin: 0,
            fontWeight: 300,
            cursor: "pointer",
          }}
          onClick={signOut}
        >
          <MdOutlineLogout />
          uitloggen
        </button>
      </div>
    </>
  );
};

export default Home;
