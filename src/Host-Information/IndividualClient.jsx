import { Outlet, useParams } from "react-router-dom";
import clientsData from "./../ClientDataServer";
import IndividualClientCard from "./IndividualClientCard";
import PageDetailNav from "./PageDetailNav";

export default function IndividualClient() {
  const params = useParams();
  const id = parseInt(params.id);
  const client = clientsData.find((clientsData) => clientsData.id === id);

  return (
    <>
      {client ? (
        <IndividualClientCard client={client} />
      ) : (
        <div>User does not exist</div>
      )}
      <PageDetailNav />
      <Outlet />
    </>
  );
}
