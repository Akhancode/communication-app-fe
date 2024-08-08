'use client'
 
import FlatList from '@/components/specific/FlatList'
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 const users = ["1","2","3","4","5"]
  return (
    <>
    <div className='min-w-full  min-h-screen  bg-black' >
    <FlatList items={users} />
    </div>
    </>
  )
}