function Login() {

  const loginUser = () => {

    localStorage.setItem("isAuth", "true");

    alert("Logged in");

  };

  return (
    <>
      <h1>Login Page</h1>

      <button onClick={loginUser}>
        Login
      </button>

    </>
  );
}

export default Login;