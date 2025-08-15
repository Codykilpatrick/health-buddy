'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import QRScanner from '@/components/scanner/QRScanner';

export default function ScanPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleScan = (result: string) => {
    try {
      const url = new URL(result);
      if (url.pathname.startsWith('/athlete/')) {
        router.push(url.pathname);
      } else {
        setError('Invalid QR code - not an athlete health code');
      }
    } catch {
      setError('Invalid QR code format');
    }
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">Scan QR Code</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <QRScanner onScan={handleScan} onError={handleError} />

        <div className="mt-8 text-center text-gray-600">
          <p>Point your camera at an athlete&apos;s QR code</p>
        </div>
      </div>
    </div>
  );
}
