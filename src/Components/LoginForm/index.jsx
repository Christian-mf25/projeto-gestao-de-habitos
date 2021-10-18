import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import axios from "axios";

const LoginForm = () => {
  const history = useHistory();

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
    axios
      .post("https://kenzie-habits.herokuapp.com/sessions/", data)
      .then((response) => {
        localStorage.clear();
        toast.success("Welcome to Productive +");
        localStorage.setItem(
          "@Productive:token",
          JSON.stringify(response.data.access)
        );
        history.push("/dashboard");
      })
      .catch((_) => toast.error("Invalid email or password "));
  };

  return (
    <section>
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <input type="text" placeholder="Username" {...register("username")} />
          <p>{errors.username?.message}</p>
        </div>

        <div>
          <input type="text" placeholder="Password" {...register("password")} />
          <p>{errors.password?.message}</p>
        </div>

        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default LoginForm;
