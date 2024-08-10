"use client";

import FlatList from "@/components/specific/FlatList";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const users = [{ userName: "amjad", userId: "@ak" }, { userName: "amjad", userId: "@ak" },{ userName: "amjad", userId: "@ak" },{ userName: "amjad", userId: "@ak" },{ userName: "amjad", userId: "@ak" }];
  return (
    <>
      <div className="min-w-full  min-h-screen  bg-black">
        <FlatList items={users} />
      </div>
    </>
  );
}
