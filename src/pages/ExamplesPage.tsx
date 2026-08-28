import { Link2, ArrowLeft, Sparkles, Eye } from 'lucide-react';
import { navigate } from '../lib/router';
import { AllAds, CopyrightFooter } from '../components/Ads';

export default function ExamplesPage() {
  const examples = [
    {
      title: 'Creator Card',
      desc: 'Perfect for YouTubers, TikTok stars, and influencers. Bold gradient background with prominent social buttons.',
      gradient: 'from-rose-500/20 via-orange-500/15 to-amber-500/20',
      accent: 'rose',
      name: 'Alex Rivera',
      bio: 'Content Creator & Streamer',
      initials: 'AR',
      links: ['YouTube', 'TikTok', 'Instagram', 'Twitter'],
    },
    {
      title: 'Business Card',
      desc: 'Clean and professional for shop owners, agencies, and freelancers. Minimal design with a corporate feel.',
      gradient: 'from-blue-500/20 via-cyan-500/15 to-teal-500/20',
      accent: 'blue',
      name: 'Sarah Chen',
      bio: 'Founder & Creative Director',
      initials: 'SC',
      links: ['LinkedIn', 'Website', 'Facebook', 'WhatsApp'],
    },
    {
      title: 'Student Card',
      desc: 'Fresh and modern for students. Showcase your portfolio, resume, and projects with a vibrant look.',
      gradient: 'from-emerald-500/20 via-green-500/15 to-teal-500/20',
      accent: 'emerald',
      name: 'Jordan Lee',
      bio: 'CS Student & Developer',
      initials: 'JL',
      links: ['GitHub', 'LinkedIn', 'Website', 'Instagram'],
    },
    {
      title: 'Minimal Card',
      desc: 'Ultra-clean design with lots of white space. Perfect for those who want their content to speak for itself.',
      gradient: 'from-slate-500/15 via-gray-500/10 to-zinc-500/15',
      accent: 'slate',
      name: 'Maya Patel',
      bio: 'Designer & Photographer',
      initials: 'MP',
      links: ['Instagram', 'Website', 'YouTube', 'LinkedIn'],
    },
    {
      title: 'Bold Card',
      desc: 'Eye-catching gradients and large buttons. Designed to stand out and grab attention instantly.',
      gradient: 'from-violet-500/20 via-fuchsia-500/15 to-pink-500/20',
      accent: 'fuchsia',
      name: 'Chris Vega',
      bio: 'Music Producer & DJ',
      initials: 'CV',
      links: ['YouTube', 'Instagram', 'TikTok', 'Website'],
    },
    {
      title: 'Warm Card',
      desc: 'Inviting warm tones with soft shadows. Great for personal brands and lifestyle creators.',
      gradient: 'from-amber-500/20 via-orange-500/15 to-rose-500/20',
      accent: 'amber',
      name: 'Tom Baker',
      bio: 'Travel Blogger & Foodie',
      initials: 'TB',
      links: ['Instagram', 'YouTube', 'Facebook', 'Website'],
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
            <button onClick={() => navigate('/examples')} className="text-white">Examples</button>
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

      <section className="relative pt-20 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-cyan-500/12 rounded-full blur-[120px]" />
          <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 mb-6">
            <Eye className="w-3.5 h-3.5 text-cyan-400" />
            See what's possible
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            Template examples
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              for every style.
            </span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Preview the card designs below. When you create your own, you'll get a complete HTML file with your details baked in.
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examples.map((ex) => (
              <div key={ex.title} className="group">
                {/* Mini card preview */}
                <div className={`relative rounded-3xl bg-gradient-to-br ${ex.gradient} border border-white/10 p-6 mb-4 overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:border-white/20`}>
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${ex.accent}-400 to-${ex.accent}-600 flex items-center justify-center text-xl font-bold text-white mb-3 shadow-lg`}>
                      {ex.initials}
                    </div>
                    <h3 className="font-semibold text-base">{ex.name}</h3>
                    <p className="text-xs text-white/50 mb-4">{ex.bio}</p>
                    <div className="w-full space-y-2">
                      {ex.links.map((link, i) => (
                        <div
                          key={link}
                          className="w-full py-2 rounded-xl bg-white/8 border border-white/10 text-xs text-white/70"
                          style={{ opacity: 1 - i * 0.08 }}
                        >
                          {link}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-1">
                  <h3 className="font-semibold text-lg mb-1">{ex.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{ex.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.15),transparent_60%)]" />
            <div className="relative">
              <Sparkles className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Like what you see?</h2>
              <p className="text-white/50 text-lg mb-8">Create your own card in minutes and get a downloadable HTML file.</p>
              <button
                onClick={() => navigate('/create')}
                className="group px-8 py-3.5 rounded-full bg-white text-[#0a0a0f] font-semibold text-base hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                Create Your Card
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
