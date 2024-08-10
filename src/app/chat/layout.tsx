"use client"
import { useRouter } from "next/navigation";

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    const router = useRouter()
    const goBack = () => {
      router.back(); // Goes to the previous page
    };
    return (
      <section className="flex flex-col items-start  h-screen ">
        <nav className=" min-h-14 w-full shadow-md flex items-center justify-between px-3">
          <button onClick={goBack} className=" align-middle" >
          Back
          </button>
          <button onClick={goBack} className=" align-middle" >
          call
          </button>
          
        </nav>
   
        {children}
      </section>
    )
  }