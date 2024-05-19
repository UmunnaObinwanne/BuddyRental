import ClientCard from "./ClientCard";
import clientsData from "../ClientDataServer";

function HostClients() {
  return (
    <>
      <div>
        <h2>Your Clients</h2>
        <div className="container">
          <div className="row">
            <div className="col-12 mb-3 mb-lg-5">
              <div className="overflow-hidden card table-nowrap table-card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">New customers</h5>
                  <a href="#!" className="btn btn-light btn-sm">
                    View All
                  </a>
                </div>
                <div className="table-responsive">
                  <table className="table mb-0">
                    <thead className="small text-uppercase bg-body text-muted">
                      <tr>
                        <th>Name</th>
                        <th>Price Paid</th>
                        <th>Country</th>
                        <th>Payment method</th>
                        <th>Created Date</th>
                        <th className="text-end">Action</th>
                      </tr>
                    </thead>
                    {clientsData.map((client, index) => (
                      <ClientCard client={client} key={index} />
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HostClients;
