import { NextResponse } from 'next/server'
import { adminData, createId } from '../mock-data'

export async function GET() {
  return NextResponse.json({ banners: adminData.banners })
}

export async function POST(request) {
  const body = await request.json()

  if (!body?.title) {
    return NextResponse.json({ error: 'Banner title is required' }, { status: 400 })
  }

  const banner = {
    id: createId('banner'),
    title: body.title,
    location: body.location || 'Homepage',
    status: body.status || 'Draft',
    startDate: body.startDate || new Date().toISOString().slice(0, 10),
    endDate: body.endDate || new Date(Date.now() + 86400000).toISOString().slice(0, 10),
  }

  adminData.banners.unshift(banner)
  return NextResponse.json({ banner }, { status: 201 })
}

export async function PUT(request) {
  const body = await request.json()
  const item = adminData.banners.find((entry) => entry.id === body.id)

  if (!item) {
    return NextResponse.json({ error: 'Banner not found' }, { status: 404 })
  }

  Object.assign(item, body)
  return NextResponse.json({ banner: item })
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'Banner id is required' }, { status: 400 })
  }

  adminData.banners = adminData.banners.filter((entry) => entry.id !== id)
  return NextResponse.json({ success: true })
}
