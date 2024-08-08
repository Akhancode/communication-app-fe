
import Image from "next/image";
import { APP_NAME } from "../constants/constants/constant";

export default function Home() {
  return (
    <main className="bg-gray-900">
      <div className="flex h-screen w-full bg-white dark:bg-gray-900 justify-center items-center text-blue-600">
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
    {APP_NAME}
</span>
      </button>
      </div>
    </main>
  );
}
