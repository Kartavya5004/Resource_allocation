import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { MapPin, Users, Building2, FileText, AlertTriangle, Droplets, Utensils, Heart } from 'lucide-react';

const summaryData = [
  { label: 'Total Areas Analyzed', value: '127', icon: MapPin, color: 'cyan' },
  { label: 'High Priority Areas', value: '23', icon: AlertTriangle, color: 'red' },
  { label: 'NGOs Available', value: '45', icon: Building2, color: 'blue' },
  { label: 'Total Reports Processed', value: '1,249', icon: FileText, color: 'emerald' }
];

const priorityAreas = [
  {
    name: 'Village Rampur',
    score: 92,
    issue: 'Water Scarcity',
    severity: 'Critical',
    people: 450,
    icon: Droplets
  },
  {
    name: 'District Azamgarh',
    score: 88,
    issue: 'Food Shortage',
    severity: 'High',
    people: 1200,
    icon: Utensils
  },
  {
    name: 'Town Sitapur',
    score: 85,
    issue: 'Healthcare Access',
    severity: 'High',
    people: 800,
    icon: Heart
  },
  {
    name: 'Village Chandpur',
    score: 82,
    issue: 'Water & Sanitation',
    severity: 'High',
    people: 350,
    icon: Droplets
  },
  {
    name: 'District Sultanpur',
    score: 78,
    issue: 'Education Infrastructure',
    severity: 'Medium',
    people: 600,
    icon: Users
  }
];

export const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Overview of resource allocation and priority areas</p>
      </div>

      {/* Top Priority Highlight - NEW */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
      >
        <Card className="p-6 bg-gradient-to-r from-red-50 via-orange-50 to-red-50 border-2 border-red-300 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-xl bg-red-100">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-bold text-red-600 uppercase tracking-wide">Top Priority Right Now</span>
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-red-600 text-white">Score: 92</span>
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Village Rampur</h2>
              <p className="text-lg text-gray-700 font-medium">Severe water scarcity affecting 450+ people — immediate action required</p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Recommended Action - NEW */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="p-4 bg-cyan-600 text-white rounded-lg">
          <p className="text-lg font-bold">
            💡 Recommended Action: Allocate resources to Village Rampur (Water Infrastructure)
          </p>
        </div>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryData.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{item.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{item.value}</p>
                </div>
                <div className={`p-3 rounded-lg bg-${item.color}-100`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="opacity-80"
      >
        <Card className="p-6 bg-gray-50">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">High-Need Areas Map</h2>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
            {/* Mock Map Visualization */}
            <div className="absolute inset-0 opacity-20">
              <svg viewBox="0 0 800 400" className="w-full h-full">
                <path
                  d="M 100 200 Q 250 100, 400 200 T 700 200"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-cyan-600"
                />
              </svg>
            </div>
            
            {/* Hotspot Markers */}
            {[
              { x: '20%', y: '40%', label: 'Rampur', priority: 'critical' },
              { x: '45%', y: '60%', label: 'Azamgarh', priority: 'high' },
              { x: '70%', y: '35%', label: 'Sitapur', priority: 'high' },
              { x: '55%', y: '75%', label: 'Chandpur', priority: 'medium' },
              { x: '30%', y: '65%', label: 'Sultanpur', priority: 'medium' }
            ].map((marker, i) => (
              <motion.div
                key={marker.label}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="absolute"
                style={{ left: marker.x, top: marker.y }}
              >
                <div className="relative">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      marker.priority === 'critical'
                        ? 'bg-red-500'
                        : marker.priority === 'high'
                        ? 'bg-orange-500'
                        : 'bg-yellow-500'
                    } animate-pulse`}
                  />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg text-xs font-medium whitespace-nowrap">
                    {marker.label}
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="text-center z-10">
              <MapPin className="w-12 h-12 text-cyan-600 mx-auto mb-2 opacity-60" />
              <p className="text-gray-600 text-sm">Interactive map showing priority areas</p>
              <p className="text-xs text-gray-500 mt-1">Hover over markers for details</p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Top Priority List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="p-6">
          <h2 className="text-xl font-extrabold mb-4">Top Priority Areas</h2>
          <div className="space-y-4">
            {priorityAreas.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {/* Icon */}
                <div
                  className={`p-3 rounded-lg ${
                    area.severity === 'Critical'
                      ? 'bg-red-100'
                      : area.severity === 'High'
                      ? 'bg-orange-100'
                      : 'bg-yellow-100'
                  }`}
                >
                  <area.icon
                    className={`w-6 h-6 ${
                      area.severity === 'Critical'
                        ? 'text-red-600'
                        : area.severity === 'High'
                        ? 'text-orange-600'
                        : 'text-yellow-600'
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-gray-900">{area.name}</h3>
                    <span className="text-2xl font-bold text-cyan-600">{area.score}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{area.issue}</span>
                    <span>•</span>
                    <span>{area.people} people affected</span>
                  </div>
                </div>

                {/* Severity Badge */}
                <div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      area.severity === 'Critical'
                        ? 'bg-red-100 text-red-700'
                        : area.severity === 'High'
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {area.severity}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
};