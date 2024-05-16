import FakeServer from "../FakeServer";
import FriendCard from "../friendlist-component";
import "./FriendListingPage.styles.css";

function FriendList() {
  const friends = FakeServer;

  return (
    <div className="friend-list">
      {friends.map((friend) => (
        <FriendCard key={friend.id} friend={friend} />
      ))}
    </div>
  );
}

export default FriendList;
