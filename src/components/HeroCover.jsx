import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Cloud, Database } from 'lucide-react';

export default function HeroCover() {
  return (
    <section className="relative w-full" aria-label="Hero">
      <div className="relative h-[72vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-neutral-950/80" />
        <div className="relative z-10 flex h-full w-full items-center justify-center px-6 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Shield className="h-3.5 w-3.5" />
              End-to-end secure file submissions
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              File Submission Portal
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              Auth by Clerk. Realtime middleware by Supabase. Cloud storage on Google Drive. A modern, secure, and scalable platform for students, faculty, and administrators.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#features" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-white/90">
                <Rocket className="h-4 w-4" />
                Get Started
              </a>
              <a href="#showcase" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20">
                <Cloud className="h-4 w-4" />
                Explore Features
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 items-center gap-6 text-center text-xs text-white/70 sm:text-sm">
              <div className="flex items-center justify-center gap-2"><Shield className="h-4 w-4" /> HTTPS + JWT</div>
              <div className="flex items-center justify-center gap-2"><Database className="h-4 w-4" /> Postgres Metadata</div>
              <div className="flex items-center justify-center gap-2"><Cloud className="h-4 w-4" /> Google Drive Storage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
