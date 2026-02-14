import Image from "next/image";
import Link from "next/link";

interface ShowcaseBannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  imageSrc: string;
}

const SectionData = () => {
  const data: ShowcaseBannerProps = {
    title: "Sony Showcase",
    description: "Exclusive Picks from the World of Sony",
    buttonText: "Shop Now",
    buttonHref: "/products/sony",
    imageSrc: "/airbods.png",
  };
  return (
    <section className="w-48 h-55 bg-[#cae9ff] rounded-2xl p-6 md:p-10 flex-6 m-5">
      <div className="flex flex-col md:flex-row items-center justify-between ">
        {/* Left Content */}
        <div className="max-w-md space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            {data.title}
          </h2>

          <p className="text-gray-600 text-sm md:text-base">
            {data.description}
          </p>

          <Link
            href={data.buttonHref}
            className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-medium px-5 py-2.5 rounded-lg"
          >
            {data.buttonText}
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative w-50 h-40 md:w-80 md:h-35">
          <Image
            src={data.imageSrc}
            alt={data.title}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default function ShowcaseBanner() {
  return (
    <div className="flex mx-20 px-3">
      {[1, 2].map((el) => {
        return <SectionData key={el} />;
      })}
    </div>
  );
}
