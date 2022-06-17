import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { RiGlobeLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, loginFailure } from "../redux/action";
import style from "./login.module.css";

import { FaRegEye } from "react-icons/fa";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setformData] = useState({});
  const [formData1, setformData1] = useState({});
  const [passtype, setpasstype] = useState(false);
  const isAuth = useSelector((state) => state.isAuth);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const length = JSON.parse(localStorage.getItem("cartData")) || [];
    setCart(length);
  }, [JSON.parse(localStorage.getItem("cartData"))]);

  const gotohome = () => {
    navigate("/");
  };
  const handleChange = (e) => {
    const inputName = e.target.name;
    setformData({ ...formData, [inputName]: e.target.value });
  };
  const handleLogout = () => {
    dispatch(loginFailure());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.first === undefined ||
      formData.last === undefined ||
      formData.email === undefined ||
      formData.password === undefined
    ) {
      alert("Fill all Fields");
    } else {
      localStorage.setItem("login", JSON.stringify(formData));
    }
  };

  const handleChange1 = (e) => {
    const inputName1 = e.target.name;
    setformData1({ ...formData1, [inputName1]: e.target.value });
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    let data1 = JSON.parse(localStorage.getItem("login"));
    if (
      data1.email === formData1.email &&
      data1.password === formData1.password1
    ) {
      alert("Sign up Successful");
      dispatch(loginSuccess("4579438"));
      navigate("/cart");
    } else {
      alert("Login Fail");
    }
  };
  return (
    <>
      <div id="nav-main-container">
        <div id="nav-red-div">
          <p>this weekend only​</p>
          <p>UP TO 30% OFF SUMMER ENTERTAINING ESSENTIALS </p>
          <p>shop</p>
          <p>details</p>
        </div>

        {/* hhhhhhhh */}
        {/* Sign-In/sign-up part */}

        <div
          className="d-flex justify-content-end align-items-center py-1"
          style={{ background: "#f7f6f2" }}
        >
          <div className={`mx-3 ${styles.cont}`}>
            <RiGlobeLine fontSize="24px" color="#2e80a1" />{" "}
            <span className={styles.spans}> English ($) </span>{" "}
            <MdOutlineKeyboardArrowDown color="#2e80a1" />
          </div>
          <div
            className="modal"
            id="exampleModalToggle"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel"
          >
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <p className="text-center fs-2 mb-auto">Sign Up</p>
                <hr />
                <p className="text-center text-sm-start-center px-4 mt-auto">
                  Sign in so you can save items to your wishlists, track your
                  orders, and check out faster!
                </p>
                <div className="modal-body">
                  <div className={style.style2}>
                    <form className={style.form} onSubmit={handleSubmit}>
                      <p>FIRST NAME</p>
                      <input
                        required
                        onChange={handleChange}
                        name="first"
                        type="text"
                        className={style.style3}
                        style={{ textTransform: "capitalize" }}
                      />
                      <p>LAST NAME</p>
                      <input
                        required
                        onChange={handleChange}
                        name="last"
                        type="text"
                        className={style.style3}
                        style={{ textTransform: "capitalize" }}
                      />
                      <p>EMAIL</p>
                      <input
                        required
                        onChange={handleChange}
                        name="email"
                        type="email"
                        className={style.style3}
                      />
                      <p>PASSWORD</p>
                      <input
                        onChange={handleChange}
                        name="password"
                        type={!passtype ? "password" : "text"}
                        className={style.style3}
                      />
                      <FaRegEye
                        style={{ marginLeft: "-30px", cursor: "pointer" }}
                        onClick={() => {
                          setpasstype(!passtype);
                        }}
                      ></FaRegEye>
                      <p></p>
                      <input
                        required
                        type="submit"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                        value="Create"
                        className={style.style4}
                      />
                    </form>
                  </div>
                </div>
                <div className="modal-footer">
                  <p className="text-center mx-auto">
                    If Already Have An Account Click Sign In.
                  </p>
                  <button
                    className="btn btn-secondary d-grid col-10 row-2 mx-auto"
                    data-bs-target="#exampleModalToggle2"
                    data-bs-toggle="modal"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* --------------------------------sign in------------------------------ */}

          <div
            className="modal"
            id="exampleModalToggle2"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel2"
          >
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <p className="text-center fs-1 mb-1">Sign In</p>
                <hr />
                <div className="modal-body">
                  <div className={style.style2}>
                    <form className={style.form} onSubmit={handleSubmit1}>
                      <p>EMAIL</p>
                      <input
                        required
                        onChange={handleChange1}
                        name="email"
                        type="email"
                        className={style.style3}
                      />
                      <p>PASSWORD</p>
                      <input
                        required
                        onChange={handleChange1}
                        name="password1"
                        type={!passtype ? "password" : "text"}
                        className={style.style3}
                      />
                      <FaRegEye
                        style={{ marginLeft: "-30px", cursor: "pointer" }}
                        onClick={() => {
                          setpasstype(!passtype);
                        }}
                      ></FaRegEye>

                      <p></p>
                      <input
                        data-bs-dismiss="modal"
                        onSubmit={handleSubmit1}
                        type="submit"
                        value="Sign In"
                        className={style.style4}
                      />
                    </form>
                  </div>
                </div>
                <div className="modal-footer">
                  <p className="text-center mx-auto">
                    If Don't Have An Account Click Create An Account.
                  </p>
                  <button
                    className="btn btn-secondary d-grid col-10 row-2 mx-auto"
                    data-bs-target="#exampleModalToggle"
                    data-bs-toggle="modal"
                  >
                    CREATE AN ACCOUNT
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* toggle work */}

          <div className={`me-5 ${styles.cont}`}>
            <AiOutlineUser fontSize="24px" color="#2e80a1" />{" "}
            {isAuth ? (
              <span onClick={handleLogout} className={styles.spans}>
                SignOut
              </span>
            ) : (
              <span
                role="button"
                href="#exampleModalToggle"
                data-bs-toggle="modal"
                className={styles.spans}
              >
                {" "}
                SignIn
              </span>
            )}
          </div>
        </div>

        {/* search area worki is in progresss */}

        {/* searcharea */}

        <div id="nav-search-area-main">
          <div id="nav-search-area-main1">
            <Link to="/Dresses">
              <div
                style={{
                  borderLeft: "1px solid #d3d3d3",
                  borderTop: "3px solid #167a92",
                }}
              >
                {" "}
                <a href="" style={{ padding: "0px 20px" }}>
                  <img
                    id="search-area-img"
                    src="https://images.ctfassets.net/5de70he6op10/53ZOE4rRqrxcvv0hg2eSLV/a849085e5f600c618132be2475017746/anthro-logo.svg"
                    alt=""
                  />
                </a>
              </div>
            </Link>
            <div
              style={{
                borderLeft: "1px solid #d3d3d3",
                borderRight: "1px solid #d3d3d3",
              }}
            >
              <a href="" style={{ padding: "0px 20px" }}>
                <img
                  id="search-area-img"
                  src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div id="nav-search-area-main2">
            <div id="a">
              {" "}
              <input
                type="text"
                placeholder="Search Anthropologie"
                style={{
                  fontSize: "14px",
                  outline: "none",
                  border: "1px solid #d3d3d3",
                  height: "35px",
                  width: "250px",
                  marginTop: "10px",
                  borderRadius: "5px",
                }}
              />
              <button
                type="submit"
                style={{
                  background: "white",
                  border: "1px solid #d3d3d3",
                  height: "35px",
                  borderRadius: "5px",
                }}
              >
                <AiOutlineSearch color="#77a0b2" fontSize="23px" />
              </button>
            </div>
            <div id="search-bag">
              <Link to="/Cart">
                <BsHandbag color="#2e80a1" fontSize="23px" />
              </Link>

              <span className="translate-middle badge rounded-pill bg-danger" />
            </div>
          </div>
        </div>

        {/* list area */}
        <div id="nav-list-area">
          <ul className="lists">
            <li>
              <Link to="/New!"> New!</Link>
            </li>
            <li>
              <Link to="/Dresses"> Dresses</Link>
            </li>
            <li>
              <Link to="/Dresses"> Clothing</Link>
            </li>
            <li>
              <Link to="/Shoes"> Shoes</Link>
            </li>
            <li>
              <Link to="/Dresses"> Accessories</Link>
            </li>
            <li>
              <Link to=""> Gift & candles</Link>
            </li>

            <li>
              <Link to="/Furniture"> Home & Furniture</Link>
            </li>
            <li>
              <Link to=""> Beauty & Wellness</Link>
            </li>
            <li>
              <Link to=""> Garden & Outdoor</Link>
            </li>
            <li>
              <Link to="/Dresses"> Weddings</Link>
            </li>
            <li>
              <Link to="/Dresses"> Sale</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
