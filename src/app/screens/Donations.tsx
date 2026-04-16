import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { 
  Heart, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  Users,
  MapPin,
  ArrowLeft,
  X
} from 'lucide-react';
import { toast } from 'sonner';

interface Donation {
  id: string;
  ngo: string;
  area: string;
  amount: string;
  type: string;
  date: string;
  status: 'pending' | 'in-progress' | 'completed';
  progress: number;
}

const myDonations: Donation[] = [
  {
    id: '1',
    ngo: 'Water For All Foundation',
    area: 'Village Rampur',
    amount: '₹50,000',
    type: 'Water Infrastructure',
    date: '2026-04-10',
    status: 'in-progress',
    progress: 65
  },
  {
    id: '2',
    ngo: 'Food Relief Initiative',
    area: 'District Azamgarh',
    amount: '₹35,000',
    type: 'Food Supplies',
    date: '2026-04-08',
    status: 'completed',
    progress: 100
  },
  {
    id: '3',
    ngo: 'Healthcare Access Network',
    area: 'Town Sitapur',
    amount: '₹40,000',
    type: 'Medical Equipment',
    date: '2026-04-12',
    status: 'pending',
    progress: 20
  }
];

export const Donations = () => {
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    ngo: '',
    area: '',
    amount: '',
    type: ''
  });

  const handleSubmitDonation = () => {
    if (!formData.ngo || !formData.area || !formData.amount) {
      toast.error('Please fill all required fields');
      return;
    }
    toast.success('Donation submitted successfully!');
    setShowDonationForm(false);
    setFormData({ ngo: '', area: '', amount: '', type: '' });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700';
      case 'in-progress': return 'bg-blue-100 text-blue-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'in-progress': return TrendingUp;
      case 'pending': return Clock;
      default: return Clock;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Donations & Tracking</h1>
          <p className="text-gray-600 mt-1">Make donations and track their real-world impact</p>
        </div>
        {!showDonationForm && !selectedDonation && (
          <Button 
            onClick={() => setShowDonationForm(true)}
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
          >
            <Heart className="w-4 h-4 mr-2" />
            Make a Donation
          </Button>
        )}
      </div>

      {/* Donation Form */}
      <AnimatePresence>
        {showDonationForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card className="p-6 border-2 border-cyan-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Make a Donation</h2>
                <Button variant="ghost" size="sm" onClick={() => setShowDonationForm(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Select NGO</Label>
                  <Select value={formData.ngo} onValueChange={(value) => setFormData({ ...formData, ngo: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose an NGO" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="water">Water For All Foundation</SelectItem>
                      <SelectItem value="food">Food Relief Initiative</SelectItem>
                      <SelectItem value="health">Healthcare Access Network</SelectItem>
                      <SelectItem value="education">Education First</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Select Area</Label>
                  <Select value={formData.area} onValueChange={(value) => setFormData({ ...formData, area: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose an area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rampur">Village Rampur</SelectItem>
                      <SelectItem value="azamgarh">District Azamgarh</SelectItem>
                      <SelectItem value="sitapur">Town Sitapur</SelectItem>
                      <SelectItem value="chandpur">Village Chandpur</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Amount (₹)</Label>
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Type of Support</Label>
                  <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="money">Money</SelectItem>
                      <SelectItem value="food">Food Supplies</SelectItem>
                      <SelectItem value="clothes">Clothes</SelectItem>
                      <SelectItem value="medical">Medical Supplies</SelectItem>
                      <SelectItem value="education">Educational Materials</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                onClick={handleSubmitDonation}
                className="mt-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
              >
                Submit Donation
              </Button>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Donation Tracking Detail */}
      <AnimatePresence>
        {selectedDonation && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card className="p-6">
              <Button 
                variant="ghost" 
                onClick={() => setSelectedDonation(null)}
                className="mb-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to My Donations
              </Button>

              <div className="space-y-6">
                {/* Header */}
                <div>
                  <h2 className="text-2xl font-bold mb-2">Donation Tracking</h2>
                  <p className="text-gray-600">Track the real-time progress of your contribution</p>
                </div>

                {/* Progress Timeline */}
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-4">Progress Timeline</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Donation Received', status: 'completed', date: 'Apr 10, 2026' },
                      { label: 'Assigned to Area', status: 'completed', date: 'Apr 11, 2026' },
                      { label: 'Resources Distributed', status: 'in-progress', date: 'In Progress' },
                      { label: 'Work Completed', status: 'pending', date: 'Pending' }
                    ].map((step, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step.status === 'completed' ? 'bg-green-500' :
                          step.status === 'in-progress' ? 'bg-blue-500' :
                          'bg-gray-300'
                        }`}>
                          {step.status === 'completed' && <CheckCircle className="w-6 h-6 text-white" />}
                          {step.status === 'in-progress' && <TrendingUp className="w-6 h-6 text-white" />}
                          {step.status === 'pending' && <Clock className="w-6 h-6 text-white" />}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{step.label}</p>
                          <p className="text-sm text-gray-600">{step.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Progress */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Overall Progress</span>
                    <span className="font-bold text-cyan-600">65%</span>
                  </div>
                  <Progress value={65} className="h-3" />
                </div>

                {/* Impact Summary */}
                <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300">
                  <h3 className="text-xl font-extrabold mb-4 flex items-center gap-2 text-green-800">
                    <Users className="w-6 h-6 text-green-600" />
                    Real Impact
                  </h3>
                  <div className="bg-white p-4 rounded-lg mb-3">
                    <p className="text-lg font-bold text-gray-900 mb-2">
                      ✅ 250 people received clean water
                    </p>
                    <p className="text-sm text-gray-600">
                      Your donation directly improved water access in Village Rampur
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">People Helped</p>
                      <p className="text-3xl font-extrabold text-green-600">280</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Problem Addressed</p>
                      <p className="text-lg font-bold text-gray-900">Water access improved</p>
                    </div>
                  </div>
                </Card>

                {/* Updates */}
                <div>
                  <h3 className="font-bold mb-4">NGO Updates</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">Apr 13, 2026</p>
                      <p className="text-gray-700">Water tanks installed in Village Rampur. Construction of pipeline in progress.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">Apr 11, 2026</p>
                      <p className="text-gray-700">Site inspection completed. Materials procured and team deployed.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">Apr 10, 2026</p>
                      <p className="text-gray-700">Donation received and project approved. Thank you for your contribution!</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* My Donations List */}
      {!showDonationForm && !selectedDonation && (
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">My Donations</h2>
          <div className="space-y-4">
            {myDonations.map((donation, index) => {
              const StatusIcon = getStatusIcon(donation.status);
              return (
                <motion.div
                  key={donation.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedDonation(donation.id)}
                  className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{donation.ngo}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                        <MapPin className="w-4 h-4" />
                        {donation.area}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-cyan-600">{donation.amount}</p>
                      <p className="text-sm text-gray-500">{donation.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <Badge className={`${getStatusColor(donation.status)} font-bold text-xs px-3 py-1`}>
                      <StatusIcon className="w-4 h-4 mr-1.5" />
                      {donation.status === 'in-progress' ? 'IN PROGRESS' : 
                       donation.status === 'completed' ? 'COMPLETED' : 'PENDING'}
                    </Badge>
                    <span className="text-sm font-medium text-gray-700">{donation.type}</span>
                  </div>

                  <div className="mt-3">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-600">Progress</span>
                      <span className="text-xs font-bold text-cyan-600">{donation.progress}%</span>
                    </div>
                    <Progress value={donation.progress} className="h-2" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Card>
      )}
    </div>
  );
};