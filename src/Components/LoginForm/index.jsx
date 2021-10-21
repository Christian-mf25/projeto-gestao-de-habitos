import logo from "../../assets/images/logo-select1-negativa.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Container, DivColor } from "./style";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Api from "../../Services/API";
import * as yup from "yup";
import {
  PrimaryButton,
  SecondaryButton,
  Section,
  Input,
  IMG,
} from "../Styled/style";

const LoginForm = () => {
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
    password: yup.string().required("Required field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    Api.post("/sessions/", data)
      .then((response) => {
        localStorage.clear();
        toast.success("Welcome to Productive +");
        localStorage.setItem(
          "@Productive:token",
          JSON.stringify(response.data.access)
        );
        sendTo("/dashboard");
      })
      .catch((_) => toast.error("Invalid email or password"));
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
            <p className="forgot-password">forgot password?</p>

            <PrimaryButton type="submit" variant="contained" size="medium">
              Login
            </PrimaryButton>
            <p>don't have an account?</p>

            <SecondaryButton
              variant="contained"
              size="medium"
              onClick={() => sendTo("/register")}
            >
              Register
            </SecondaryButton>
          </Form>
        </Container>
      </DivColor>
    </Section>
  );
};

export default LoginForm;
