import { NextResponse } from 'next/server'
import { adminData, createId } from '../mock-data'

export async function GET() {
  return NextResponse.json({ subscribers: adminData.newsletterSubscribers })
}

export async function POST(request) {
  const body = await request.json()

  if (!body?.email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  const subscriber = {
    id: createId('sub'),
    email: body.email,
    status: body.status || 'Subscribed',
    createdAt: new Date().toISOString(),
  }

  adminData.newsletterSubscribers.unshift(subscriber)
  return NextResponse.json({ subscriber }, { status: 201 })
}

export async function PUT(request) {
  const body = await request.json()
  const item = adminData.newsletterSubscribers.find((entry) => entry.id === body.id)

  if (!item) {
    return NextResponse.json({ error: 'Subscriber not found' }, { status: 404 })
  }

  Object.assign(item, body)
  return NextResponse.json({ subscriber: item })
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'Subscriber id is required' }, { status: 400 })
  }

  adminData.newsletterSubscribers = adminData.newsletterSubscribers.filter((entry) => entry.id !== id)
  return NextResponse.json({ success: true })
}
