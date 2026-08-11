import { NextResponse } from 'next/server'
import { adminData } from '../mock-data'

export async function GET() {
  return NextResponse.json({ taxes: adminData.taxSettings })
}

export async function PUT(request) {
  const body = await request.json()

  adminData.taxSettings = {
    ...adminData.taxSettings,
    ...body,
  }

  return NextResponse.json({ taxes: adminData.taxSettings })
}
