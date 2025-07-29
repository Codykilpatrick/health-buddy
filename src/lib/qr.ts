import QRCode from 'qrcode';

export async function generateQRCode(qrId: string): Promise<string> {
  try {
    // Generate QR code that points to the athlete page
    const url = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/athlete/${qrId}`;

    // Generate QR code as data URL
    const qrCodeDataURL = await QRCode.toDataURL(url, {
      width: 200,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF',
      },
    });

    return qrCodeDataURL;
  } catch (error) {
    console.error('Error generating QR code:', error);
    throw new Error('Failed to generate QR code');
  }
}
