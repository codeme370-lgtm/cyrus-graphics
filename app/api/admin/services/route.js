import { NextResponse } from 'next/server'
import { adminData, createId } from '../mock-data'

export async function GET() {
  return NextResponse.json({ services: adminData.services })
}

export async function POST(request) {
  const body = await request.json()

  if (!body?.title) {
    return NextResponse.json({ error: 'Service title is required' }, { status: 400 })
  }

  const service = {
    id: createId('service'),
    title: body.title,
    description: body.description || '',
    price: Number(body.price || 0),
    status: body.status || 'Active',
  }

  adminData.services.unshift(service)
  return NextResponse.json({ service }, { status: 201 })
}

export async function PUT(request) {
  const body = await request.json()
  const item = adminData.services.find((entry) => entry.id === body.id)

  if (!item) {
    return NextResponse.json({ error: 'Service not found' }, { status: 404 })
  }

  Object.assign(item, body)
  return NextResponse.json({ service: item })
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'Service id is required' }, { status: 400 })
  }

  adminData.services = adminData.services.filter((entry) => entry.id !== id)
  return NextResponse.json({ success: true })
}
