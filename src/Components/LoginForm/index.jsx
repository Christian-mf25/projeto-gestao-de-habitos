import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Api from "../../Services/API";
import * as yup from "yup";

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

	const sendToRegister = () =>{
		history.push("/register");
	}

  const handleForm = (data) => {
    Api
      .post("/sessions/", data)
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

			<p>don't have an account?</p>
			
			<button onClick={sendToRegister}>
				Register
			</button>
    </section>
  );
};

export default LoginForm;
