import { NextResponse } from 'next/server'
import { adminData, createId } from '../mock-data'

export async function GET() {
  return NextResponse.json({ posts: adminData.blogPosts })
}

export async function POST(request) {
  const body = await request.json()

  if (!body?.title) {
    return NextResponse.json({ error: 'Blog title is required' }, { status: 400 })
  }

  const post = {
    id: createId('blog'),
    title: body.title,
    category: body.category || 'General',
    status: body.status || 'Draft',
    date: body.date || new Date().toISOString().slice(0, 10),
    views: Number(body.views || 0),
  }

  adminData.blogPosts.unshift(post)
  return NextResponse.json({ post }, { status: 201 })
}

export async function PUT(request) {
  const body = await request.json()
  const item = adminData.blogPosts.find((entry) => entry.id === body.id)

  if (!item) {
    return NextResponse.json({ error: 'Blog post not found' }, { status: 404 })
  }

  Object.assign(item, body)
  return NextResponse.json({ post: item })
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'Blog post id is required' }, { status: 400 })
  }

  adminData.blogPosts = adminData.blogPosts.filter((entry) => entry.id !== id)
  return NextResponse.json({ success: true })
}
