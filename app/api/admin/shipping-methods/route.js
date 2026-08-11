import { NextResponse } from 'next/server'
import { adminData, createId } from '../mock-data'

export async function GET() {
  return NextResponse.json({ shippingMethods: adminData.shippingMethods })
}

export async function POST(request) {
  const body = await request.json()

  if (!body?.name) {
    return NextResponse.json({ error: 'Shipping method name is required' }, { status: 400 })
  }

  const shippingMethod = {
    id: createId('sm'),
    name: body.name,
    price: Number(body.price || 0),
    status: body.status || 'Active',
  }

  adminData.shippingMethods.unshift(shippingMethod)
  return NextResponse.json({ shippingMethod }, { status: 201 })
}

export async function PUT(request) {
  const body = await request.json()
  const item = adminData.shippingMethods.find((entry) => entry.id === body.id)

  if (!item) {
    return NextResponse.json({ error: 'Shipping method not found' }, { status: 404 })
  }

  Object.assign(item, body)
  return NextResponse.json({ shippingMethod: item })
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'Shipping method id is required' }, { status: 400 })
  }

  adminData.shippingMethods = adminData.shippingMethods.filter((entry) => entry.id !== id)
  return NextResponse.json({ success: true })
}
