import { prisma } from '@/lib/prisma'
import { generateQRCode } from '@/lib/qr'
import { notFound } from 'next/navigation'

interface AthletePageProps {
  params: Promise<{ qrId: string }>
}

export default async function AthletePage({ params }: AthletePageProps) {
  const { qrId } = await params
  
  const athlete = await prisma.athlete.findUnique({
    where: { qrId }
  })

  if (!athlete) {
    notFound()
  }

  const qrCodeImage = await generateQRCode(qrId)
  const age = new Date().getFullYear() - athlete.dateOfBirth.getFullYear()

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Emergency Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 dark:from-red-700 dark:to-red-800 text-white rounded-t-2xl p-6 shadow-lg">
          <div className="flex items-center justify-center space-x-3">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <h1 className="text-3xl font-bold tracking-wide">EMERGENCY MEDICAL INFORMATION</h1>
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-center text-red-100 mt-2 text-lg">Critical Health Data - Handle with Care</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-b-2xl shadow-xl overflow-hidden">
          {/* Athlete Header Info */}
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-gray-700 dark:to-slate-700 p-8 border-b border-gray-200 dark:border-gray-600">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {athlete.firstName} {athlete.lastName}
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-600">
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">Age</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{age} years</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-600">
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">Blood Type</div>
                    <div className="text-2xl font-bold text-red-600 dark:text-red-400">{athlete.bloodType}</div>
                  </div>
                  {athlete.teamOrg && (
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-600">
                      <div className="text-sm font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">Team</div>
                      <div className="text-xl font-semibold text-gray-900 dark:text-white truncate">{athlete.teamOrg}</div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-600">
                  <img 
                    src={qrCodeImage} 
                    alt="QR Code" 
                    className="w-32 h-32 mx-auto mb-3"
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">Athlete QR Code</p>
                </div>
              </div>
            </div>
          </div>

          {/* Critical Medical Information */}
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Allergies */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl p-6 border-l-4 border-red-500 shadow-sm">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-red-600 dark:text-red-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-xl font-bold text-red-700 dark:text-red-300">ALLERGIES</h3>
                </div>
                {athlete.allergies.length > 0 ? (
                  <ul className="space-y-2">
                    {athlete.allergies.map((allergy, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 dark:bg-red-400 rounded-full mr-3"></span>
                        <span className="text-lg font-semibold text-red-800 dark:text-red-200">{allergy}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 dark:text-gray-400 italic">No known allergies</p>
                )}
              </div>

              {/* Medications */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 border-l-4 border-blue-500 shadow-sm">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300">MEDICATIONS</h3>
                </div>
                {athlete.medications.length > 0 ? (
                  <ul className="space-y-2">
                    {athlete.medications.map((medication, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3"></span>
                        <span className="text-lg font-medium text-blue-800 dark:text-blue-200">{medication}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 dark:text-gray-400 italic">No current medications</p>
                )}
              </div>
            </div>

            {/* Medical Notes */}
            {athlete.medicalNotes && (
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-xl p-6 border-l-4 border-amber-500 shadow-sm mb-8">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-amber-600 dark:text-amber-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-xl font-bold text-amber-700 dark:text-amber-300">MEDICAL NOTES</h3>
                </div>
                <p className="text-lg text-amber-800 dark:text-amber-200 leading-relaxed">{athlete.medicalNotes}</p>
              </div>
            )}

            {/* Emergency Contact */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 border-l-4 border-green-500 shadow-sm mb-8">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <h3 className="text-xl font-bold text-green-700 dark:text-green-300">EMERGENCY CONTACT</h3>
              </div>
              <div className="text-lg space-y-2">
                <p className="font-semibold text-green-800 dark:text-green-200">{athlete.emergencyContact}</p>
                <a 
                  href={`tel:${athlete.emergencyPhone}`}
                  className="inline-flex items-center text-2xl font-bold text-green-700 dark:text-green-300 hover:text-green-800 dark:hover:text-green-200 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {athlete.emergencyPhone}
                </a>
              </div>
            </div>

            {/* Call 911 Button */}
            <div className="text-center">
              <a
                href="tel:911"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 dark:from-red-700 dark:to-red-800 text-white text-xl font-bold rounded-xl hover:from-red-700 hover:to-red-800 dark:hover:from-red-800 dark:hover:to-red-900 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                CALL 911 EMERGENCY
                <svg className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-600 dark:text-gray-400">
          <p className="text-sm">This information is for emergency medical personnel only</p>
        </div>
      </div>
    </div>
  )
}