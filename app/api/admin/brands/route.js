import { NextResponse } from 'next/server'
import { adminData, createId } from '../mock-data'

export async function GET() {
  return NextResponse.json({ brands: adminData.brands })
}

export async function POST(request) {
  const body = await request.json()

  if (!body?.name) {
    return NextResponse.json({ error: 'Brand name is required' }, { status: 400 })
  }

  const brand = {
    id: createId('brand'),
    name: body.name,
    description: body.description || '',
    status: body.status || 'Active',
    featured: Boolean(body.featured),
  }

  adminData.brands.unshift(brand)
  return NextResponse.json({ brand }, { status: 201 })
}

export async function PUT(request) {
  const body = await request.json()
  const item = adminData.brands.find((entry) => entry.id === body.id)

  if (!item) {
    return NextResponse.json({ error: 'Brand not found' }, { status: 404 })
  }

  Object.assign(item, body)
  return NextResponse.json({ brand: item })
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'Brand id is required' }, { status: 400 })
  }

  adminData.brands = adminData.brands.filter((entry) => entry.id !== id)
  return NextResponse.json({ success: true })
}
