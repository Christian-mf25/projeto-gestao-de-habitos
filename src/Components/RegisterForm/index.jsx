import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Api from "../../Services/API";
import * as yup from "yup";

const RegisterForm = () => {
  const history = useHistory();

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
    history.push("/login");
  };

  const handleForm = (data) => {
		const {username, email, password} = data
		const newData = {username, email, password}
    Api
      .post("/users/", newData)
      .then((_) => {
        toast.success("account created successfully ");
        return sendToLogin();
      })
      .catch((_) => toast.error("Try another e-mail"));
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <input type="text" placeholder="Username" {...register("username")} />
          <p>{errors.username?.message}</p>
        </div>

        <div>
          <input type="text" placeholder="Email" {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <input type="text" placeholder="Password" {...register("password")} />
          <p>{errors.password?.message}</p>
        </div>

        <div>
          <input
            type="text"
            placeholder="Confirm password"
            {...register("confirm_password")}
          />
          <p>{errors.confirm_password?.message}</p>
        </div>

        <button type="submit">Register</button>
      </form>

      <p>Already has an account?</p>

      <button onClick={sendToLogin}>Login</button>
    </>
  );
};

export default RegisterForm;
