
import { useRouter } from 'next/navigation';

export const redirectTo = (url: string) => {
    const router = useRouter();
    router.push(url);
  };

