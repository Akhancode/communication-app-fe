'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <>
    <div>
      HOME PAGE
    </div>
    <button type="button" onClick={() => router.push('/')}>
      initial page
    </button>
    </>
  )
}