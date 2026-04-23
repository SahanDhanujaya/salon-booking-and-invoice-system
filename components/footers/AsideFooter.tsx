import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const AsideFooter = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Logged out successfully!");
    }, 2000);
    router.push("/auth/signin");
  };


  return (
    <>
    {loading && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-3 rounded-xl bg-black px-6 py-5 shadow-xl">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
            <p className="text-sm font-medium text-gray-400">Logging out...</p>
          </div>
        </div>
      )}
    <footer>
      <div className="absolute bottom-0 left-0 w-full border-t border-gray-200 p-4">
        <button
          type="button"
          onClick={(e) => handleLogout(e)}
          className="bg-red-300 hover:bg-red-400 text-white text-md py-1 px-2 rounded flex items-center gap-2"
        >
          <span>Logout</span>
          <LogOutIcon className="h-4 w-4" />
        </button>
      </div>
    </footer>
    </>
    
  );
};

export default AsideFooter;
