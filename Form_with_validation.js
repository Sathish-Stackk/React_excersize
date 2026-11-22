function Signup() {
  const [form, setForm] = useState({ email: "", pass: "" });
  const [errors, setErrors] = useState({});

  const onChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    const err = {};
    if (!/\S+@\S+\.\S+/.test(form.email)) err.email = "Invalid email";
    if (form.pass.length < 6) err.pass = "Min 6 characters";
    setErrors(err);
    if (!Object.keys(err).length) console.log("Submit", form);
  };

  return (
    <form onSubmit={onSubmit}>
      <input name="email" value={form.email} onChange={onChange} />
      {errors.email && <p>{errors.email}</p>}
      <input name="pass" type="password" value={form.pass} onChange={onChange} />
      {errors.pass && <p>{errors.pass}</p>}
      <button>Sign up</button>
    </form>
  );
}
