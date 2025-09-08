import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Camera, MapPin, Send, Upload } from 'lucide-react';
import { CATEGORY_LABELS, type ReportCategory, type Priority } from '@/types/report';

const ReportForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '' as ReportCategory,
    priority: 'medium' as Priority,
    location: {
      address: '',
      lat: 0,
      lng: 0
    }
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImages(prev => [...prev, ...files].slice(0, 3)); // Max 3 images
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData(prev => ({
            ...prev,
            location: {
              ...prev.location,
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          }));
          toast({
            title: "Location captured",
            description: "Your current location has been added to the report.",
          });
        },
        (error) => {
          toast({
            title: "Location error",
            description: "Unable to get your location. Please enter address manually.",
            variant: "destructive",
          });
        }
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Report submitted successfully!",
        description: "Your report has been received and assigned ID #12345. You'll receive updates via email.",
      });
      setIsSubmitting(false);
      // Reset form
      setFormData({
        title: '',
        description: '',
        category: '' as ReportCategory,
        priority: 'medium',
        location: { address: '', lat: 0, lng: 0 }
      });
      setImages([]);
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-civic">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-civic-blue">
            <Send className="w-6 h-6" />
            <span>Report a Civic Issue</span>
          </CardTitle>
          <CardDescription>
            Help us improve your community by reporting issues that need attention.
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Issue Title *</Label>
              <Input
                id="title"
                placeholder="Brief description of the issue"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select 
                  value={formData.category} 
                  onValueChange={(value: ReportCategory) => 
                    setFormData(prev => ({ ...prev, category: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select issue type" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                      <SelectItem key={key} value={key}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Select 
                  value={formData.priority} 
                  onValueChange={(value: Priority) => 
                    setFormData(prev => ({ ...prev, priority: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Detailed Description *</Label>
              <Textarea
                id="description"
                placeholder="Provide more details about the issue, including any relevant context..."
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                rows={4}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Location</Label>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter address or location details"
                  value={formData.location.address}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    location: { ...prev.location, address: e.target.value }
                  }))}
                  className="flex-1"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={getCurrentLocation}
                  className="shrink-0"
                >
                  <MapPin className="w-4 h-4" />
                  Use Current
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Photos (Optional)</Label>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-civic-blue file:text-white hover:file:bg-civic-blue/90"
                  />
                  <Camera className="w-5 h-5 text-civic-gray" />
                </div>
                
                {images.length > 0 && (
                  <div className="grid grid-cols-3 gap-2">
                    {images.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Upload ${index + 1}`}
                          className="w-full h-20 object-cover rounded-md"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0"
                        >
                          ×
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
                <p className="text-sm text-civic-gray">
                  You can upload up to 3 photos. Photos help authorities understand and resolve issues faster.
                </p>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              variant="civic"
              disabled={isSubmitting || !formData.title || !formData.description || !formData.category}
            >
              {isSubmitting ? (
                <>
                  <Upload className="w-4 h-4 mr-2 animate-spin" />
                  Submitting Report...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Submit Report
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportForm;