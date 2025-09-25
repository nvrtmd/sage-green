import Link from 'next/link';

export default function Header() {
  return (
    <header className='py-8'>
      <div className='container mx-auto px-4'>
        <Link href='/' className='text-4xl font-bold hover:text-blue-500'>
          My Tech Blog
        </Link>
      </div>
    </header>
  );
}
