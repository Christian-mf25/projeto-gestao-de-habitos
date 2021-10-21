import logo from "../../assets/images/logo-select1-negativa.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Api from "../../Services/API";
import * as yup from "yup";
import { Section, Input, PrimaryButton, IMG, SecondaryButton } from "../Styled/style";
import { DivColor, Container, Form } from "./style";

const RegisterForm = () => {
  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("@Productive:token"));

  const sendTo = (path) => {
    history.push(path);
  };

  token && sendTo("/dashboard");

  const schema = yup.object().shape({
    username: yup
      .string()
      .max(15, "Maximum of 15 digits")
      .required("Required field"),
    email: yup.string().email("Invalid e-mail").required("Required field"),
    password: yup
      .string()
      .min(8, "Minimum of 8 digits")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character!"
      )
      .required("Required field"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must be equal"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const sendToLogin = () => {
    sendTo("/login");
  };

  const handleForm = (data) => {
    const { username, email, password } = data;
    const newData = { username, email, password };
    Api.post("/users/", newData)
      .then((_) => {
        toast.success("account created successfully ");
        return sendTo("/login");
      })
      .catch((_) => toast.error("Try another e-mail"));
  };

  return (
    <Section>
      <DivColor>
        <IMG src={logo} alt={logo} onClick={() => sendTo("/")} />
        <Container>
          <Form onSubmit={handleSubmit(handleForm)}>
            <div>
              <Input
                label="Username"
                color="primary"
                size="small"
                variant="outlined"
                margin="dense"
                {...register("username")}
                error={!!errors.username}
                helperText={errors.username?.message}
              />
            </div>

            <div>
              <Input
                color="primary"
                label="Email"
                size="small"
                variant="outlined"
                margin="dense"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </div>

            <div>
              <Input
                type="password"
                label="Password"
                size="small"
                variant="outlined"
                margin="dense"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </div>

            <div>
              <Input
                type="password"
                label="Confirm password"
                size="small"
                variant="outlined"
                margin="dense"
                {...register("confirm_password")}
                error={!!errors.confirm_password}
                helperText={errors.confirm_password?.message}
              />
            </div>

            <PrimaryButton type="submit" variant="contained" size="medium">
              Register
            </PrimaryButton>

            <p>Already has an account?</p>

            <SecondaryButton
              variant="contained"
              size="medium"
              onClick={() => sendTo("/login")}
            >
              Login
            </SecondaryButton>
          </Form>
        </Container>
      </DivColor>
    </Section>
  );
};

export default RegisterForm;
