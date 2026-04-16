import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Slider } from '../components/ui/slider';
import { Upload, MessageSquare, FileSpreadsheet, Check } from 'lucide-react';
import { toast } from 'sonner';

export const DataInput = () => {
  const [file, setFile] = useState<File | null>(null);
  const [whatsappText, setWhatsappText] = useState('');
  const [manualForm, setManualForm] = useState({
    location: '',
    issueType: '',
    peopleAffected: '',
    severity: [50]
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      toast.success('File uploaded successfully');
    }
  };

  const handleWhatsAppSubmit = () => {
    if (!whatsappText.trim()) {
      toast.error('Please enter WhatsApp message text');
      return;
    }
    toast.success('WhatsApp data processed successfully');
    setWhatsappText('');
  };

  const handleManualSubmit = () => {
    if (!manualForm.location || !manualForm.issueType || !manualForm.peopleAffected) {
      toast.error('Please fill all required fields');
      return;
    }
    toast.success('Manual data submitted successfully');
    setManualForm({ location: '', issueType: '', peopleAffected: '', severity: [50] });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Data Input</h1>
        <p className="text-gray-600 mt-1">Upload survey data from various sources</p>
      </div>

      {/* Excel Upload Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <FileSpreadsheet className="w-6 h-6 text-cyan-600" />
            <h2 className="text-xl font-bold">Excel Upload</h2>
          </div>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-cyan-500 transition-colors">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">
              Drag and drop your Excel file here, or click to browse
            </p>
            <Input
              type="file"
              accept=".xlsx,.xls,.csv"
              onChange={handleFileUpload}
              className="max-w-xs mx-auto"
            />
          </div>

          {file && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
            >
              <Check className="w-5 h-5 text-green-600" />
              <div className="flex-1">
                <p className="font-medium text-green-900">{file.name}</p>
                <p className="text-sm text-green-700">{(file.size / 1024).toFixed(2)} KB</p>
              </div>
            </motion.div>
          )}
        </Card>
      </motion.div>

      {/* WhatsApp Input Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-6 h-6 text-cyan-600" />
            <h2 className="text-xl font-bold">WhatsApp Message Input</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="whatsapp">Paste WhatsApp messages or survey responses</Label>
              <Textarea
                id="whatsapp"
                placeholder="Example: Village Rampur needs urgent water supply. 450 people affected. Situation critical."
                value={whatsappText}
                onChange={(e) => setWhatsappText(e.target.value)}
                className="min-h-32 mt-2"
              />
            </div>
            <Button 
              onClick={handleWhatsAppSubmit}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
            >
              Process WhatsApp Data
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* Manual Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Manual Data Entry</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="location">Location / Area Name</Label>
              <Input
                id="location"
                placeholder="e.g., Village Rampur, District XYZ"
                value={manualForm.location}
                onChange={(e) => setManualForm({ ...manualForm, location: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="issueType">Issue Type</Label>
              <Select 
                value={manualForm.issueType} 
                onValueChange={(value) => setManualForm({ ...manualForm, issueType: value })}
              >
                <SelectTrigger id="issueType">
                  <SelectValue placeholder="Select issue type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="water">Water Scarcity</SelectItem>
                  <SelectItem value="food">Food Shortage</SelectItem>
                  <SelectItem value="healthcare">Healthcare Access</SelectItem>
                  <SelectItem value="education">Education Infrastructure</SelectItem>
                  <SelectItem value="finance">Financial Aid</SelectItem>
                  <SelectItem value="sanitation">Sanitation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="people">People Affected</Label>
              <Input
                id="people"
                type="number"
                placeholder="Number of people"
                value={manualForm.peopleAffected}
                onChange={(e) => setManualForm({ ...manualForm, peopleAffected: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label>Severity Level: {manualForm.severity[0]}%</Label>
              <Slider
                value={manualForm.severity}
                onValueChange={(value) => setManualForm({ ...manualForm, severity: value })}
                max={100}
                step={1}
                className="mt-2"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Low</span>
                <span>Medium</span>
                <span>High</span>
                <span>Critical</span>
              </div>
            </div>
          </div>

          <Button 
            onClick={handleManualSubmit}
            className="mt-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
          >
            Submit Data
          </Button>
        </Card>
      </motion.div>
    </div>
  );
};
