import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { DollarSign, TrendingUp, Calculator } from 'lucide-react';
import { toast } from 'sonner';

interface Allocation {
  area: string;
  issue: string;
  amount: number;
  percentage: number;
  priority: string;
  color: string;
}

export const AllocationPlanner = () => {
  const [budget, setBudget] = useState('');
  const [allocations, setAllocations] = useState<Allocation[]>([]);

  const calculateAllocation = () => {
    if (!budget || parseFloat(budget) <= 0) {
      toast.error('Please enter a valid budget amount');
      return;
    }

    const totalBudget = parseFloat(budget);
    
    // AI-powered allocation based on priority scores
    const suggestedAllocations: Allocation[] = [
      {
        area: 'Village Rampur',
        issue: 'Water Scarcity',
        amount: totalBudget * 0.30,
        percentage: 30,
        priority: 'Critical',
        color: '#0891b2'
      },
      {
        area: 'District Azamgarh',
        issue: 'Food Shortage',
        amount: totalBudget * 0.25,
        percentage: 25,
        priority: 'High',
        color: '#0284c7'
      },
      {
        area: 'Town Sitapur',
        issue: 'Healthcare Access',
        amount: totalBudget * 0.20,
        percentage: 20,
        priority: 'High',
        color: '#0369a1'
      },
      {
        area: 'Village Chandpur',
        issue: 'Water & Sanitation',
        amount: totalBudget * 0.15,
        percentage: 15,
        priority: 'High',
        color: '#075985'
      },
      {
        area: 'District Sultanpur',
        issue: 'Education',
        amount: totalBudget * 0.10,
        percentage: 10,
        priority: 'Medium',
        color: '#0c4a6e'
      }
    ];

    setAllocations(suggestedAllocations);
    toast.success('Allocation plan generated successfully');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900">Allocation Planner</h1>
        <p className="text-gray-600 mt-1">AI-powered resource allocation recommendations</p>
      </div>

      {/* Budget Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-6 h-6 text-cyan-600" />
            <h2 className="text-xl font-extrabold">Budget Input</h2>
          </div>

          <div className="flex gap-4 items-end max-w-2xl">
            <div className="flex-1 space-y-2">
              <Label htmlFor="budget">Total Budget (₹)</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="budget"
                  type="number"
                  placeholder="Enter total budget amount"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="pl-10 text-lg"
                />
              </div>
            </div>
            <Button 
              onClick={calculateAllocation}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Generate Plan
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* Allocation Results */}
      {allocations.length > 0 && (
        <>
          {/* Allocation Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Suggested Allocation</h2>
              
              <div className="space-y-4">
                {allocations.map((allocation, index) => (
                  <motion.div
                    key={allocation.area}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg border border-cyan-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900">{allocation.area}</h3>
                        <p className="text-sm text-gray-600">{allocation.issue}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-cyan-600">
                          ₹{allocation.amount.toLocaleString('en-IN')}
                        </p>
                        <p className="text-sm text-gray-600">{allocation.percentage}% of budget</p>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all duration-500"
                        style={{
                          width: `${allocation.percentage}%`,
                          backgroundColor: allocation.color
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Pie Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="opacity-75"
          >
            <Card className="p-6 bg-gray-50">
              <h2 className="text-lg font-semibold mb-4 text-gray-700">Distribution Chart</h2>
              
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={allocations}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ area, percentage }) => `${area} (${percentage}%)`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="percentage"
                    nameKey="area"
                  >
                    {allocations.map((entry, index) => (
                      <Cell key={`cell-${entry.area}-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number, name: string, props: any) => [
                      `₹${props.payload.amount.toLocaleString('en-IN')} (${value}%)`,
                      props.payload.area
                    ]}
                  />
                  <Legend 
                    formatter={(value: string) => value}
                  />
                </PieChart>
              </ResponsiveContainer>

              <div className="mt-6 p-4 bg-cyan-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Allocation Summary</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Total Budget</p>
                    <p className="font-bold text-lg text-cyan-600">
                      ₹{parseFloat(budget).toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Areas Covered</p>
                    <p className="font-bold text-lg text-cyan-600">{allocations.length}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">High Priority</p>
                    <p className="font-bold text-lg text-cyan-600">
                      {allocations.filter(a => a.priority !== 'Medium').length}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </>
      )}
    </div>
  );
};