import { NextResponse } from 'next/server'
import { adminData } from '../mock-data'

export async function GET() {
  return NextResponse.json({ reviews: adminData.reviews })
}

export async function PUT(request) {
  const body = await request.json()
  const item = adminData.reviews.find((entry) => entry.id === body.id)

  if (!item) {
    return NextResponse.json({ error: 'Review not found' }, { status: 404 })
  }

  Object.assign(item, body)
  return NextResponse.json({ review: item })
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'Review id is required' }, { status: 400 })
  }

  adminData.reviews = adminData.reviews.filter((entry) => entry.id !== id)
  return NextResponse.json({ success: true })
}
