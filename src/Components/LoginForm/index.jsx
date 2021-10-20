import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Api from "../../Services/API";
import * as yup from "yup";

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
      .catch((_) => toast.error("Invalid email or password "));
  };

  return (
    <section>
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <TextField
            label="Username"
            color="secondary"
            size="small"
            variant="outlined"
            margin="dense"
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
        </div>

        <div>
          <TextField
            type="password"
            label="Password"
            color="secondary"
            size="small"
            variant="outlined"
            margin="dense"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </div>

        <Button
          type="submit"
          variant="contained"
          size="medium"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #A40FF2, #6D95FB, #0BD6F7)",
          }}
        >
          Login
        </Button>
      </form>

      <p>don't have an account?</p>

      <Button
        variant="contained"
        size="medium"
        style={{ backgroundColor: "#363153", color: "#9593a4" }}
        onClick={() => sendTo("/register")}
      >
        Register
      </Button>
    </section>
  );
};

export default LoginForm;
