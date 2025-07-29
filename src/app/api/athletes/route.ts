import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { nanoid } from 'nanoid';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const athlete = await prisma.athlete.create({
      data: {
        qrId: nanoid(10),
        firstName: body.firstName,
        lastName: body.lastName,
        dateOfBirth: new Date(body.dateOfBirth),
        bloodType: body.bloodType,
        allergies: body.allergies || [],
        medications: body.medications || [],
        medicalNotes: body.medicalNotes || '',
        emergencyContact: body.emergencyContact,
        emergencyPhone: body.emergencyPhone,
        teamOrg: body.teamOrg || '',
        createdBy: 'system', // TODO: Replace with actual user ID from auth
      },
    });

    return NextResponse.json(athlete);
  } catch (error) {
    console.error('Error creating athlete:', error);
    return NextResponse.json(
      { error: 'Failed to create athlete' },
      { status: 500 }
    );
  }
}
