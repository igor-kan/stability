
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Globe, Wallet, Code, TrendingUp, Shield, Users, Banknote, Smartphone, Building, Coins } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Coins className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold text-white">StableStack</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
              <a href="#products" className="text-white/80 hover:text-white transition-colors">Products</a>
              <a href="#developers" className="text-white/80 hover:text-white transition-colors">Developers</a>
            </div>
            <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold">
              Get Early Access
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-green-500/20 text-green-300 border-green-500/30">
            The Spotify Moment for Money
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8">
            The Financial OS for the
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              {" "}Stablecoin Era
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Fast, global, programmable money infrastructure for 500M+ underserved users and millions of businesses. 
            Built for the transition from legacy banking to stablecoin finance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black font-semibold text-lg px-8 py-4">
              Start Building <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
              View Documentation
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">$136B</div>
              <div className="text-white/60 text-sm">Stablecoins Issued</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">500M+</div>
              <div className="text-white/60 text-sm">High Inflation Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">$17T</div>
              <div className="text-white/60 text-sm">Bank Deposits at Risk</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">30%</div>
              <div className="text-white/60 text-sm">Remittances via Stables</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features" className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Stablecoins Will Win</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              The utility is so straightforward it seems inevitable traditional finance will follow suit.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Zap className="h-12 w-12 text-green-400 mb-4" />
                <CardTitle className="text-white">Instant Settlement</CardTitle>
                <CardDescription className="text-white/70">
                  Transactions settle in seconds, not days. 24/7 global availability.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Globe className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-white">Borderless Payments</CardTitle>
                <CardDescription className="text-white/70">
                  Send money anywhere in the world with minimal fees and no intermediaries.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Shield className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Inflation Protection</CardTitle>
                <CardDescription className="text-white/70">
                  Preserve purchasing power with USD-pegged stablecoins in any country.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Architecture */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Complete Stablecoin Infrastructure</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Modular platform bringing stablecoin-powered finance to individuals, businesses, and developers.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* B2B Products */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Building className="h-8 w-8 text-green-400 mr-3" />
                For Businesses
              </h3>
              
              <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Wallet className="h-6 w-6 text-green-400 mr-2" />
                    Treasury Management
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Multi-chain wallets, payroll automation, yield generation, and accounting integrations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-green-500/20 text-green-300">Cross-border Payments</Badge>
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">Global Payroll</Badge>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">DeFi Yields</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Code className="h-6 w-6 text-blue-400 mr-2" />
                    Developer APIs
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Unified APIs and SDKs for seamless stablecoin integration across platforms.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-green-500/20 text-green-300">REST APIs</Badge>
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">SDKs</Badge>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">Webhooks</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Consumer Products */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Users className="h-8 w-8 text-blue-400 mr-3" />
                For Consumers
              </h3>
              
              <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Smartphone className="h-6 w-6 text-purple-400 mr-2" />
                    Stablecoin Super App
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Send, receive, and save with stablecoins. AI budgeting and automatic conversions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-green-500/20 text-green-300">Remittances</Badge>
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">Savings Vaults</Badge>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">AI Assistant</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <TrendingUp className="h-6 w-6 text-yellow-400 mr-2" />
                    Stablecoin-as-a-Service
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Help banks and fintechs issue their own stablecoins with compliance and custody tools.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-green-500/20 text-green-300">KYC/AML</Badge>
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">Custody</Badge>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">Auditing</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section id="developers" className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Built for Developers</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Simple APIs, comprehensive SDKs, and powerful tools to integrate stablecoins into any application.
            </p>
          </div>
          
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Get Started in Minutes</h3>
                <p className="text-white/70 mb-6">
                  Unified API for sending, receiving, and converting stablecoins across multiple chains.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Multi-chain support (Ethereum, Polygon, Arbitrum)
                  </div>
                  <div className="flex items-center text-blue-400">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Gas abstraction and automatic routing
                  </div>
                  <div className="flex items-center text-purple-400">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Real-time webhooks and notifications
                  </div>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 border border-white/10">
                <div className="text-green-400 text-sm mb-2">// Send USDC cross-border</div>
                <div className="text-white font-mono text-sm">
                  <div className="text-blue-300">const</div> <span className="text-white">transaction</span> <span className="text-purple-300">=</span> <span className="text-blue-300">await</span> <span className="text-yellow-300">stablestack</span><span className="text-white">.</span><span className="text-green-300">send</span><span className="text-white">({"{"}</span>
                  <div className="ml-4">
                    <div><span className="text-blue-300">amount:</span> <span className="text-yellow-300">'1000'</span><span className="text-white">,</span></div>
                    <div><span className="text-blue-300">currency:</span> <span className="text-yellow-300">'USDC'</span><span className="text-white">,</span></div>
                    <div><span className="text-blue-300">to:</span> <span className="text-yellow-300">'recipient@email.com'</span><span className="text-white">,</span></div>
                    <div><span className="text-blue-300">chain:</span> <span className="text-yellow-300">'auto'</span></div>
                  </div>
                  <div><span className="text-white">{"}"});</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join the Financial Revolution
          </h2>
          <p className="text-xl text-white/70 mb-12">
            Be part of building the infrastructure for the next generation of global finance. 
            This is the Spotify moment for money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black font-semibold text-lg px-8 py-4">
              Apply to Build <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Coins className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold text-white">StableStack</span>
            </div>
            <div className="text-white/60 text-sm">
              © 2024 StableStack. Building the future of programmable money.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
