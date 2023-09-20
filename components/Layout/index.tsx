import { ReactNode } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <>
      <Header />
      <div className="container mx-auto relative">{children}</div>
      <Footer />
    </>
  );
}
