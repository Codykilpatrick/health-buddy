'use client';

import { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';

interface QRScannerProps {
  onScan: (result: string) => void;
  onError?: (error: string) => void;
}

export default function QRScanner({ onScan, onError }: QRScannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [reader, setReader] = useState<BrowserMultiFormatReader | null>(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();
    setReader(codeReader);

    return () => {
      codeReader.reset();
    };
  }, []);

  const startScanning = async () => {
    if (!reader || !videoRef.current) return;

    try {
      setIsScanning(true);
      const result = await reader.decodeOnceFromVideoDevice(
        undefined,
        videoRef.current
      );
      onScan(result.getText());
    } catch {
      onError?.('Failed to scan QR code');
    } finally {
      setIsScanning(false);
    }
  };

  const stopScanning = () => {
    if (reader) {
      reader.reset();
      setIsScanning(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <video
        ref={videoRef}
        className="w-full max-w-md border rounded-lg"
        style={{ aspectRatio: '1' }}
      />

      <div className="flex space-x-4">
        <button
          onClick={startScanning}
          disabled={isScanning}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {isScanning ? 'Scanning...' : 'Start Scan'}
        </button>

        <button
          onClick={stopScanning}
          disabled={!isScanning}
          className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 disabled:opacity-50"
        >
          Stop
        </button>
      </div>
    </div>
  );
}
