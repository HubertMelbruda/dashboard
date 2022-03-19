import { useState } from "react";

const UserForm = () => {
  const [form, setForm] = useState({
    userName: "",
    emailAddress: "",
    firstName: "",
    lastName: "",
    address: "",
    password: "",
    passwordRep: "",
    aboutMe: "",
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);

    //   fetch("http://localhost:8000/users/", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(form),
    //   }).then(() => {});
    // };

    // npx json-server --watch data/db.json --port 8000

    fetch("public/db.json/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then(() => {});
  };

  const updateField = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="column col-66 grow">
      <div className="card">
        <div className="card-header">
          <p>Edit Profile</p>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="grow">
            <div className="row">
              <div className="column grow">
                <label htmlFor="userName">User Name</label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  required
                  placeholder="Luck Skywalker"
                  onChange={updateField}
                />
              </div>
              <div className="column grow">
                <label htmlFor="emailAddress">Email Address</label>
                <input
                  type="text"
                  name="emailAddress"
                  id="emailAddress"
                  required
                  placeholder="e.g. skywalker@gmail.com"
                  onChange={updateField}
                />
              </div>
            </div>
            <div className="row">
              <div className="column grow">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                  placeholder="Jon"
                  onChange={updateField}
                />
              </div>
              <div className="column grow">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastname"
                  required
                  placeholder="Doe"
                  onChange={updateField}
                />
              </div>
            </div>

            <div className="row">
              <div className="column grow">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  required
                  placeholder="Address..."
                  onChange={updateField}
                />
              </div>
            </div>

            <div className="row">
              <div className="column grow">
                <label htmlFor="city">Password</label>
                <input
                  type="text"
                  name="password"
                  id="city"
                  required
                  placeholder="******"
                  onChange={updateField}
                />
              </div>
              <div className="column grow">
                <label htmlFor="country">Password Rep.</label>
                <input
                  type="text"
                  name="passwordRep"
                  id="country"
                  required
                  placeholder="******"
                  onChange={updateField}
                />
              </div>
            </div>
            <div className="row">
              <div className="column grow">
                <label htmlFor="aboutMe">About Me</label>
                <textarea
                  name="aboutMe"
                  id="aboutMe"
                  cols="30"
                  rows="10"
                  placeholder="Write something about yourself..."
                  onChange={updateField}
                ></textarea>
              </div>
            </div>
            <div className="row">
              <button className="accept-btn">Accept</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
