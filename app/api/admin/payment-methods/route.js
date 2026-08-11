import { NextResponse } from 'next/server'
import { adminData, createId } from '../mock-data'

export async function GET() {
  return NextResponse.json({ paymentMethods: adminData.paymentMethods })
}

export async function POST(request) {
  const body = await request.json()

  if (!body?.name) {
    return NextResponse.json({ error: 'Payment method name is required' }, { status: 400 })
  }

  const paymentMethod = {
    id: createId('pm'),
    name: body.name,
    type: body.type || 'card',
    status: body.status || 'Active',
  }

  adminData.paymentMethods.unshift(paymentMethod)
  return NextResponse.json({ paymentMethod }, { status: 201 })
}

export async function PUT(request) {
  const body = await request.json()
  const item = adminData.paymentMethods.find((entry) => entry.id === body.id)

  if (!item) {
    return NextResponse.json({ error: 'Payment method not found' }, { status: 404 })
  }

  Object.assign(item, body)
  return NextResponse.json({ paymentMethod: item })
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'Payment method id is required' }, { status: 400 })
  }

  adminData.paymentMethods = adminData.paymentMethods.filter((entry) => entry.id !== id)
  return NextResponse.json({ success: true })
}
