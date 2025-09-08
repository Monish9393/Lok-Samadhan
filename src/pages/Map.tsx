import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation as NavigationIcon, Filter } from 'lucide-react';
import { Report, STATUS_LABELS, CATEGORY_LABELS } from '@/types/report';

const Map = () => {
  // Mock data for demonstration
  const mockReports: Report[] = [
    {
      id: '1',
      title: 'Large pothole on Main Street',
      description: 'Deep pothole causing traffic issues',
      category: 'pothole',
      status: 'in_progress',
      priority: 'high',
      location: { lat: 40.7128, lng: -74.0060, address: 'Main Street, Downtown' },
      images: [],
      submittedBy: 'citizen1',
      submittedAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-16'),
      assignedTo: 'Public Works Dept'
    },
    {
      id: '2',
      title: 'Broken streetlight',
      description: 'Street light not working for 3 days',
      category: 'streetlight',
      status: 'submitted',
      priority: 'medium',
      location: { lat: 40.7589, lng: -73.9851, address: 'Park Avenue, Midtown' },
      images: [],
      submittedBy: 'citizen2',
      submittedAt: new Date('2024-01-16'),
      updatedAt: new Date('2024-01-16')
    },
    {
      id: '3',
      title: 'Overflowing trash bin',
      description: 'Garbage bin overflowing for 2 days',
      category: 'trash',
      status: 'resolved',
      priority: 'low',
      location: { lat: 40.7505, lng: -73.9934, address: 'Central Park West' },
      images: [],
      submittedBy: 'citizen3',
      submittedAt: new Date('2024-01-14'),
      updatedAt: new Date('2024-01-16')
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted': return 'bg-warning/10 text-warning';
      case 'acknowledged': return 'bg-primary/10 text-primary';
      case 'in_progress': return 'bg-civic-blue/10 text-civic-blue';
      case 'resolved': return 'bg-success/10 text-success';
      case 'closed': return 'bg-civic-gray/10 text-civic-gray';
      default: return 'bg-civic-gray/10 text-civic-gray';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-destructive/10 text-destructive';
      case 'high': return 'bg-warning/10 text-warning';
      case 'medium': return 'bg-civic-blue/10 text-civic-blue';
      case 'low': return 'bg-success/10 text-success';
      default: return 'bg-civic-gray/10 text-civic-gray';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              City Issues Map
            </h1>
            <p className="text-xl text-civic-gray max-w-2xl mx-auto">
              Interactive map showing all reported civic issues in your area. 
              Track progress and stay informed about community improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Area */}
            <div className="lg:col-span-2">
              <Card className="h-96 lg:h-[600px] shadow-civic">
                <CardContent className="p-6 h-full">
                  <div className="w-full h-full bg-gradient-to-br from-civic-blue/10 to-civic-green/10 rounded-lg flex items-center justify-center border-2 border-dashed border-civic-blue/30">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-civic-blue mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Interactive Map
                      </h3>
                      <p className="text-civic-gray mb-4">
                        Map integration will display all reported issues with location markers
                      </p>
                      <Button variant="civic">
                        <NavigationIcon className="w-4 h-4 mr-2" />
                        Show My Location
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Reports List */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">Recent Reports</h2>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>

              <div className="space-y-4 max-h-[500px] overflow-y-auto">
                {mockReports.map((report) => (
                  <Card key={report.id} className="shadow-card hover:shadow-civic transition-shadow duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg text-foreground">
                          {report.title}
                        </CardTitle>
                        <Badge className={getPriorityColor(report.priority)}>
                          {report.priority}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-civic-gray text-sm mb-3">
                        {report.description}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">
                            {CATEGORY_LABELS[report.category]}
                          </Badge>
                          <Badge className={getStatusColor(report.status)}>
                            {STATUS_LABELS[report.status]}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center text-xs text-civic-gray">
                          <MapPin className="w-3 h-3 mr-1" />
                          {report.location.address}
                        </div>
                        
                        <div className="text-xs text-civic-gray">
                          Reported: {report.submittedAt.toLocaleDateString()}
                        </div>
                        
                        {report.assignedTo && (
                          <div className="text-xs text-civic-blue">
                            Assigned to: {report.assignedTo}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Map;