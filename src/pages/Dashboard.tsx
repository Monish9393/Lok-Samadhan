import Navigation from '@/components/Navigation';
import StatsOverview from '@/components/StatsOverview';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const complaintData = [
    { month: 'Jan', complaints: 45, resolved: 40 },
    { month: 'Feb', complaints: 52, resolved: 48 },
    { month: 'Mar', complaints: 38, resolved: 35 },
    { month: 'Apr', complaints: 61, resolved: 55 },
    { month: 'May', complaints: 55, resolved: 52 },
    { month: 'Jun', complaints: 43, resolved: 41 }
  ];

  const categoryData = [
    { name: 'Potholes', value: 35, color: 'hsl(var(--civic-blue))' },
    { name: 'Streetlights', value: 25, color: 'hsl(var(--civic-green))' },
    { name: 'Garbage', value: 20, color: 'hsl(var(--accent))' },
    { name: 'Water Issues', value: 15, color: 'hsl(var(--civic-gray))' },
    { name: 'Others', value: 5, color: 'hsl(var(--muted-foreground))' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-civic-gray">Municipal civic issues management and analytics</p>
        </div>
        
        <StatsOverview />
        
        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Complaints Trend Chart */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Monthly Complaints Trend</CardTitle>
              <CardDescription className="text-civic-gray">
                Track complaint submissions and resolution rates over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={complaintData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--civic-gray))" />
                  <YAxis stroke="hsl(var(--civic-gray))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '6px'
                    }}
                  />
                  <Bar dataKey="complaints" fill="hsl(var(--civic-blue))" name="Total Complaints" />
                  <Bar dataKey="resolved" fill="hsl(var(--civic-green))" name="Resolved" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Complaint Categories Chart */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Complaint Categories</CardTitle>
              <CardDescription className="text-civic-gray">
                Distribution of issues by category
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '6px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {categoryData.map((category, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: category.color }}
                    ></div>
                    <span className="text-sm text-civic-gray">{category.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;