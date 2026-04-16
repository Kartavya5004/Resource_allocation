import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Search, MapPin, Phone, Mail, Star, ExternalLink } from 'lucide-react';

const ngoData = [
  {
    id: 1,
    name: 'Water For All Foundation',
    focus: 'Water & Sanitation',
    location: 'Uttar Pradesh',
    rating: 4.8,
    contact: '+91 98765 43210',
    email: 'contact@waterforall.org',
    projects: 23,
    verified: true
  },
  {
    id: 2,
    name: 'Food Relief Initiative',
    focus: 'Food Security',
    location: 'Multiple States',
    rating: 4.9,
    contact: '+91 98765 43211',
    email: 'info@foodrelief.org',
    projects: 45,
    verified: true
  },
  {
    id: 3,
    name: 'Healthcare Access Network',
    focus: 'Healthcare',
    location: 'Bihar, UP',
    rating: 4.7,
    contact: '+91 98765 43212',
    email: 'support@healthaccess.org',
    projects: 31,
    verified: true
  },
  {
    id: 4,
    name: 'Education First',
    focus: 'Education',
    location: 'Rajasthan',
    rating: 4.6,
    contact: '+91 98765 43213',
    email: 'hello@educationfirst.org',
    projects: 18,
    verified: true
  },
  {
    id: 5,
    name: 'Rural Development Trust',
    focus: 'Rural Development',
    location: 'Madhya Pradesh',
    rating: 4.5,
    contact: '+91 98765 43214',
    email: 'contact@ruraltrust.org',
    projects: 27,
    verified: true
  },
  {
    id: 6,
    name: 'Women Empowerment Society',
    focus: 'Women & Children',
    location: 'West Bengal',
    rating: 4.8,
    contact: '+91 98765 43215',
    email: 'info@womenpower.org',
    projects: 34,
    verified: true
  }
];

export const NGODirectory = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNGOs = ngoData.filter(ngo =>
    ngo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ngo.focus.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ngo.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">NGO Directory</h1>
        <p className="text-gray-600 mt-1">Verified NGOs ready to implement aid programs</p>
      </div>

      {/* Search */}
      <Card className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Search by name, focus area, or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </Card>

      {/* NGO Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNGOs.map((ngo, index) => (
          <motion.div
            key={ngo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{ngo.name}</h3>
                  {ngo.verified && (
                    <Badge className="bg-green-100 text-green-700">Verified</Badge>
                  )}
                </div>
              </div>

              {/* Focus Area */}
              <div className="mb-4">
                <Badge variant="outline" className="text-cyan-600 border-cyan-600">
                  {ngo.focus}
                </Badge>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(ngo.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700">{ngo.rating}</span>
                <span className="text-sm text-gray-500">({ngo.projects} projects)</span>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  {ngo.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-gray-400" />
                  {ngo.contact}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4 text-gray-400" />
                  {ngo.email}
                </div>
              </div>

              {/* Action Button */}
              <Button
                variant="outline"
                className="w-full mt-4 border-cyan-600 text-cyan-600 hover:bg-cyan-50"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Details
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
