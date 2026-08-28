import { Link2, Share2, Zap, ArrowRight, Palette, Users, Globe, Sparkles, Download, Smartphone } from 'lucide-react';
import { navigate } from '../lib/router';
import { AllAds, CopyrightFooter } from '../components/Ads';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0a0f]/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Link2 className="w-5 h-5 text-[#0a0a0f]" strokeWidth={2.5} />
            </div>
            <span className="font-semibold text-lg tracking-tight">SmartCard</span>
          </div>
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
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#0a0a0f_70%)]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Free forever — no sign up required
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            All your links,
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              one smart card.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Create a beautiful digital profile card with your photo, logo, and all
            your social accounts. Get a complete HTML file you can host anywhere —
            free, fast, and no account needed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/create')}
              className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-[#0a0a0f] font-semibold text-base hover:shadow-2xl hover:shadow-emerald-500/30 transition-all hover:scale-105 flex items-center gap-2"
            >
              Create Your Card
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/examples')}
              className="px-8 py-3.5 rounded-full border border-white/15 text-white/80 font-medium text-base hover:bg-white/5 transition-all"
            >
              See Examples
            </button>
          </div>
        </div>

        {/* Floating card preview */}
        <div className="relative max-w-sm mx-auto mt-20 perspective-[1000px]">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 mb-4 flex items-center justify-center text-2xl font-bold text-[#0a0a0f]">
                JD
              </div>
              <h3 className="font-semibold text-lg">John Doe</h3>
              <p className="text-sm text-white/40 mb-5">Creator & Digital Artist</p>
              <div className="w-full space-y-2.5">
                {['Instagram', 'YouTube', 'TikTok', 'Website'].map((s, i) => (
                  <div
                    key={s}
                    className="w-full py-2.5 rounded-xl bg-white/8 border border-white/10 text-sm text-white/70 flex items-center justify-center"
                    style={{ opacity: 1 - i * 0.1 }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features preview */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Everything you need, nothing you don't
            </h2>
            <p className="text-white/50 text-lg">Powerful features packed into a clean, simple interface.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Download, title: 'Downloadable HTML', desc: 'Get a complete standalone HTML file with all your details baked in. Host it anywhere.', color: 'emerald' },
              { icon: Share2, title: 'All Social Platforms', desc: 'Facebook, Instagram, TikTok, YouTube, Telegram, X, WhatsApp, LinkedIn, and your website.', color: 'cyan' },
              { icon: Palette, title: 'Photo & Logo Upload', desc: 'Add a profile photo and a custom logo to make your card truly yours.', color: 'blue' },
              { icon: Zap, title: 'Instant Generation', desc: 'Enter your details, click generate, and get your HTML file in seconds.', color: 'amber' },
              { icon: Smartphone, title: 'Mobile-First Design', desc: 'Your card looks stunning on any device — phone, tablet, or desktop.', color: 'rose' },
              { icon: Globe, title: 'Works Everywhere', desc: 'Your generated HTML file works on any hosting platform. No server needed.', color: 'violet' },
            ].map((f) => (
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
          <div className="text-center mt-10">
            <button
              onClick={() => navigate('/features')}
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
            >
              See all features
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.15),transparent_60%)]" />
            <div className="relative">
              <Users className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to build your card?</h2>
              <p className="text-white/50 text-lg mb-8">It takes less than 2 minutes. No account, no credit card, no catch.</p>
              <button
                onClick={() => navigate('/create')}
                className="group px-8 py-3.5 rounded-full bg-white text-[#0a0a0f] font-semibold text-base hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
