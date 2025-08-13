import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ qrId: string }> }
) {
  try {
    const { qrId } = await params;
    const athlete = await prisma.athlete.findUnique({
      where: { qrId },
    });

    if (!athlete) {
      return NextResponse.json({ error: 'Athlete not found' }, { status: 404 });
    }

    return NextResponse.json(athlete);
  } catch (error) {
    console.error('Error fetching athlete:', error);
    return NextResponse.json(
      { error: 'Failed to fetch athlete' },
      { status: 500 }
    );
  }
}
