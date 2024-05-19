import { useParams } from "react-router-dom";
import FakeServer from "../FakeServer";
import ProfileCard from "./ProfileCard";

function Profile() {
  const params = useParams();
  const id = parseInt(params.id);
  const user = FakeServer.find((friendsData) => friendsData.id === id);

  return (
    <>{user ? <ProfileCard user={user} /> : <div>User does not exist</div>}</>
  );
}

export default Profile;
