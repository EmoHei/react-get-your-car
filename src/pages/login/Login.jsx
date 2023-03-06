import React, { useState } from "react";
import { Button, Card, Container, FloatingLabel, Form } from "react-bootstrap";
import lock from "../../assets/padlock.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import classes from "./Login.module.css";
import { useNavigate } from "react-router";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const navigate = useNavigate();

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onLogin(e) {
    e.preventDefault();

    try {
    } catch (error) {}
  }
  return (
    <Container className={classes.containerLoginForm}>
      <Card className={classes.containerImg} style={{background:'transparent',border:'none'}}>
        <img src={lock} alt="lock" />
      </Card>
      <Card className={classes.containerForm} style={{ background: 'transparent', border: 'none' }}>
        <Form> 
       
          <Form.Group>

            {/* Email */}
            <FloatingLabel label="Email address" className="mb-3">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                id="email"
                className="form-input"
                value={email}
                required
                onChange={onChange}
              />

              {/* Password */}
            </FloatingLabel>
            <div className={classes.passwordContainer}>
              <FloatingLabel label="Password">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="form-input"
                  id='password'
                  value={password}
                  required
                  onChange={onChange}
                ></Form.Control>
              </FloatingLabel>
              {showPassword ? (
                <AiFillEyeInvisible
                  className={classes.passwordEye}
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                  <AiFillEye className={classes.passwordEye}
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <Button variant="primary" type="submit" className={classes.submitBtn}>
             Login
            </Button>
            <div>

            </div>
          </Form.Group>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
