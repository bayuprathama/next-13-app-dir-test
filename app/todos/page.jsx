import clsx from 'clsx';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
export default async function Todos() {
  const data = await getData();
  return (
    <div className="max-w-xl">
      <h2 className="mb-8 text-2xl font-semibold">Todos - server</h2>
      {data?.slice(0, 5).map((profile) => {
        return (
          <div
            key={profile.id}
            className="p-4 mb-6 border border-gray-200 rounded-lg shadow"
          >
            <p className="font-medium capitalize">{profile.title}</p>
            <p
              className={clsx(
                profile.completed ? 'text-green-500' : 'text-red-500'
              )}
            >
              Status: {profile.completed ? 'Task Completed' : 'Task Uncomplete'}
            </p>
          </div>
        );
      })}
    </div>
  );
}
