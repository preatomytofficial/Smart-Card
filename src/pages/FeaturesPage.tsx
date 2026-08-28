import { Link2, ArrowLeft, Share2, Palette, Zap, Globe, Users, Download, Smartphone, MousePointerClick, Layers, Sparkles } from 'lucide-react';
import { navigate } from '../lib/router';
import { AllAds, CopyrightFooter } from '../components/Ads';

export default function FeaturesPage() {
  const features = [
    { icon: Palette, title: 'Photo & Logo Upload', desc: 'Add a profile photo and a custom logo to make your card truly yours. Both display prominently on your page.', color: 'emerald' },
    { icon: Share2, title: '8 Social Platforms', desc: 'Facebook, Instagram, TikTok, YouTube, Telegram, X (Twitter), WhatsApp, LinkedIn, and your website — all in one place.', color: 'cyan' },
    { icon: Download, title: 'Download & Copy HTML', desc: 'Get a complete standalone HTML file with all your details baked in. Copy it or download it — no server needed.', color: 'amber' },
    { icon: Zap, title: 'Instant Generation', desc: 'Enter your details, click generate, and get a fully styled HTML page in seconds. No waiting, no approval process.', color: 'rose' },
    { icon: Globe, title: 'Works Everywhere', desc: 'Your generated HTML file works on any device — phone, tablet, desktop. Fully responsive out of the box.', color: 'violet' },
    { icon: Smartphone, title: 'Mobile-First Design', desc: 'Every template is designed mobile-first, ensuring your card looks stunning on phones where most visitors will see it.', color: 'teal' },
    { icon: MousePointerClick, title: 'One-Tap Social Links', desc: 'Every social button opens in a new tab with a single tap. Smooth animations and hover states included.', color: 'orange' },
    { icon: Layers, title: 'Multiple Templates', desc: 'Choose from multiple professionally designed templates. Switch between them anytime without re-entering details.', color: 'pink' },
    { icon: Users, title: 'No Account Needed', desc: 'No sign-up, no login, no tracking. Just enter your details and get your file. Your data never leaves your browser.', color: 'indigo' },
    { icon: Sparkles, title: 'Premium Animations', desc: 'Buttery-smooth transitions, gradient effects, and micro-interactions that make your card feel alive.', color: 'fuchsia' },
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
            <button onClick={() => navigate('/features')} className="text-white">Features</button>
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

      <section className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-1/3 w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-[120px]" />
          <div className="absolute top-20 right-1/3 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Everything included, free forever
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            Powerful features,
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              beautifully simple.
            </span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Every tool you need to create a stunning digital profile card — from photo uploads to QR codes, all packaged into a downloadable HTML file.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-${f.color}-500/10 border border-${f.color}-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <f.icon className={`w-6 h-6 text-${f.color}-400`} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.15),transparent_60%)]" />
            <div className="relative">
              <h2 className="text-3xl font-bold mb-4">Ready to build your card?</h2>
              <p className="text-white/50 text-lg mb-8">It takes less than 2 minutes. No account, no credit card, no catch.</p>
              <button
                onClick={() => navigate('/create')}
                className="group px-8 py-3.5 rounded-full bg-white text-[#0a0a0f] font-semibold text-base hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                Get Started Free
                <ArrowLeft className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-12 px-6 border-t border-white/5">
        <AllAds />
        <CopyrightFooter />
      </footer>
    </div>
  );
}
