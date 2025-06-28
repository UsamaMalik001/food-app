import Image from "next/image";

export default function Footer() {
  return (
    <main className="px-14">
      <div className="px-2 space-y-4 py-10 w-[33.33%] float-left">
        <h1 className="text-2xl">FOOTER</h1>
        <p className="text-sm">
          Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum,
          porta lectus vitae, ultricies congue gravida diam non fringilla.
        </p>
        <p className="text-sm">
          Powered by{" "}
          <span className="underline text-blue-600">Usama Malik</span>
        </p>
      </div>
      <div className="px-2 space-y-4 py-10 w-[33.33%] float-left">
        <h1 className="text-2xl">BLOG POSTS</h1>
        <div className="pb-4 px-2 border-b-[1px] border-solid flex space-x-4">
          <div>
            <Image src="/workshop.jpg" alt="Workshop" width={50} height={50} />
          </div>
          <div>
            <p className="text-lg font-light">Lorem</p>
            <p className="text-sm font-light">Sed mattis nunc</p>
          </div>
        </div>
        <div className="pb-4 px-2 flex space-x-4">
          <div>
            <Image src="/gondol.jpg" alt="Workshop" width={50} height={50} />
          </div>
          <div>
            <p className="text-lg font-light">Ipsum</p>
            <p className="text-sm font-light">Praes tinci sed</p>
          </div>
        </div>
      </div>
      <div className="px-2 space-y-4 py-10 w-[33.33%] float-left">
        <h1 className="text-2xl">POPULAR TAGS</h1>
        <div className="pb-4 px-2">
          <div className="space-x-1.5">
            <span className="bg-black text-white text-sm py-1 px-2">
              Travel
            </span>
            <span className="bg-[#616161] text-white text-xs py-0.5 px-1">
              New York
            </span>
            <span className="bg-[#616161] text-white text-xs py-0.5 px-1">
              Dinner
            </span>
            <span className="bg-[#616161] text-white text-xs py-0.5 px-1">
              Salmon
            </span>
            <span className="bg-[#616161] text-white text-xs py-0.5 px-1">
              France
            </span>
            <span className="bg-[#616161] text-white text-xs py-0.5 px-1">
              Drinks
            </span>
          </div>
          <div className="space-x-1.5 py-4">
            <span className="bg-[#616161] text-white text-xs py-0.5 px-1">
              Ideas
            </span>
            <span className="bg-[#616161] text-white text-xs py-0.5 px-1">
              Flavors
            </span>
            <span className="bg-[#616161] text-white text-xs py-0.5 px-1">
              Cuisine
            </span>
            <span className="bg-[#616161] text-white text-xs py-0.5 px-1">
              Chicken
            </span>
            <span className="bg-[#616161] text-white text-xs py-0.5 px-1">
              Dressing
            </span>
            <span className="bg-[#616161] text-white text-xs py-0.5 px-1">
              Fried
            </span>
            <span className="bg-[#616161] text-white text-xs py-0.5 px-1">
              Fish
            </span>
          </div>
          <div className="space-x-1.5">
            <span className="bg-[#616161] text-white text-xs py-0.5 px-1">
              Duck
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
