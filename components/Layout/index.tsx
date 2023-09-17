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
      <div>{children}</div>
      <Footer />
    </>
  );
}
