export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full h-full flex flex-row justify-center items-center">
        {children}
      </body>
    </html>
  );
}
