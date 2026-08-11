import { NextResponse } from 'next/server'
import { adminData } from '../mock-data'

export async function GET() {
  return NextResponse.json({ settings: adminData.settings })
}

export async function PUT(request) {
  const body = await request.json()

  adminData.settings = {
    ...adminData.settings,
    ...body,
  }

  return NextResponse.json({ settings: adminData.settings })
}
