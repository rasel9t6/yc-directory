import Header from "@/components/Header";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <>
        <Header/>
        <main>{children}</main>
      </>
    );
      
}
