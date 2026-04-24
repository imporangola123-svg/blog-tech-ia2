import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default async function Home() {
  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false })
    .limit(6)

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-8">

        <div className="bg-blue-600 text-white text-center py-16 px-8 rounded-2xl mb-12">
          <h1 className="text-4xl font-bold mb-4">TechIA Blog 🤖</h1>
          <p className="text-xl">Tudo sobre Tecnologia e Inteligência Artificial</p>
        </div>


        <h2 className="text-2xl font-bold text-gray-800 mb-6">Últimos Posts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts?.map(post => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <div className="bg-white rounded-xl p-6 shadow border border-gray-100 hover:shadow-md transition-shadow">
                <span className="text-

xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-800 mt-3 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm">{post.excerpt}</p>
                <div className="flex justify-between text-xs text-gray-400 mt-4">
                  <span>{new 

Date(post.created_at).toLocaleDateString('pt-BR')}</span>
                  <span>👁 {post.views} views</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}
