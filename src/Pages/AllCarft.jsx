import { Link, useLoaderData } from "react-router-dom";

const AllCarft = () => {
  const allData = useLoaderData();

  return (
    <div className="container mx-auto p-4 mb-28">
      <h1 className="text-4xl mt-6 font-extrabold">All Art & Carft here :</h1>
      <div className=" overflow-auto">
        <table className="w-full table-auto mt-4">
          <thead className="bg-base-300 border-2">
            <tr>
              <th className="p-3 font-semibold tracking-wide text-left">
                Name
              </th>
              <th className="p-3 font-semibold tracking-wide text-left">
                Photo URL
              </th>
              <th className="p-3 font-semibold tracking-wide text-left">
                Price
              </th>
              <th className="p-3 font-semibold tracking-wide text-right">
                View Details
              </th>
            </tr>
          </thead>
          {allData.map((item) => (
            <tbody key={item._id} className="divide-y divide-gray-100">
              <tr className=" border py-6 px-3 table-row">
                <td className="p-3 whitespace-nowrap">{item.item_name}</td>
                <td className="p-3 whitespace-nowrap">
                  <a
                    href={item.photo}
                    target="blank"
                    className="hover:text-blue-700 "
                  >
                    {item.photo}
                  </a>
                </td>
                <td className="p-3 whitespace-nowrap">$ {item.price}</td>
                <td className="p-3 whitespace-nowrap text-right">
                  <Link to={`/details/${item._id}`}>
                    <button className="btn">View Details</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllCarft;
