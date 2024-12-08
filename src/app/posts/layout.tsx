export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="leading-loose post flex flex-col gap-6">{children}</div>
  );
}
