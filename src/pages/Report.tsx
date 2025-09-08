import Navigation from '@/components/Navigation';
import ReportForm from '@/components/ReportForm';

const Report = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Report a Civic Issue
            </h1>
            <p className="text-xl text-civic-gray max-w-2xl mx-auto">
              Help improve your community by reporting issues that need attention. 
              Your voice matters in making our city better.
            </p>
          </div>
          <ReportForm />
        </div>
      </main>
    </div>
  );
};

export default Report;