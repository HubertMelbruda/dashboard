import background from "../../assets/img/user-background-01.jpg";
import avatar from "../../assets/img/default-avatar.png";

const UserCard = () => {
  return (
    <div className="column col-33 grow">
      <div className="card">
      <div className="card-img">
            <img src={background} alt="background" />
            <div className="avatar">
            <img src={avatar} alt="userAvatar" />
          </div>
          </div>
          
          <div className="card-body">
            <div className="user-data">
              <h2>Nick</h2>
              <h5>Name Surname</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                quia exercitationem eius nam repellat voluptatibus laudantium
                accusantium ex!
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default UserCard;
