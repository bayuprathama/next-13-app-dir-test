'use client';

import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import axios from 'axios';

// async function getData() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// }
export default function Todos() {
  const { isLoading, error, data, isFetching } = useQuery(['todos'], () =>
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.data)
  );
  // if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="max-w-xl">
      <h2 className="mb-8 text-2xl font-semibold">Todos - client</h2>
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
