export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-screen h-screen flex flex-row justify-center items-center">
        {children}
      </body>
    </html>
  );
}
