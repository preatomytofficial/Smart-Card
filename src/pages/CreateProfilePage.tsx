import { useState, useRef, useMemo, useEffect } from 'react';
import { Link2, ArrowLeft, Upload, Download, Copy, Check, User, ImageIcon, AlertCircle, Eye, Code2, Palette } from 'lucide-react';
import { navigate } from '../lib/router';
import { AllAds, CopyrightFooter } from '../components/Ads';

interface FormData {
  name: string;
  bio: string;
  photoUrl: string;
  logoUrl: string;
  facebook: string;
  instagram: string;
  tiktok: string;
  youtube: string;
  telegram: string;
  twitter: string;
  whatsapp: string;
  linkedin: string;
  website: string;
}

const defaultForm: FormData = {
  name: '', bio: '', photoUrl: '', logoUrl: '',
  facebook: '', instagram: '', tiktok: '', youtube: '',
  telegram: '', twitter: '', whatsapp: '', linkedin: '', website: '',
};

type TemplateKey = 'emerald' | 'sunset' | 'ocean' | 'midnight' | 'rose' | 'mono';

const TEMPLATES: { key: TemplateKey; name: string; desc: string; preview: string }[] = [
  { key: 'emerald', name: 'Emerald', desc: 'Fresh & vibrant', preview: 'from-emerald-400 to-cyan-500' },
  { key: 'sunset', name: 'Sunset', desc: 'Warm & bold', preview: 'from-orange-400 to-rose-500' },
  { key: 'ocean', name: 'Ocean', desc: 'Cool & calm', preview: 'from-blue-400 to-cyan-500' },
  { key: 'midnight', name: 'Midnight', desc: 'Dark & sleek', preview: 'from-slate-700 to-slate-900' },
  { key: 'rose', name: 'Rose', desc: 'Soft & elegant', preview: 'from-rose-400 to-pink-600' },
  { key: 'mono', name: 'Mono', desc: 'Minimal & clean', preview: 'from-gray-400 to-gray-600' },
];

const SOCIAL_FIELDS = [
  { key: 'facebook', label: 'Facebook', placeholder: 'yourpage', prefix: 'https://facebook.com/' },
  { key: 'instagram', label: 'Instagram', placeholder: 'yourusername', prefix: 'https://instagram.com/' },
  { key: 'tiktok', label: 'TikTok', placeholder: 'yourusername', prefix: 'https://tiktok.com/@' },
  { key: 'youtube', label: 'YouTube', placeholder: '@yourchannel', prefix: 'https://youtube.com/' },
  { key: 'telegram', label: 'Telegram', placeholder: 'yourusername', prefix: 'https://t.me/' },
  { key: 'twitter', label: 'X (Twitter)', placeholder: 'yourusername', prefix: 'https://x.com/' },
  { key: 'whatsapp', label: 'WhatsApp', placeholder: '1234567890', prefix: 'https://wa.me/' },
  { key: 'linkedin', label: 'LinkedIn', placeholder: 'yourprofile', prefix: 'https://linkedin.com/in/' },
  { key: 'website', label: 'Website', placeholder: 'https://yoursite.com', prefix: '' },
] as const;

const SOCIAL_ICONS: Record<string, string> = {
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.41-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.2 0 .4.02.6.05V9.33a6.33 6.33 0 00-.6-.03A6.34 6.34 0 005.2 20.1a6.34 6.34 0 0010.6-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-.98-.1z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M23.5 6.2a3.02 3.02 0 00-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 00.5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3.02 3.02 0 002.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 002.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.8zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/></svg>',
  telegram: '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>',
  twitter: '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.27 9.27 0 01-4.73-1.3l-.34-.2-3.52.92.94-3.43-.22-.35a9.26 9.26 0 01-1.42-4.93c0-5.12 4.17-9.28 9.3-9.28 2.48 0 4.82.97 6.57 2.72a9.23 9.23 0 012.72 6.58c0 5.12-4.17 9.28-9.29 9.28zM20.52 3.49A11.78 11.78 0 0012.04 0C5.46 0 .1 5.36.1 11.94c0 2.1.55 4.15 1.6 5.96L0 24l6.25-1.64a11.93 11.93 0 005.79 1.47h.01c6.58 0 11.94-5.36 11.94-11.94 0-3.19-1.24-6.19-3.47-8.4z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
  website: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
};

const TEMPLATE_STYLES: Record<TemplateKey, { bg: string; cardBg: string; accent: string; accentHover: string; text: string; subtext: string; border: string; btnBg: string; btnText: string; btnHover: string; avatarRing: string }> = {
  emerald: {
    bg: 'linear-gradient(135deg, #0a0f0d 0%, #0d1a14 50%, #0a0f0d 100%)',
    cardBg: 'rgba(255,255,255,0.06)',
    accent: '#10b981',
    accentHover: '#059669',
    text: '#ffffff',
    subtext: 'rgba(255,255,255,0.5)',
    border: 'rgba(255,255,255,0.1)',
    btnBg: 'rgba(255,255,255,0.08)',
    btnText: '#ffffff',
    btnHover: 'rgba(16,185,129,0.15)',
    avatarRing: 'rgba(16,185,129,0.3)',
  },
  sunset: {
    bg: 'linear-gradient(135deg, #1a0a05 0%, #1a0e08 50%, #1a0a05 100%)',
    cardBg: 'rgba(255,255,255,0.06)',
    accent: '#fb923c',
    accentHover: '#f97316',
    text: '#ffffff',
    subtext: 'rgba(255,255,255,0.5)',
    border: 'rgba(255,255,255,0.1)',
    btnBg: 'rgba(255,255,255,0.08)',
    btnText: '#ffffff',
    btnHover: 'rgba(251,146,60,0.15)',
    avatarRing: 'rgba(251,146,60,0.3)',
  },
  ocean: {
    bg: 'linear-gradient(135deg, #050a14 0%, #081428 50%, #050a14 100%)',
    cardBg: 'rgba(255,255,255,0.06)',
    accent: '#3b82f6',
    accentHover: '#2563eb',
    text: '#ffffff',
    subtext: 'rgba(255,255,255,0.5)',
    border: 'rgba(255,255,255,0.1)',
    btnBg: 'rgba(255,255,255,0.08)',
    btnText: '#ffffff',
    btnHover: 'rgba(59,130,246,0.15)',
    avatarRing: 'rgba(59,130,246,0.3)',
  },
  midnight: {
    bg: 'linear-gradient(135deg, #0a0a0f 0%, #12121a 50%, #0a0a0f 100%)',
    cardBg: 'rgba(255,255,255,0.04)',
    accent: '#64748b',
    accentHover: '#475569',
    text: '#ffffff',
    subtext: 'rgba(255,255,255,0.4)',
    border: 'rgba(255,255,255,0.08)',
    btnBg: 'rgba(255,255,255,0.06)',
    btnText: '#ffffff',
    btnHover: 'rgba(100,116,139,0.15)',
    avatarRing: 'rgba(100,116,139,0.3)',
  },
  rose: {
    bg: 'linear-gradient(135deg, #14050a 0%, #1a0814 50%, #14050a 100%)',
    cardBg: 'rgba(255,255,255,0.06)',
    accent: '#f43f5e',
    accentHover: '#e11d48',
    text: '#ffffff',
    subtext: 'rgba(255,255,255,0.5)',
    border: 'rgba(255,255,255,0.1)',
    btnBg: 'rgba(255,255,255,0.08)',
    btnText: '#ffffff',
    btnHover: 'rgba(244,63,94,0.15)',
    avatarRing: 'rgba(244,63,94,0.3)',
  },
  mono: {
    bg: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)',
    cardBg: 'rgba(255,255,255,0.05)',
    accent: '#9ca3af',
    accentHover: '#6b7280',
    text: '#ffffff',
    subtext: 'rgba(255,255,255,0.4)',
    border: 'rgba(255,255,255,0.1)',
    btnBg: 'rgba(255,255,255,0.07)',
    btnText: '#ffffff',
    btnHover: 'rgba(255,255,255,0.12)',
    avatarRing: 'rgba(255,255,255,0.15)',
  },
};

function buildUrl(key: string, value: string): string {
  const field = SOCIAL_FIELDS.find((f) => f.key === key);
  if (!field) return value;
  const trimmed = value.trim();
  if (!trimmed) return '';
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  if (field.prefix) return field.prefix + trimmed.replace(/^@/, '');
  return trimmed;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function generateHtml(data: FormData, template: TemplateKey): string {
  const s = TEMPLATE_STYLES[template];
  const activeLinks = SOCIAL_FIELDS.filter((f) => data[f.key]?.trim());

  const linksHtml = activeLinks.map((f) => {
    const url = buildUrl(f.key, data[f.key]);
    const icon = SOCIAL_ICONS[f.key] || '';
    return `    <a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" class="social-btn">
      <span class="icon">${icon}</span>
      <span>${escapeHtml(f.label)}</span>
    </a>`;
  }).join('\n');

  const photoHtml = data.photoUrl
    ? `<img src="${escapeHtml(data.photoUrl)}" alt="${escapeHtml(data.name)}" class="avatar" />`
    : `<div class="avatar avatar-fallback">${escapeHtml(data.name.charAt(0).toUpperCase() || '?')}</div>`;

  const logoHtml = data.logoUrl
    ? `<img src="${escapeHtml(data.logoUrl)}" alt="Logo" class="logo" />`
    : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(data.name)}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: ${s.bg};
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      color: ${s.text};
    }
    .card {
      width: 100%;
      max-width: 420px;
      background: ${s.cardBg};
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid ${s.border};
      border-radius: 32px;
      padding: 40px 32px;
      text-align: center;
      box-shadow: 0 25px 60px rgba(0,0,0,0.3);
    }
    .avatar-wrap { position: relative; display: inline-block; margin-bottom: 20px; }
    .avatar {
      width: 96px; height: 96px; border-radius: 50%;
      object-fit: cover;
      border: 4px solid ${s.avatarRing};
    }
    .avatar-fallback {
      display: flex; align-items: center; justify-content: center;
      font-size: 36px; font-weight: 700;
      background: linear-gradient(135deg, ${s.accent}, ${s.accentHover});
      color: #fff;
    }
    .logo {
      position: absolute; bottom: -4px; right: -4px;
      width: 36px; height: 36px; border-radius: 10px;
      object-fit: contain; background: rgba(255,255,255,0.9);
      border: 3px solid ${s.bg.includes('#0a0a0f') ? '#0a0a0f' : '#0f0f0f'};
      padding: 2px;
    }
    .name { font-size: 24px; font-weight: 700; margin-bottom: 6px; letter-spacing: -0.5px; }
    .bio { font-size: 15px; color: ${s.subtext}; margin-bottom: 28px; line-height: 1.5; }
    .links { display: flex; flex-direction: column; gap: 12px; }
    .social-btn {
      display: flex; align-items: center; gap: 14px;
      padding: 14px 20px; border-radius: 16px;
      background: ${s.btnBg}; border: 1px solid ${s.border};
      color: ${s.btnText}; text-decoration: none;
      font-size: 15px; font-weight: 500;
      transition: all 0.2s ease;
    }
    .social-btn:hover {
      background: ${s.btnHover};
      border-color: ${s.accent};
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    }
    .social-btn .icon {
      width: 40px; height: 40px; border-radius: 12px;
      background: rgba(255,255,255,0.06);
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .social-btn .icon svg { color: ${s.accent}; }
    .footer { margin-top: 32px; font-size: 13px; color: ${s.subtext}; }
    .footer a { color: ${s.accent}; text-decoration: none; }
    @media (max-width: 480px) {
      .card { padding: 32px 24px; border-radius: 24px; }
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="avatar-wrap">
      ${photoHtml}
      ${logoHtml}
    </div>
    <h1 class="name">${escapeHtml(data.name)}</h1>
    ${data.bio ? `<p class="bio">${escapeHtml(data.bio)}</p>` : ''}
    <div class="links">
${linksHtml}
    </div>
    <div class="footer">Created with <a href="https://smartcard-chi.vercel.app/" target="_blank" rel="noopener noreferrer">SmartCard</a></div>
  </div>
</body>
</html>`;
}

export default function CreateProfilePage() {
  const [form, setForm] = useState<FormData>(() => {
    try {
      const saved = localStorage.getItem('smartcard_form');
      if (saved) return { ...defaultForm, ...JSON.parse(saved) };
    } catch {}
    return defaultForm;
  });
  const [template, setTemplate] = useState<TemplateKey>(() => {
    try {
      const saved = localStorage.getItem('smartcard_template');
      if (saved && ['emerald','sunset','ocean','midnight','rose','mono'].includes(saved)) return saved as TemplateKey;
    } catch {}
    return 'emerald';
  });
  const [view, setView] = useState<'form' | 'preview'>('form');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const previewRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    try { localStorage.setItem('smartcard_form', JSON.stringify(form)); } catch {}
  }, [form]);

  useEffect(() => {
    try { localStorage.setItem('smartcard_template', template); } catch {}
  }, [template]);

  const update = (key: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handlePhoto = (file: File | null) => {
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { setError('Photo must be under 5MB'); return; }
    const reader = new FileReader();
    reader.onload = () => update('photoUrl', reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleLogo = (file: File | null) => {
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { setError('Logo must be under 2MB'); return; }
    const reader = new FileReader();
    reader.onload = () => update('logoUrl', reader.result as string);
    reader.readAsDataURL(file);
  };

  const html = useMemo(() => generateHtml(form, template), [form, template]);

  const copyHtml = async () => {
    try {
      await navigator.clipboard.writeText(html);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError('Failed to copy. Try downloading instead.');
    }
  };

  const downloadHtml = () => {
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${form.name.toLowerCase().replace(/[^a-z0-9]/g, '-') || 'profile'}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

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
            <button onClick={() => navigate('/create')} className="text-white">Create</button>
            <button onClick={() => navigate('/publish')} className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">Publish Now</button>
          </div>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Home
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Create Your Profile Card</h1>
          <p className="text-white/50">Enter your details, pick a template, and get a complete HTML file to copy or download.</p>
        </div>

        {/* View toggle */}
        <div className="inline-flex p-1 rounded-full bg-white/5 border border-white/10 mb-8">
          <button
            onClick={() => setView('form')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${view === 'form' ? 'bg-white text-[#0a0a0f]' : 'text-white/60 hover:text-white'}`}
          >
            <User className="w-4 h-4" /> Form
          </button>
          <button
            onClick={() => setView('preview')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${view === 'preview' ? 'bg-white text-[#0a0a0f]' : 'text-white/60 hover:text-white'}`}
          >
            <Eye className="w-4 h-4" /> Preview
          </button>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8">
          {/* Left: Form or Preview */}
          <div>
            {view === 'form' ? (
              <div className="space-y-8">
                {/* Template selector */}
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                  <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Palette className="w-5 h-5 text-emerald-400" />
                    Choose Template
                  </h2>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                    {TEMPLATES.map((t) => (
                      <button
                        key={t.key}
                        onClick={() => setTemplate(t.key)}
                        className={`group text-center transition-all ${template === t.key ? 'scale-105' : 'opacity-70 hover:opacity-100'}`}
                      >
                        <div className={`w-full aspect-square rounded-xl bg-gradient-to-br ${t.preview} mb-1.5 ${template === t.key ? 'ring-2 ring-white ring-offset-2 ring-offset-[#0a0a0f]' : ''}`} />
                        <p className="text-xs text-white/60">{t.name}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Basic Info */}
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                  <h2 className="font-semibold text-lg mb-5 flex items-center gap-2">
                    <User className="w-5 h-5 text-emerald-400" />
                    Basic Information
                  </h2>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm text-white/70 mb-2">Full Name *</label>
                      <input type="text" value={form.name} onChange={(e) => update('name', e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-emerald-400/50 focus:bg-white/8 transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm text-white/70 mb-2">Bio</label>
                      <textarea value={form.bio} onChange={(e) => update('bio', e.target.value)}
                        placeholder="Creator & Digital Artist" rows={3} maxLength={200}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-emerald-400/50 focus:bg-white/8 transition-all resize-none" />
                      <p className="text-xs text-white/30 mt-1 text-right">{form.bio.length}/200</p>
                    </div>
                  </div>
                </div>

                {/* Images */}
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                  <h2 className="font-semibold text-lg mb-5 flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-cyan-400" />
                    Images
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <ImageUpload label="Profile Photo" preview={form.photoUrl} onFile={handlePhoto} onClear={() => update('photoUrl', '')} />
                    <ImageUpload label="Logo" preview={form.logoUrl} onFile={handleLogo} onClear={() => update('logoUrl', '')} small />
                  </div>
                </div>

                {/* Social Links */}
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                  <h2 className="font-semibold text-lg mb-5 flex items-center gap-2">
                    <Link2 className="w-5 h-5 text-blue-400" />
                    Social Media Links
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {SOCIAL_FIELDS.map((social) => (
                      <div key={social.key}>
                        <label className="block text-sm text-white/70 mb-2">{social.label}</label>
                        <input type="text" value={form[social.key]} onChange={(e) => update(social.key, e.target.value)}
                          placeholder={social.placeholder}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-emerald-400/50 focus:bg-white/8 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>

                {error && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" /> {error}
                  </div>
                )}
              </div>
            ) : (
              /* Live iframe preview */
              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4">
                <iframe
                  ref={previewRef}
                  srcDoc={html}
                  title="Profile Preview"
                  className="w-full h-[600px] rounded-xl border-0 bg-transparent"
                />
              </div>
            )}
          </div>

          {/* Right: Output panel */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6">
              <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-emerald-400" />
                Your HTML File
              </h2>
              <p className="text-sm text-white/40 mb-5">
                Your complete HTML file is ready. Copy it to your clipboard or download it as a file.
              </p>

              <div className="space-y-3">
                <button
                  onClick={copyHtml}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-500 text-[#0a0a0f] font-semibold text-sm hover:shadow-2xl hover:shadow-emerald-500/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  {copied ? <><Check className="w-4 h-4" /> Copied!</> : <><Copy className="w-4 h-4" /> Copy HTML</>}
                </button>
                <button
                  onClick={downloadHtml}
                  className="w-full py-3.5 rounded-xl bg-white/5 border border-white/15 text-white font-semibold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download HTML
                </button>
              </div>

              <div className="mt-5 pt-5 border-t border-white/10">
                <p className="text-xs text-white/40 mb-2">Template: <span className="text-white/60 font-medium">{TEMPLATES.find(t => t.key === template)?.name}</span></p>
                <p className="text-xs text-white/40 mb-2">Active links: <span className="text-white/60 font-medium">{SOCIAL_FIELDS.filter(f => form[f.key]?.trim()).length}</span></p>
                <p className="text-xs text-white/40">File size: <span className="text-white/60 font-medium">{(html.length / 1024).toFixed(1)} KB</span></p>
              </div>

              <div className="mt-5 p-3 rounded-xl bg-amber-500/5 border border-amber-500/15">
                <p className="text-xs text-amber-300/70 leading-relaxed">
                  Images are embedded directly in the HTML as base64. The file is fully self-contained — no external dependencies needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AllAds />
      <CopyrightFooter />
    </div>
  );
}

function ImageUpload({ label, preview, onFile, onClear, small }: {
  label: string;
  preview: string;
  onFile: (file: File | null) => void;
  onClear: () => void;
  small?: boolean;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <label className="block text-sm text-white/70 mb-2">{label}</label>
      <div
        onClick={() => !preview && inputRef.current?.click()}
        className={`relative ${small ? 'aspect-square' : 'aspect-square'} rounded-2xl border-2 border-dashed border-white/15 hover:border-emerald-400/40 hover:bg-white/[0.04] transition-all cursor-pointer flex items-center justify-center overflow-hidden group ${preview ? 'border-solid' : ''}`}
      >
        {preview ? (
          <>
            <img src={preview} alt={label} className={`w-full h-full ${small ? 'object-contain p-2' : 'object-cover'}`} />
            <button
              onClick={(e) => { e.stopPropagation(); onClear(); }}
              className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 hover:bg-rose-500/80 text-white flex items-center justify-center text-xs transition-all"
            >
              x
            </button>
          </>
        ) : (
          <div className="text-center text-white/30 group-hover:text-white/50 transition-colors">
            <Upload className="w-8 h-8 mx-auto mb-2" />
            <p className="text-xs">Click to upload</p>
          </div>
        )}
      </div>
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => onFile(e.target.files?.[0] || null)} />
    </div>
  );
}
