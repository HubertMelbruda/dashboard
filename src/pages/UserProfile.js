import UserCard from "../components/userProfile/UserCard";
import UserForm from "../components/userProfile/UserForm";

const UserProfile = () => {
  return (
    <div className="page-container">
      <div className="row">
        <UserForm />
        <UserCard />
      </div>
    </div>
  );
};

export default UserProfile;


