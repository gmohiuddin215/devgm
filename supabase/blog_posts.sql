create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null,
  content text not null,
  status text not null default 'draft' check (status in ('draft', 'published')),
  tags text[] not null default '{}',
  cover_image text,
  reading_time integer not null default 1,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists blog_posts_status_published_at_idx
  on public.blog_posts (status, published_at desc);

create index if not exists blog_posts_slug_idx
  on public.blog_posts (slug);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_blog_posts_updated_at on public.blog_posts;

create trigger set_blog_posts_updated_at
before update on public.blog_posts
for each row
execute function public.set_updated_at();

alter table public.blog_posts enable row level security;

drop policy if exists "Published posts are readable" on public.blog_posts;
create policy "Published posts are readable"
on public.blog_posts
for select
using (status = 'published');

drop policy if exists "Authenticated users can manage posts" on public.blog_posts;
create policy "Authenticated users can manage posts"
on public.blog_posts
for all
to authenticated
using (true)
with check (true);

-- Optional tighter RLS example if your Supabase project has multiple users:
-- replace owner@example.com and use this policy instead of the generic authenticated policy.
-- create policy "Only blog admins can manage posts"
-- on public.blog_posts
-- for all
-- to authenticated
-- using (lower(auth.jwt() ->> 'email') in ('owner@example.com'))
-- with check (lower(auth.jwt() ->> 'email') in ('owner@example.com'));

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'blog-images',
  'blog-images',
  true,
  5242880,
  array['image/png', 'image/jpeg', 'image/webp', 'image/gif']
)
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Blog images are publicly readable" on storage.objects;
create policy "Blog images are publicly readable"
on storage.objects
for select
using (bucket_id = 'blog-images');

drop policy if exists "Authenticated users can upload blog images" on storage.objects;
create policy "Authenticated users can upload blog images"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'blog-images');

drop policy if exists "Authenticated users can update blog images" on storage.objects;
create policy "Authenticated users can update blog images"
on storage.objects
for update
to authenticated
using (bucket_id = 'blog-images')
with check (bucket_id = 'blog-images');

drop policy if exists "Authenticated users can delete blog images" on storage.objects;
create policy "Authenticated users can delete blog images"
on storage.objects
for delete
to authenticated
using (bucket_id = 'blog-images');
