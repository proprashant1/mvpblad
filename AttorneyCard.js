export default function AttorneyCard({ attorney }) {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <h2 className="text-xl font-bold">{attorney.name}</h2>
      <p>{attorney.category}</p>
      <p>{attorney.address}, {attorney.state}</p>
      <p>Phone: {attorney.phone}</p>
      {attorney.website && <a href={attorney.website} target="_blank" className="text-blue-600">Visit Website</a>}
    </div>
  );
}