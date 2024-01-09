import { useState } from "react";

function Form() {
  //to store the state of the fields of the form
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//this is the action after subbmition of form i.e., loging the details in the console
  const handleSubmit = (e) => {
    e.preventDefault(); //to stop the page from refreshing after submission
    console.log(username,"\n",email,"\n",password);
  };

  return (
    <div className="form py-10 w-fit">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col py-10 gap-8 bg-slate-300 p-5 rounded-xl"
      >
        <div className="field">
          <label htmlFor="username">User Name :</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="text-slate-200 py-2 px-3 rounded-2xl outline-none bg-slate-800"
        />
      </form>
    </div>
  );
}

export default Form;
