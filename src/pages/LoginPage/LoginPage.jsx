import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/authSlice";

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const res = await fetch(
      "https://connections-api.herokuapp.com/users/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email.value,
          password: form.password.value,
        }),
      }
    );

    const data = await res.json();
    dispatch(setCredentials(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" />
      <input name="password" type="password" />
      <button>Login</button>
    </form>
  );
}