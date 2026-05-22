import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/authSlice";

export default function RegisterPage() {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    try {
      const res = await fetch(
        "https://connections-api.herokuapp.com/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name.value,
            email: form.email.value,
            password: form.password.value,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Register error");
      }

      const data = await res.json();

      dispatch(setCredentials(data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" />
      <input name="email" />
      <input name="password" type="password" />
      <button>Register</button>
    </form>
  );
}