const UserForm = () => {
  return (
    <div className="column col-66 grow">
      <div className="card">
        <div className="card-header">
          <p>Edit Profile</p>
        </div>
        <div className="card-body">
          <form>
            <div className="row">
              <div className="column grow">
                <label htmlFor="userName">User Name</label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  required
                  placeholder="Luck Skywalker"
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
                />
              </div>
            </div>

            <div className="row">
              <div className="column grow">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  required
                  placeholder="Tatooine"
                />
              </div>
              <div className="column grow">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  required
                  placeholder="Polis Massa"
                />
              </div>
              <div className="column grow">
                <label htmlFor="postCode">Post Code</label>
                <input
                  type="text"
                  name="postCode"
                  id="postCode"
                  required
                  placeholder="00-007"
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
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        <div className="card-footer">
          <p>Card Stats</p>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
