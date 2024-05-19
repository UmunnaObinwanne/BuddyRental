import { NavLink, useSearchParams } from "react-router-dom";
import FakeServer from "../FakeServer";
import FriendCard from "../friendlist-component";
import "./FriendListingPage.styles.css";

const friends = FakeServer;

function FriendList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const onlineFilter = searchParams.get("online"); //you get the object key from the api

  function handleFilterChange(key, value) {
    setSearchParams((prevParam) => {
      if (value === null) {
        prevParam.delete(key);
      } else {
        prevParam.set(key, value);
      }
      return prevParam;
    });
  }

  const displayedFriends = onlineFilter
    ? friends.filter((friend) => friend.online === true)
    : friends;

  return (
    <div className="friend-list">
      <div className="filter-links">
        <p>filter by online</p>
        <button
          onClick={
            () =>
              handleFilterChange(
                "online",
                true
              ) /* you use the two value pairs to get your selection*/
          }
        >
          online
        </button>
        {onlineFilter ? (
          <button
            onClick={
              () =>
                handleFilterChange(
                  "online",
                  null
                ) /* you use the two value pairs to get your selection*/
            }
          >
            Clear
          </button>
        ) : null}
      </div>
      {displayedFriends.map((friend) => (
        <FriendCard key={friend.id} friend={friend} />
      ))}
    </div>
  );
}

export default FriendList;
