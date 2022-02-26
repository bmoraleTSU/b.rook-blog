import Link from 'next/link';
// import Image from 'next/image';
// bg-author-image

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="w-20 h-20 rounded-full block mx-auto mb-4 bg-author-image bg-cover bg-center">
        {/* <Image src="/../public/b-header.jpg" alt="Photo of the author" width={100} height={100} quality={90} /> */}
      </div>
      <p className="text-2xl dark:text-white text-center">
        <Link href="/" className="hover:">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
