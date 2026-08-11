import { NextResponse } from 'next/server'
import { adminData, createId } from '../mock-data'

export async function GET() {
  return NextResponse.json({ categories: adminData.categories })
}

export async function POST(request) {
  const body = await request.json()
  const name = body?.name?.trim()

  if (!name) {
    return NextResponse.json({ error: 'Category name is required' }, { status: 400 })
  }

  const category = {
    id: createId('cat'),
    name,
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    status: body.status || 'Active',
    createdAt: new Date().toISOString(),
  }

  adminData.categories.unshift(category)
  return NextResponse.json({ category }, { status: 201 })
}

export async function PUT(request) {
  const body = await request.json()
  const target = adminData.categories.find((item) => item.id === body.id)

  if (!target) {
    return NextResponse.json({ error: 'Category not found' }, { status: 404 })
  }

  Object.assign(target, {
    ...target,
    ...body,
    slug: body.name ? body.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : target.slug,
  })

  return NextResponse.json({ category: target })
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'Category id is required' }, { status: 400 })
  }

  const removed = adminData.categories.filter((item) => item.id !== id)
  adminData.categories.splice(0, adminData.categories.length, ...removed)

  return NextResponse.json({ success: true })
}
