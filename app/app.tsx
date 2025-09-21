"use client"
import { 
  Clock, 
  Users, 
  Smartphone, 
  ArrowRight,
  Menu,
  X,
  BarChart3,
  MessageSquare,
  Zap,
  Star,
  Check,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  ClipboardList
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Token Issuing",
      description: "Generate digital tokens instantly with QR codes or kiosk systems for seamless customer onboarding."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-Time Queue Updates",
      description: "Live queue status updates keep customers informed about wait times and their position in line."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into queue performance, customer patterns, and operational efficiency."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "SMS/WhatsApp Notifications",
      description: "Automated notifications via SMS and WhatsApp to keep customers updated wherever they are."
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Customer Gets Token",
      description: "Customer scans QR code or uses kiosk to receive their digital queue token with unique number."
    },
    {
      step: "2", 
      title: "App Notifies When Turn Arrives",
      description: "Real-time notifications via SMS, WhatsApp, or app alert when it's their turn for service."
    },
    {
      step: "3",
      title: "Service Completed",
      description: "Smooth service delivery with feedback collection and queue completion confirmation."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Clinic Manager",
      company: "HealthCare Plus",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Queue Manager transformed our patient experience. Wait times reduced by 60% and patient satisfaction is at an all-time high!"
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      company: "City Bank",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "The analytics dashboard gives us incredible insights. We've optimized our staffing and improved customer flow significantly."
    },
    {
      name: "Emma Rodriguez",
      role: "Store Manager",
      company: "TechStore Pro",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Our customers love the WhatsApp notifications. They can shop around while waiting and never miss their turn. Brilliant solution!"
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 50 tokens per day",
        "Basic queue management",
        "SMS notifications",
        "Email support"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Unlimited tokens",
        "Advanced analytics",
        "SMS + WhatsApp notifications",
        "Multi-location support",
        "Priority support",
        "Custom branding"
      ],
      buttonText: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with specific needs",
      features: [
        "Everything in Pro",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
        "On-premise deployment"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter">

      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <ClipboardList className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">QueueIt</span>
              </div>
            </div>

            <div className="hidden lg:flex">
              <div className="flex items-center space-x-8">
                <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Features</a>
                <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">How it Works</a>
                <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Testimonials</a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Pricing</a>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Get Started
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>


        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200">Features</a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200">How it Works</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200">Testimonials</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200">Pricing</a>
            </div>
          </div>
        )}
      </nav>

      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          

          <div className="absolute top-20 left-10 animate-float">
            <Users className="w-8 h-8 text-blue-300 opacity-60" />
          </div>
          <div className="absolute top-32 right-20 animate-float-delayed">
            <Clock className="w-6 h-6 text-purple-300 opacity-60" />
          </div>
          <div className="absolute bottom-32 left-1/4 animate-float-slow">
            <Smartphone className="w-7 h-7 text-pink-300 opacity-60" />
          </div>
          <div className="absolute top-1/2 right-10 animate-float">
            <BarChart3 className="w-6 h-6 text-blue-300 opacity-60" />
          </div>
          <div className="absolute bottom-20 right-1/3 animate-float-delayed">
            <MessageSquare className="w-5 h-5 text-purple-300 opacity-60" />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight text-gray-900">
              Manage Queues Effortlessly
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                with tokens system
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A smart way to handle queues, issue tokens, and streamline customer flow. 
              Transform waiting into a seamless experience for your business and customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Link href={'/dashboard'}>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 md:px-18 py-4  rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
            </button>
            </Link> 
            </div>
            <div className="mt-8 text-sm text-gray-500">
              <p>Trusted by 1,000+ businesses worldwide • No setup fees • Cancel anytime</p>
            </div>
          </div>
        </div>
      </section>


      <section id="features" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to create exceptional queue experiences and boost operational efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-blue-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="how-it-works" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Simple, intuitive, and efficient. Get your queue system running in three easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform translate-x-1/2 z-0" />
                )}
                <div className="relative z-10 bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="testimonials" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied businesses who have transformed their customer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="pricing" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your business. Start free and scale as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 ${
                  plan.popular ? 'border-blue-500 relative' : 'border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg transform hover:scale-105' 
                        : 'border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Queue Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses that have already revolutionized their customer service with Queue Manager.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={'/dashboard'}>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Start Your Free Trial
            </button>
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-200">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>


      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Queue Manager</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                The smart way to handle queues, issue tokens, and streamline customer flow. 
                Transform your business operations today.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-white">Product</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">Features</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">Pricing</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">Integrations</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">API</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-white">Company</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">About</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">Contact</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Queue Manager. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;