"use client";

import { useRouter } from "next/navigation";
import { useLoader } from "@/app/provider/LoaderContext";

const useNavigateWithLoader = () => {
  const router = useRouter();
  const { startLoading } = useLoader();

  const navigate = (path: string) => {
    startLoading();
    router.push(path);
  };

  return { navigate };
};

export default useNavigateWithLoader;