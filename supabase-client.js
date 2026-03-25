import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

window.supabase = url && key ? createClient(url, key) : null;

const anthropic = import.meta.env.VITE_ANTHROPIC_API_KEY;
window.__ANTHROPIC_API_KEY__ = typeof anthropic === 'string' && anthropic.trim() ? anthropic.trim() : '';

window.__supabaseReady = true;
window.dispatchEvent(new CustomEvent('supabase:ready'));
