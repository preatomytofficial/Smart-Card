import { useEffect, useRef } from 'react';

export function NativeBannerAd() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = 'https://pl30356443.effectivecpmnetwork.com/5f6d9ee114458e1e233d5589860d308c/invoke.js';
    document.body.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <div className="w-full flex justify-center my-6">
      <div ref={containerRef} id="container-5f6d9ee114458e1e233d5589860d308c" />
    </div>
  );
}

export function Banner728x90Ad() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = '';

    const configScript = document.createElement('script');
    configScript.textContent = `
      atOptions = {
        'key' : '675a4b5c9aba48aa72a681810743542f',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `;
    container.appendChild(configScript);

    const invokeScript = document.createElement('script');
    invokeScript.src = 'https://www.highperformanceformat.com/675a4b5c9aba48aa72a681810743542f/invoke.js';
    container.appendChild(invokeScript);
  }, []);

  return (
    <div className="w-full flex justify-center my-6">
      <div ref={containerRef} />
    </div>
  );
}

export function PopunderAd() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://pl30356441.effectivecpmnetwork.com/67/35/6f/67356f0eeb23f737116b52b372b3d59e.js';
    document.body.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return null;
}

export function SocialBarAd() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://pl30356442.effectivecpmnetwork.com/ac/d0/bb/acd0bb8598bccc6dae5282ba24f06575.js';
    document.body.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return null;
}

export function AllAds() {
  return (
    <>
      <PopunderAd />
      <SocialBarAd />
      <NativeBannerAd />
      <Banner728x90Ad />
    </>
  );
}

export function CopyrightFooter() {
  return (
    <div className="text-center text-sm text-white/30 py-4">
      &copy; 2026 Created By <span className="text-white/50 font-medium">PreatomYT</span>
    </div>
  );
}
