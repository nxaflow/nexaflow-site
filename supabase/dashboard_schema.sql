-- NexaFlow dashboard setup for Supabase.
-- Run this in the Supabase SQL editor, then create Supabase Auth users for the boss/team.
-- The dashboard uses the authenticated user's JWT and never needs a service_role key in the browser.

begin;

create table if not exists public.dashboard_clients (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text,
  email text,
  service_type text not null default 'General request',
  status text not null default 'new',
  urgency text not null default 'medium',
  preferred_date date,
  address text,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.dashboard_tasks (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references public.dashboard_clients(id) on delete set null,
  client_name text,
  title text not null,
  status text not null default 'open',
  priority text not null default 'medium',
  due_date date,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.dashboard_appointments (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references public.dashboard_clients(id) on delete set null,
  client_name text,
  service_type text not null default 'Appointment',
  scheduled_at timestamptz not null,
  status text not null default 'scheduled',
  address text,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.availability_rules (
  id uuid primary key default gen_random_uuid(),
  rule_date date not null unique,
  status text not null default 'unavailable'
    check (status in ('available', 'unavailable')),
  reason text,
  created_by uuid default auth.uid() references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.dashboard_clients enable row level security;
alter table public.dashboard_tasks enable row level security;
alter table public.dashboard_appointments enable row level security;
alter table public.availability_rules enable row level security;

drop policy if exists "dashboard_clients_authenticated_select" on public.dashboard_clients;
drop policy if exists "dashboard_tasks_authenticated_select" on public.dashboard_tasks;
drop policy if exists "dashboard_appointments_authenticated_select" on public.dashboard_appointments;
drop policy if exists "availability_rules_authenticated_select" on public.availability_rules;
drop policy if exists "availability_rules_authenticated_insert" on public.availability_rules;
drop policy if exists "availability_rules_authenticated_update" on public.availability_rules;
drop policy if exists "availability_rules_authenticated_delete" on public.availability_rules;

create policy "dashboard_clients_authenticated_select"
on public.dashboard_clients
for select
to authenticated
using (true);

create policy "dashboard_tasks_authenticated_select"
on public.dashboard_tasks
for select
to authenticated
using (true);

create policy "dashboard_appointments_authenticated_select"
on public.dashboard_appointments
for select
to authenticated
using (true);

create policy "availability_rules_authenticated_select"
on public.availability_rules
for select
to authenticated
using (true);

create policy "availability_rules_authenticated_insert"
on public.availability_rules
for insert
to authenticated
with check (true);

create policy "availability_rules_authenticated_update"
on public.availability_rules
for update
to authenticated
using (true)
with check (true);

create policy "availability_rules_authenticated_delete"
on public.availability_rules
for delete
to authenticated
using (true);

-- Explicit grants keep the Data API working as Supabase rolls out stricter defaults.
grant usage on schema public to authenticated;
grant select on public.dashboard_clients to authenticated;
grant select on public.dashboard_tasks to authenticated;
grant select on public.dashboard_appointments to authenticated;
grant select, insert, update, delete on public.availability_rules to authenticated;

commit;
