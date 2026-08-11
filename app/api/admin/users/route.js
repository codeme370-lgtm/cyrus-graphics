import { NextResponse } from 'next/server'
import { adminData, createId } from '../mock-data'

export async function GET() {
  return NextResponse.json({ users: adminData.users })
}

export async function POST(request) {
  const body = await request.json()

  if (!body?.name || !body?.email) {
    return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
  }

  const user = {
    id: createId('user'),
    name: body.name,
    email: body.email,
    role: body.role || 'customer',
    status: body.status || 'Active',
  }

  adminData.users.unshift(user)
  return NextResponse.json({ user }, { status: 201 })
}

export async function PUT(request) {
  const body = await request.json()
  const item = adminData.users.find((entry) => entry.id === body.id)

  if (!item) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  Object.assign(item, body)
  return NextResponse.json({ user: item })
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'User id is required' }, { status: 400 })
  }

  adminData.users = adminData.users.filter((entry) => entry.id !== id)
  return NextResponse.json({ success: true })
}
