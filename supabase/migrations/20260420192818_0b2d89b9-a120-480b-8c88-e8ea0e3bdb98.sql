drop policy if exists "Admins manage roles" on public.user_roles;

create policy "Admins insert roles" on public.user_roles
  for insert to authenticated
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins update roles" on public.user_roles
  for update to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins delete roles" on public.user_roles
  for delete to authenticated
  using (public.has_role(auth.uid(), 'admin'));