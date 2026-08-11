import { NextResponse } from 'next/server'
import { adminData, createId } from '../mock-data'

export async function GET() {
  return NextResponse.json({ projects: adminData.portfolioProjects })
}

export async function POST(request) {
  const body = await request.json()

  if (!body?.title) {
    return NextResponse.json({ error: 'Project title is required' }, { status: 400 })
  }

  const project = {
    id: createId('portfolio'),
    title: body.title,
    category: body.category || 'General',
    status: body.status || 'Draft',
    client: body.client || 'Client',
  }

  adminData.portfolioProjects.unshift(project)
  return NextResponse.json({ project }, { status: 201 })
}

export async function PUT(request) {
  const body = await request.json()
  const item = adminData.portfolioProjects.find((entry) => entry.id === body.id)

  if (!item) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 })
  }

  Object.assign(item, body)
  return NextResponse.json({ project: item })
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'Project id is required' }, { status: 400 })
  }

  adminData.portfolioProjects = adminData.portfolioProjects.filter((entry) => entry.id !== id)
  return NextResponse.json({ success: true })
}
