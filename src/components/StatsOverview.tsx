import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const StatsOverview = () => {
  const stats = [
    {
      title: 'Total Reports',
      value: '1,247',
      change: '+12%',
      trend: 'up',
      icon: TrendingUp,
      color: 'civic-blue'
    },
    {
      title: 'Pending Issues',
      value: '89',
      change: '-8%',
      trend: 'down',
      icon: Clock,
      color: 'warning'
    },
    {
      title: 'Resolved Today',
      value: '23',
      change: '+15%',
      trend: 'up',
      icon: CheckCircle,
      color: 'success'
    },
    {
      title: 'High Priority',
      value: '7',
      change: '+2',
      trend: 'up',
      icon: AlertCircle,
      color: 'destructive'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="shadow-card hover:shadow-civic transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-civic-gray">
              {stat.title}
            </CardTitle>
            <stat.icon className={`w-5 h-5 text-${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <div className="flex items-center space-x-2 mt-2">
              <Badge 
                variant={stat.trend === 'up' ? 'default' : 'secondary'}
                className={`text-xs ${
                  stat.trend === 'up' 
                    ? 'bg-success/10 text-success hover:bg-success/20' 
                    : 'bg-civic-gray/10 text-civic-gray hover:bg-civic-gray/20'
                }`}
              >
                {stat.change}
              </Badge>
              <span className="text-xs text-civic-gray">from last week</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsOverview;