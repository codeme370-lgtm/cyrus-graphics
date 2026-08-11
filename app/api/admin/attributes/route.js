import { NextResponse } from 'next/server'
import { adminData, createId } from '../mock-data'

export async function GET() {
  return NextResponse.json({ attributes: adminData.attributes })
}

export async function POST(request) {
  const body = await request.json()

  if (!body?.name) {
    return NextResponse.json({ error: 'Attribute name is required' }, { status: 400 })
  }

  const attribute = {
    id: createId('attr'),
    name: body.name,
    type: body.type || 'select',
    values: body.values || [],
    status: body.status || 'Active',
  }

  adminData.attributes.unshift(attribute)
  return NextResponse.json({ attribute }, { status: 201 })
}

export async function PUT(request) {
  const body = await request.json()
  const item = adminData.attributes.find((entry) => entry.id === body.id)

  if (!item) {
    return NextResponse.json({ error: 'Attribute not found' }, { status: 404 })
  }

  Object.assign(item, body)
  return NextResponse.json({ attribute: item })
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'Attribute id is required' }, { status: 400 })
  }

  adminData.attributes = adminData.attributes.filter((entry) => entry.id !== id)
  return NextResponse.json({ success: true })
}
