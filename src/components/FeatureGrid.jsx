import React from 'react';
import { Lock, Database, Cloud, Zap, Upload, MessageSquare, BarChart, Calendar, Bot, Settings, Activity, Shield } from 'lucide-react';

const features = [
  {
    icon: <Lock className="h-5 w-5" />, title: 'Clerk Auth',
    desc: 'Seamless sign-up, login, and user management with JWT-based access control and webhooks.'
  },
  {
    icon: <Database className="h-5 w-5" />, title: 'Supabase Middleware',
    desc: 'Edge Functions bridge frontend and Google Drive. Realtime updates, triggers, and Postgres metadata.'
  },
  {
    icon: <Cloud className="h-5 w-5" />, title: 'Google Drive Storage',
    desc: 'Reliable file storage with per-user or per-course folders, permissions, and optional versioning.'
  },
  {
    icon: <Upload className="h-5 w-5" />, title: 'Bulk & Draft Uploads',
    desc: 'Upload multiple files, save drafts, and finalize when ready with checksum validation.'
  },
  {
    icon: <MessageSquare className="h-5 w-5" />, title: 'Inline Feedback & Chat',
    desc: 'Real-time comments, annotations, and faculty-student chat rooms for quicker iterations.'
  },
  {
    icon: <BarChart className="h-5 w-5" />, title: 'Analytics',
    desc: 'Track submission rates, grading timelines, activity logs, and engagement metrics.'
  },
  {
    icon: <Calendar className="h-5 w-5" />, title: 'Deadlines & Calendar',
    desc: 'Set course deadlines with reminders, ICS export, and timezone-aware scheduling.'
  },
  {
    icon: <Bot className="h-5 w-5" />, title: 'AI-Powered Feedback',
    desc: 'Optional AI assistance for preliminary feedback and rubric-aligned suggestions.'
  },
  {
    icon: <Settings className="h-5 w-5" />, title: 'Admin Controls',
    desc: 'Fine-grained roles, folder permissions, CSRF prevention, and encrypted storage.'
  },
  {
    icon: <Zap className="h-5 w-5" />, title: 'Performance',
    desc: 'Lazy loading, code splitting, caching strategies, and optional offline support.'
  },
  {
    icon: <Activity className="h-5 w-5" />, title: 'Webhooks & Sync',
    desc: 'Google Drive and Clerk webhooks keep metadata and user directories in perfect sync.'
  },
  {
    icon: <Shield className="h-5 w-5" />, title: 'Compliance',
    desc: 'Accessibility, i18n, and audit-ready activity logs for institutional requirements.'
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative -mt-6 scroll-mt-24 pb-4 pt-16 sm:pt-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-semibold sm:text-3xl">Built for Security, Speed, and Scale</h2>
        <p className="mt-3 text-sm text-white/70 sm:text-base">
          A cohesive stack where Clerk handles authentication, Supabase manages realtime logic and database,
          and Google Drive provides durable storage.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {features.map((f, i) => (
          <div key={i} className="group rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white">
                {f.icon}
              </span>
              <h3 className="text-sm font-semibold">{f.title}</h3>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-white/70">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
