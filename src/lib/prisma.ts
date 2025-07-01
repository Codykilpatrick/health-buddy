import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// src/lib/qr.ts
import QRCode from 'qrcode'

export async function generateQRCode(athleteId: string): Promise<string> {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/athlete/${athleteId}`
  return await QRCode.toDataURL(url, {
    width: 400,
    margin: 2,
    color: {
      dark: '#000000',
      light: '#FFFFFF',
    },
  })
}