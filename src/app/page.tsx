"use client";
import Image from "next/image";

import { APP_NAME } from "../lib/constants/constant";
import { redirectTo } from "@/lib/helpers/redirectTo";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/constants/routes";
import Button_1 from "@/components/common/Button";

export default function Home() {
  const router = useRouter();
  const handleClickButton = () => {
    router.push(ROUTES.HOME);
  };

  return (
    <div className='flex justify-center items-center min-w-full  min-h-screen bg-slate-800' >
      <Button_1 content={APP_NAME} onClick={handleClickButton} />
    </div>
  );
}
