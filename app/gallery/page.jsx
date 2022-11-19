import Image from 'next/image';
import supabase from '../../utils/supabaseClient';

async function getData() {
  const { data } = await supabase.from('images').select('*');

  return { data };
}
export default async function Gallery() {
  const { data } = await getData();
  return (
    <div className="max-w-2xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg-px-8">
      <h2 className="mb-8 text-2xl font-semibold">Gallery - server</h2>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {data?.map((image) => {
          return (
            <BlurImage
              key={image.id}
              imageSrc={image.imageSrc}
              href={image.href}
              name={image.name}
              username={image.username}
            />
          );
        })}
      </div>
    </div>
  );
}

function BlurImage({ imageSrc, name, username, href }) {
  return (
    <a href={href} className="group">
      <div className="w-full overflow-hidden bg-gray-200 relative rounded-lg aspect-square xl:aspect-[8/7]">
        <Image
          src={imageSrc}
          alt="images"
          className="object-cover duration-700 ease-in-out scale-100 group-hover:opacity-75 grayscale-0 blur-0"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority="true"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{username}</p>
    </a>
  );
}
