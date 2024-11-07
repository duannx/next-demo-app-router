// app/api/blog/[id]/route.ts

import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { id: string } }) {
    
  const { id } = await params;
  console.log('API running for id', id)
  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  return NextResponse.json({
    title: `Blog Post ID ${id}`,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  });
}
