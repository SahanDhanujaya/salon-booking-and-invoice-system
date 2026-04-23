import HomePageHeader from "@/components/headers/HomePageHeader";
import HomePic from "@/public/home/home.png";

export default function Home() {
  return (
    <div className="h-full w-full z-999">
      <HomePageHeader />
      <div className="flex items-center justify-center gap-1 py-20 px-40 bg-black/50 ">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Welcome to Saloon Booking and Invoice System
          </h1>
          <p className="text-lg text-gray-300">
            Effortlessly manage your salon appointments and invoices with our
            intuitive system.
          </p>
        </div>

        <div>
          <img src={HomePic.src} alt="Home" className="w-full max-w-2xl rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}
