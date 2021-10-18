const RegisterForm = () => {
  return (
    <>
      <form action="">
        <input type="text" placeholder="Username" />

        <input type="text" placeholder="Email" />

        <input type="text" placeholder="Password" />

        <input type="text" placeholder="Confirm password" />

        <button type="submit">Register</button>

        <p>don't have an account?</p>

        <button>Login</button>
      </form>
    </>
  );
};

export default RegisterForm