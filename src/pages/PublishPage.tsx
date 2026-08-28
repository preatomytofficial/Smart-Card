import { Link2, ArrowLeft, Rocket, Globe, Zap, Check, Download, Share2, Smartphone, Sparkles, FileCode2, UploadCloud } from 'lucide-react';
import { navigate } from '../lib/router';
import { AllAds, CopyrightFooter } from '../components/Ads';

export default function PublishPage() {
  const steps = [
    { num: '01', icon: FileCode2, title: 'Create Your Card', desc: 'Enter your name, bio, photo, logo, and social links in the form. Pick from 6 beautiful templates.', color: 'emerald' },
    { num: '02', icon: Download, title: 'Download HTML', desc: 'Click "Download HTML" to get a complete standalone file with all your details baked in. No server needed.', color: 'cyan' },
    { num: '03', icon: UploadCloud, title: 'Upload to Hosting', desc: 'Upload your HTML to Hostinger hosting provider.', color: 'blue' },
    { num: '04', icon: Globe, title: 'Share Your Link', desc: 'Your profile is now live at your custom URL. Share it on social media, business cards, or NFC tags.', color: 'amber' },
  ];

  const hostingPlans = [
    {
      name: 'Premium Web Hosting',
      desc: 'Perfect for personal sites and small projects. Includes free domain, SSL, and weekly backups.',
      url: 'https://www.hostinger.com/cart?product=hosting%3Ahostinger_premium&period=24&referral_type=cart_link&REFERRALCODE=preatomyt02&referral_id=019f5ebe-5e76-7371-aa5f-5849305ec279',
      badge: 'Most Popular',
      color: 'emerald',
    },
    {
      name: 'Business Web Hosting',
      desc: 'For growing businesses. Daily backups, free CDN, and up to 100 websites. Faster performance.',
      url: 'https://www.hostinger.com/cart?product=hosting%3Ahostinger_business&period=24&referral_type=cart_link&REFERRALCODE=preatomyt02&referral_id=019f5ebe-9482-7134-b782-114e4e9993bb',
      badge: 'Best Value',
      color: 'cyan',
    },
    {
      name: 'Cloud Startup',
      desc: 'Powerful cloud hosting with dedicated resources. Built for speed and high traffic sites.',
      url: 'https://www.hostinger.com/cart?product=hosting%3Acloud_economy&period=24&referral_type=cart_link&REFERRALCODE=preatomyt02&referral_id=019f5ebe-c862-73a4-8c26-15ee1af0d80c',
      badge: 'High Performance',
      color: 'blue',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
              <Link2 className="w-5 h-5 text-[#0a0a0f]" strokeWidth={2.5} />
            </div>
            <span className="font-semibold text-lg tracking-tight">SmartCard</span>
          </button>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <button onClick={() => navigate('/features')} className="hover:text-white transition-colors">Features</button>
            <button onClick={() => navigate('/examples')} className="hover:text-white transition-colors">Examples</button>
            <button onClick={() => navigate('/create')} className="hover:text-white transition-colors">Create</button>
            <button onClick={() => navigate('/publish')} className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">Publish Now</button>
          </div>
          <button
            onClick={() => navigate('/create')}
            className="px-5 py-2 rounded-full bg-white text-[#0a0a0f] text-sm font-medium hover:bg-white/90 transition-all hover:scale-105"
          >
            Create Profile
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-1/3 w-[500px] h-[400px] bg-emerald-500/15 rounded-full blur-[120px]" />
          <div className="absolute top-20 right-1/3 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-300 mb-8">
            <Rocket className="w-3.5 h-3.5" />
            Publish in minutes
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            Publish your card
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              to the world.
            </span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10">
            You've created your SmartCard HTML file. Now it's time to publish it online.
            Follow these simple steps to get your profile live on the internet.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/create')}
              className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-[#0a0a0f] font-semibold text-base hover:shadow-2xl hover:shadow-emerald-500/30 transition-all hover:scale-105 flex items-center gap-2"
            >
              <FileCode2 className="w-4 h-4" />
              Create Your Card First
            </button>
            <a
              href="https://smartcarddemo.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border border-white/15 text-white/80 font-medium text-base hover:bg-white/5 transition-all flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              View Live Demo
            </a>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight mb-3">How publishing works</h2>
            <p className="text-white/50 text-lg">Four simple steps from creation to going live.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="group relative p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-2xl bg-${step.color}-500/10 border border-${step.color}-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <step.icon className={`w-7 h-7 text-${step.color}-400`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-white/30">{step.num}</span>
                      <h3 className="font-semibold text-lg">{step.title}</h3>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hosting Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              v2.0
            </span>
            <h2 className="text-3xl font-bold tracking-tight mb-3">Where to host your file</h2>
            <p className="text-white/50 text-lg">Upload your HTML to Hostinger hosting provider.</p>
          </div>

          {/* Video tutorial */}
          <div className="max-w-3xl mx-auto mb-14">
            <a
              href="https://youtu.be/xjV5QzNHIT8?si=F2TRJrww7AJmWBTc"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl overflow-hidden border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-300"
            >
              <img
                src="/xjV5QzNHIT8-HD.jpg"
                alt="Watch how to upload your HTML file to Hostinger"
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-1"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
            </a>
            <p className="text-center text-sm text-white/40 mt-3">Watch how to upload your HTML file to Hostinger</p>
          </div>

          {/* Hostinger Plans */}
          <div className="grid md:grid-cols-3 gap-6">
            {hostingPlans.map((plan) => (
              <a
                key={plan.name}
                href={plan.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 flex flex-col"
              >
                <div className={`inline-flex self-start px-3 py-1 rounded-full bg-${plan.color}-500/10 border border-${plan.color}-500/20 text-xs font-medium text-${plan.color}-400 mb-4`}>
                  {plan.badge}
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-emerald-400 transition-colors">{plan.name}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-5 flex-1">{plan.desc}</p>
                <div className="flex items-center gap-2 text-sm text-emerald-400 font-medium">
                  Get Started
                  <ArrowLeft className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          {/* MEGA OFFER Button */}
          <div className="text-center mt-10">
            <a
              href="https://www.hostinger.com?REFERRALCODE=preatomyt02"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500 text-white font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              MEGA OFFER
              <ArrowLeft className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
            </a>
            <p className="text-sm text-white/40 mt-3">Click to grab the best hosting deal available</p>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-3">What you get when you publish</h2>
            <p className="text-white/50 text-lg">Everything needed for a professional online presence.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Globe, text: 'Your own live web page accessible from any browser' },
              { icon: Smartphone, text: 'Mobile-responsive design that works on all devices' },
              { icon: Share2, text: 'Shareable URL for social media, cards, and NFC tags' },
              { icon: Zap, text: 'Fast-loading page with no external dependencies' },
              { icon: Sparkles, text: 'Professional animations and hover effects' },
              { icon: Check, text: 'Self-contained HTML file — no database or server needed' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <p className="text-sm text-white/60">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.15),transparent_60%)]" />
            <div className="relative">
              <Rocket className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Ready to publish?</h2>
              <p className="text-white/50 text-lg mb-8">Create your card, download the HTML, and upload it to your hosting provider. It's that simple.</p>
              <button
                onClick={() => navigate('/create')}
                className="group px-8 py-3.5 rounded-full bg-white text-[#0a0a0f] font-semibold text-base hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                Start Creating
                <ArrowLeft className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <AllAds />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
              <Link2 className="w-4 h-4 text-[#0a0a0f]" strokeWidth={2.5} />
            </div>
            <span className="font-medium text-white/70">SmartCard</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/30">
            <button onClick={() => navigate('/features')} className="hover:text-white/60 transition-colors">Features</button>
            <button onClick={() => navigate('/examples')} className="hover:text-white/60 transition-colors">Examples</button>
            <button onClick={() => navigate('/create')} className="hover:text-white/60 transition-colors">Create</button>
            <button onClick={() => navigate('/publish')} className="text-emerald-400/60 hover:text-emerald-400 transition-colors font-medium">Publish Now</button>
          </div>
        </div>
        <CopyrightFooter />
      </footer>
    </div>
  );
}
