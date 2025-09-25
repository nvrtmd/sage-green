import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const posts = getAllPosts();
  return (
    <div className='space-y-8'>
      {posts.map((post) => (
        <article
          key={post.slug}
          className='p-4 rounded-lg border hover:shadow-lg'
        >
          <Link href={`/blog/${post.slug}`}>
            <h2 className='text-2xl font-bold text-blue-600 hover:underline'>
              {post.title}
            </h2>
            <p className='text-gray-500 text-sm mt-1'>
              {new Date(post.date).toLocaleDateString()}
            </p>
            <p className='mt-2 text-gray-700'>{post.summary}</p>
          </Link>
        </article>
      ))}
    </div>
  );
}
