import { Col, Row, Image, Button } from "antd";
import "./FormLogin.css";
import { useForm } from "react-hook-form";
import newSvg from "./../../Group_277.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetchAuth } from "../../store/auth/AuthSlicer";
import Cookies from "js-cookie";

export const Login = () => {
  const [loadings, setLoadings] = useState([]);
  const dispatch = useDispatch();
  const dataAPI = useSelector((state) => state.login);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  console.log(dataAPI);

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const {
    register,
    formState: { errors },
  } = useForm();

  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 1750);
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAuth({ email: data.email, password: data.password }));
    enterLoading(0);
    setTimeout(() => {
      if (Cookies.get("token")) {
        navigate("/dashboard");
      }
    }, 2000);
  };

  return (
    <>
      <div className="box">
        <Row className="row-main">
          <Col span={11} className="col-1">
            <Image
              preview={false}
              style={{ width: "39vw", height: "35vw" }}
              src={newSvg}
            />
          </Col>
          <Col span={13} className="col-2">
            <div className="title">
              <h1>Welcome Back!</h1>
            </div>
            <div className="form-input">
              <form>
                <div className="username">
                  <h3>Username</h3>
                </div>
                <input
                  {...register("userName", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z ]+$/i,
                  })}
                  name="email"
                  onChange={onChangeHandler}
                  placeholder="Email or Username"
                  type="text"
                />
                {errors?.userName?.type === "required" && (
                  <p>This field is required</p>
                )}
                {errors?.userName?.type === "maxLength" && (
                  <p>First name cannot exceed 20 characters</p>
                )}
                <div className="password">
                  <h3>Password</h3>
                </div>
                <input
                  {...register("passWord", {
                    required: true,
                    maxLength: 20,
                  })}
                  onChange={onChangeHandler}
                  placeholder="Enter your password"
                  type="password"
                  name="password"
                />
                {errors?.passWord?.type === "required" && (
                  <p>This field is required</p>
                )}
                {errors?.passWord?.type === "pattern" && (
                  <p>Alphabetical characters only</p>
                )}
                <div className="check-box">
                  <input
                    {...register("checkbox")}
                    type="checkbox"
                    id="checkbox"
                    value={true}
                  />
                  <span>Keep me signed in</span>
                </div>
                <div className="btn-submit" onClick={(e) => onClickHandler(e)}>
                  <Button
                    style={{ border: "none !important", background: "#04353d" }}
                    type="primary"
                    loading={loadings[0]}
                  >
                    SIGN IN
                  </Button>
                </div>
                <div className="forgot-password">
                  <span>
                    Forgot Password? <Link>Reset Password</Link>
                  </span>
                </div>
              </form>
            </div>
          </Col>
        </Row>
        {/* Login */}
      </div>
    </>
  );
};