import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="py-8 text-center">
      <h1 className="text-2xl mb-4">About Me, The Food Man</h1>
      <br />
      <Image
        src="/chef.jpg"
        alt="Chef pic"
        width={900}
        height={533}
        className="m-auto"
      />
      <div className="py-8 text-center px-16">
        <h1 className="text-xl font-medium">I am Who I Am!</h1>
        <h1 className="italic text-[16px] text-gray-900 my-2">
          With Passion For Real, Good Food
        </h1>
        <p className="text-gray-800 mt-4 mb-14">
          Just me, myself and I, exploring the universe of unknownment. I have a
          heart of love and an interest of lorem ipsum and mauris neque quam
          blog. I want to share my world with you. Praesent tincidunt sed tellus
          ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
          congue gravida diam non fringilla. Praesent tincidunt sed tellus ut
          rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
          congue gravida diam non fringilla.
        </p>
      </div>
      <hr />
    </div>
  );
}
