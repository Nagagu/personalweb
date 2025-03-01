import React from "react";
import { Link } from "react-router-dom";
import { useAnimation, motion } from "framer-motion";
import MainLogo from "../components/Icons/MainLogo";

//import logo from "../assets/LogoNat.svg";

export const MainScreen = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 4,
      },
    },
  };

  return (
    <>
      <div className="mainsection">
        <div className="neonLogo">
          {/* <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="413.000000pt"
            height="416.000000pt"
            viewBox="0 0 413.000000 416.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,416.000000) scale(0.100000,-0.100000)"
              fill="#ffffff"
              stroke="none"
            >
              <path
                d="M2160 3720 c-17 -17 -20 -33 -20 -126 0 -121 8 -144 51 -144 42 0 51
                32 47 158 -3 89 -6 106 -22 118 -26 18 -32 18 -56 -6z"
              />
              <path
                d="M1792 3583 c-25 -10 -33 -41 -18 -70 27 -51 131 -145 161 -145 70 0
                65 56 -11 134 -49 50 -103 91 -116 87 -2 0 -9 -3 -16 -6z"
              />
              <path
                d="M2477 3518 c-38 -40 -73 -83 -78 -96 -13 -34 5 -62 40 -62 41 0 161
                133 161 178 0 29 -21 52 -47 52 -4 0 -39 -33 -76 -72z"
              />
              <path
                d="M2160 3340 c-178 -33 -245 -259 -113 -381 46 -43 87 -59 153 -59 130
                0 220 90 220 220 0 142 -122 246 -260 220z"
              />
              <path
                d="M3200 3120 l-22 -22 7 -684 7 -684 -484 0 -485 0 -539 623 c-610 704
                -631 727 -654 727 -9 0 -24 -8 -33 -18 -16 -17 -17 -121 -17 -1295 l0 -1277
                -135 0 c-122 0 -137 -2 -155 -20 -24 -24 -24 -30 -6 -56 13 -17 30 -19 183
                -22 136 -3 172 0 188 12 20 14 20 28 23 620 l2 606 549 0 548 0 514 -594 c283
                -326 523 -598 534 -604 32 -15 63 2 70 40 3 18 1 568 -4 1223 -6 655 -11 1225
                -11 1268 l0 77 109 0 c60 0 121 4 134 9 29 11 40 44 22 68 -12 16 -33 18 -168
                21 -149 3 -157 2 -177 -18z m-1660 -755 c233 -269 453 -523 488 -562 l64 -73
                -506 0 -506 0 0 582 c0 568 0 582 19 563 10 -11 209 -240 441 -510z m1655
                -1241 c4 -278 5 -507 3 -509 -3 -3 -159 174 -349 393 -189 218 -388 448 -442
                509 l-98 113 439 0 439 0 8 -506z"
              />
            </g>
          </svg> */}
          <MainLogo />
        </div>

        <div>
          <motion.div initial="hidden" animate="show" variants={container}>
            <div className="name">
              Natalia Garrido
              <p>Web Developer - Creative designer</p>
            </div>
            <div className="buttons-main ">
              <button>
                <Link className="nav-item nav-link" to="/personalweb/about">
                  About
                </Link>
              </button>
              <button>
                <Link className="nav-item nav-link" to="/personalweb/projects">
                  Projects
                </Link>
              </button>
              <button>
                <Link className="nav-item nav-link" to="/personalweb/contact">
                  Contact
                </Link>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
