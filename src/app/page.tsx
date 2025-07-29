import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Athlete Health QR
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Instant access to critical health information when every second
            counts. Create QR codes for emergency medical data for athletes.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="mb-6 text-center">
              <svg
                className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">
              Create Athlete Profile
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
              Add health information and emergency contacts for athletes.
              Generate QR codes for instant access during emergencies.
            </p>
            <Link
              href="/create"
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors font-semibold"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
              </svg>
              Create Profile
            </Link>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            How It Works
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  1
                </span>
              </div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                Create Profile
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Enter athlete health data and emergency contacts
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                  2
                </span>
              </div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                Generate QR Code
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Print and place QR code on helmet or gear
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 dark:bg-red-900/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600 dark:text-red-400">
                  3
                </span>
              </div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                Emergency Access
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Medical personnel scan with any phone camera to view critical
                info
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
