import { ReactNode } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  judul?: string;
}
export default function Layout(props: LayoutProps) {
  const { children, judul } = props;
  return (
    <>
      <Head>
        <title> XIXIXI | {judul}</title>
        <meta name="description" content="Basic Nextjs" />
      </Head>
      <Header />
      <div className="container mx-auto relative">{children}</div>
      <Footer />
    </>
  );
}
