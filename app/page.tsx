import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Image className='border rounded-md' src="/logo.svg" alt="vyrl logo" width={72} height={16} />
    </div>
  );
}
