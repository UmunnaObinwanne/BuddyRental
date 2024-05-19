import { useLocation } from "react-router-dom";

function SignUp() {
  const location = useLocation();
  console.log(location);

  const isLocation = location.state.message;
  console.log(isLocation);
  return <>{location ? <h3>{isLocation}</h3> : null}</>;
}

export default SignUp;
