import AthleteForm from '@/components/forms/AthleteForm';

export default function CreatePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <AthleteForm />
      </div>
    </div>
  );
}
