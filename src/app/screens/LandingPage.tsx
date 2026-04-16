import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../components/ui/button';
import { 
  BarChart3, 
  Target, 
  Eye, 
  Database, 
  AlertCircle, 
  TrendingUp,
  Upload,
  Brain,
  CheckCircle
} from 'lucide-react';

const carouselImages = [
  {
    url: 'https://images.unsplash.com/photo-1623966157906-58cf26ff6aeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHNjYXJjaXR5JTIwdmlsbGFnZSUyMHdlbGwlMjBkcm91Z2h0fGVufDF8fHx8MTc3NjI1NDMwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Millions lack access to clean water'
  },
  {
    url: 'https://images.unsplash.com/photo-1752760023161-c2b5d8edd1a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwc2hvcnRhZ2UlMjBodW5nZXIlMjBjb21tdW5pdHklMjBraXRjaGVufGVufDF8fHx8MTc3NjI1NDMwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Communities struggling with hunger'
  },
  {
    url: 'https://images.unsplash.com/photo-1773140278162-fd7df1043f0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGhlYWx0aGNhcmUlMjBtZWRpY2FsJTIwY2xpbmljfGVufDF8fHx8MTc3NjI1NDMwOXww&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Limited healthcare access'
  },
  {
    url: 'https://images.unsplash.com/photo-1774050021082-215a1826d6d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbml0YXJpYW4lMjBhaWQlMjBkaXN0cmlidXRpb24lMjB2b2x1bnRlZXJzfGVufDF8fHx8MTc3NjI1NDMwOXww&ixlib=rb-4.1.0&q=80&w=1080',
    caption: "Aid doesn't reach where it's needed most"
  }
];

export const LandingPage = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="px-6 py-4 border-b">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Smart Aid
            </div>
            <div className="flex gap-3">
              <Button variant="ghost" onClick={() => navigate('/login')}>
                Login
              </Button>
              <Button onClick={() => navigate('/signup')} className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700">
                Get Started
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Resources exist.{' '}
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Impact doesn't.
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We identify where help is needed most — and what to do next.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/signup')}
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
                >
                  Get Started
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/login')}>
                  Login
                </Button>
              </div>
            </motion.div>

            {/* Right Side - Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={carouselImages[currentImageIndex].url}
                    alt="Humanitarian issue"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-white text-xl font-medium">
                      {carouselImages[currentImageIndex].caption}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'bg-white w-8'
                        : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">The Challenge</h2>
            <p className="text-xl text-gray-600">NGOs face critical obstacles in resource allocation</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: 'Scattered Data',
                description: 'Information comes from multiple sources - WhatsApp, Excel sheets, surveys - making it hard to analyze.'
              },
              {
                icon: AlertCircle,
                title: 'Poor Resource Allocation',
                description: 'Without clear prioritization, resources often miss the areas with the most critical needs.'
              },
              {
                icon: Eye,
                title: 'Lack of Transparency',
                description: 'Donors can\'t track where their contributions go or measure real impact on communities.'
              }
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-red-100"
              >
                <problem.icon className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">The Solution</h2>
            <p className="text-xl text-gray-600">Smart Aid transforms how resources reach those in need</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI-Powered Analysis',
                description: 'Advanced algorithms process data from all sources to identify and rank areas by severity and need.'
              },
              {
                icon: Target,
                title: 'Smart Allocation',
                description: 'Get data-driven recommendations on optimal resource distribution based on real-time needs.'
              },
              {
                icon: TrendingUp,
                title: 'Real-Time Tracking',
                description: 'Donors see exactly where their contributions go and the measurable impact they create.'
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl shadow-lg border border-cyan-200"
              >
                <solution.icon className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Three simple steps to maximize your impact</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Upload,
                step: '1',
                title: 'Input Data',
                description: 'Upload surveys, WhatsApp messages, or enter data manually from any source.'
              },
              {
                icon: BarChart3,
                step: '2',
                title: 'AI Analyzes Needs',
                description: 'Our AI processes the data, identifies patterns, and ranks areas by priority.'
              },
              {
                icon: CheckCircle,
                step: '3',
                title: 'Allocate Resources',
                description: 'Get smart recommendations and track the real-world impact of your donations.'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-cyan-600 shadow-lg">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Start making data-driven impact today
            </h2>
            <p className="text-xl text-cyan-50 mb-8">
              Join NGOs and donors who are transforming how aid reaches those who need it most
            </p>
            <Button 
              size="lg" 
              onClick={() => navigate('/signup')}
              className="bg-white text-cyan-600 hover:bg-gray-100 text-lg px-8"
            >
              Sign Up Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm">© 2026 Smart Aid. Making every contribution count.</p>
        </div>
      </footer>
    </div>
  );
};