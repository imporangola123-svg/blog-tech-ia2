import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  const { slug } = params

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()


  if (error) return NextResponse.json({ error }, { status: 404 })

  await supabase
    .from('posts')
    .update({ views: data.views + 1 })
    .eq('slug', slug)

  return NextResponse.json(data)
}
