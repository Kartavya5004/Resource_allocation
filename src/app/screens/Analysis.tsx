import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Label } from '../components/ui/label';
import { ChevronDown, ChevronUp } from 'lucide-react';

const analysisData = [
  {
    rank: 1,
    area: 'Village Rampur',
    score: 92,
    issues: { water: 95, food: 70, healthcare: 85 },
    people: 450,
    severity: 'Critical',
    explanation: 'High priority due to severe water shortage affecting 450 people. Limited access to clean drinking water and irrigation facilities. Immediate intervention required to prevent health crisis.'
  },
  {
    rank: 2,
    area: 'District Azamgarh',
    score: 88,
    issues: { food: 90, water: 65, education: 75 },
    people: 1200,
    severity: 'High',
    explanation: 'Critical food shortage impacting 1,200 residents. Agricultural failure due to drought. Malnutrition rates increasing, especially among children under 5.'
  },
  {
    rank: 3,
    area: 'Town Sitapur',
    score: 85,
    issues: { healthcare: 90, water: 70, food: 60 },
    people: 800,
    severity: 'High',
    explanation: 'Limited healthcare access with nearest medical facility 50km away. 800 people affected, including pregnant women and elderly requiring urgent medical attention.'
  },
  {
    rank: 4,
    area: 'Village Chandpur',
    score: 82,
    issues: { water: 85, sanitation: 80, healthcare: 70 },
    people: 350,
    severity: 'High',
    explanation: 'Poor water quality and inadequate sanitation infrastructure leading to waterborne diseases. Community well contaminated, affecting 350 residents.'
  },
  {
    rank: 5,
    area: 'District Sultanpur',
    score: 78,
    issues: { education: 85, healthcare: 60, food: 65 },
    people: 600,
    severity: 'Medium',
    explanation: 'School infrastructure severely damaged. 600 children without access to proper education. Teacher shortage and lack of basic learning materials.'
  },
  {
    rank: 6,
    area: 'Village Jalalpur',
    score: 75,
    issues: { food: 75, water: 65, finance: 70 },
    people: 280,
    severity: 'Medium',
    explanation: 'Economic hardship affecting 280 families. Loss of livelihood due to crop failure. Need for financial aid and skill development programs.'
  }
];

export const Analysis = () => {
  const [selectedIssue, setSelectedIssue] = useState('all');
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const filteredData = analysisData.filter(item => {
    const issueMatch = selectedIssue === 'all' || Object.keys(item.issues).includes(selectedIssue);
    const severityMatch = selectedSeverity === 'all' || item.severity === selectedSeverity;
    return issueMatch && severityMatch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analysis & Ranking</h1>
        <p className="text-gray-600 mt-1">AI-powered priority ranking of areas based on need</p>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <h2 className="text-lg font-bold mb-4">Filters</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Issue Type</Label>
            <Select value={selectedIssue} onValueChange={setSelectedIssue}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Issues</SelectItem>
                <SelectItem value="water">Water</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Severity</Label>
            <Select value={selectedSeverity} onValueChange={setSelectedSeverity}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Critical">Critical</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-end">
            <Button 
              variant="outline" 
              onClick={() => { setSelectedIssue('all'); setSelectedSeverity('all'); }}
              className="w-full"
            >
              Reset Filters
            </Button>
          </div>
        </div>
      </Card>

      {/* Results */}
      <Card className="p-6">
        <h2 className="text-lg font-bold mb-4">Ranked Areas ({filteredData.length})</h2>
        
        <div className="space-y-3">
          {filteredData.map((item, index) => (
            <motion.div
              key={item.rank}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              {/* Main Row */}
              <div
                className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => setExpandedRow(expandedRow === item.rank ? null : item.rank)}
              >
                <div className="flex items-center gap-4">
                  {/* Rank */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                    {item.rank}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg text-gray-900">{item.area}</h3>
                      <span className="text-2xl font-bold text-cyan-600">{item.score}</span>
                    </div>
                    
                    {/* Issue Breakdown */}
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(item.issues).map(([issue, score]) => (
                        <span
                          key={issue}
                          className="px-2 py-1 bg-gray-100 rounded text-xs font-medium text-gray-700"
                        >
                          {issue}: {score}%
                        </span>
                      ))}
                      <span className="px-2 py-1 bg-blue-100 rounded text-xs font-medium text-blue-700">
                        {item.people} people
                      </span>
                    </div>
                  </div>

                  {/* Severity & Expand */}
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.severity === 'Critical'
                          ? 'bg-red-100 text-red-700'
                          : item.severity === 'High'
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {item.severity}
                    </span>
                    {expandedRow === item.rank ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expandable Explanation */}
              <AnimatePresence>
                {expandedRow === item.rank && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="border-t border-gray-200 bg-cyan-50"
                  >
                    <div className="p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Detailed Explanation</h4>
                      <p className="text-gray-700 leading-relaxed">{item.explanation}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
};
