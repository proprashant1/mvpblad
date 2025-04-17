import attorneys from '../data/attorneys';
import AttorneyCard from '../components/AttorneyCard';

export default function Alexandria() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Business Law Attorneys in Alexandria, VA</h1>
      {attorneys.map((attorney, index) => (
        <AttorneyCard key={index} attorney={attorney} />
      ))}
    </div>
  );
}