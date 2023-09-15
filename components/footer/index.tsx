/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Footer() {
    return (
        <div className="footer">
            <div>
                <Link href="/profile" target="_blank">Profile | </Link>
                <Link href="/termsofuse" target="_blank">Terms of Use | </Link>
                <Link href="/opportunities" target="_blank">Job Opportunities | </Link>
                <Link href="/credits" target="_blank">Credit | </Link>
                <Link href="/infoiklan" target="_blank">Info Iklan | </Link>
                <Link href="/sitemap" target="_blank">Sitemap.</Link>
            </div>
            <div>
            All materials and contents (text, graphics, and every attributes) of 21Cineplex or 21Cineplex.com website are copyrights and trademarks of 21Cineplex. No part of this website may be reproduced in any form without our written permission. Misuse of the entire content or any part, multiply, translate, use, or utilize it without written permission from 21Cineplex will be subject to criminal and / or civil penalties. admin@mtix-web-01
            </div>
        </div>
    );
}