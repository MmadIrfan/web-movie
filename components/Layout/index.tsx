import { ReactNode } from "react";
import Footer from '@/components/footer';
import Header from "@/components/header";
import styles from './Layout.module.css';

interface LayoutProps {
    children: ReactNode;
}
export default function Layout(props: LayoutProps) {
    const { children } = props;
    return (
        <>
            <div className={styles.container}>
                <Header />
                <div className={styles.content}>{children}</div>
                <Footer />
            </div>
        </>
    )
}