import React from 'react';

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950/50 py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-white/60">
          © {new Date().getFullYear()} File Submission Portal. Secured with Clerk · Powered by Supabase · Stored on Google Drive.
        </p>
        <nav className="flex items-center gap-4 text-xs text-white/70">
          <a className="hover:text-white" href="#features">Features</a>
          <a className="hover:text-white" href="#showcase">Showcase</a>
          <a className="hover:text-white" href="#">Docs</a>
        </nav>
      </div>
    </footer>
  );
}
