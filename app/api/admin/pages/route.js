import { NextResponse } from 'next/server'
import { adminData, createId } from '../mock-data'

export async function GET() {
  return NextResponse.json({ pages: adminData.pages })
}

export async function POST(request) {
  const body = await request.json()

  if (!body?.title) {
    return NextResponse.json({ error: 'Page title is required' }, { status: 400 })
  }

  const page = {
    id: createId('page'),
    title: body.title,
    slug: body.slug || body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    status: body.status || 'Draft',
    updatedAt: new Date().toISOString(),
  }

  adminData.pages.unshift(page)
  return NextResponse.json({ page }, { status: 201 })
}

export async function PUT(request) {
  const body = await request.json()
  const item = adminData.pages.find((entry) => entry.id === body.id)

  if (!item) {
    return NextResponse.json({ error: 'Page not found' }, { status: 404 })
  }

  Object.assign(item, body)
  return NextResponse.json({ page: item })
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'Page id is required' }, { status: 400 })
  }

  adminData.pages = adminData.pages.filter((entry) => entry.id !== id)
  return NextResponse.json({ success: true })
}
