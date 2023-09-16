/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-birutua p-8 mx-auto text-putihb">
      <div className="container flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
        <ul className="flex items-center space-x-3">
          <li className="hover:text-birumuda">
            <Link href="#" target="_blank">
              Profile
            </Link>
          </li>
          <li>|</li>
          <li className="hover:text-birumuda">
            <Link href="#" target="_blank">
              Terms of Use
            </Link>
          </li>
          <li>|</li>
          <li className="hover:text-birumuda">
            <Link href="#" target="_blank">
              Advertising
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4 fill-white">
          <div className="relative w-8 h-8 border border-white rounded-full group hover:bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
              className="absolute inset-0 m-auto text-white fill-current w-4 h-4 transition-transform transform group-hover:text-birutua"
            >
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
            </svg>
          </div>
          <div className="relative w-8 h-8 border border-white rounded-full group hover:bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              className="absolute inset-0 m-auto text-white fill-current w-4 h-4 transition-transform transform group-hover:text-birutua"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </div>
          <div className="relative w-8 h-8 border border-white rounded-full group hover:bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              className="absolute inset-0 m-auto text-white fill-current w-4 h-4 transition-transform transform group-hover:text-birutua"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </div>
          <div className="relative w-8 h-8 border border-white rounded-full group hover:bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              className="absolute inset-0 m-auto text-white fill-current w-4 h-4 transition-transform transform group-hover:text-birutua"
            >
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="font-thin pt-4 text-left pr-8">
        All materials and contents (text, graphics, and every attributes) of
        21Cineplex or 21Cineplex.com website are copyrights and trademarks of
        21Cineplex. No part of this website may be reproduced in any form
        without our written permission. Misuse of the entire content or any
        part, multiply, translate, use, or utilize it without written permission
        from 21Cineplex will be subject to criminal and / or civil penalties.
        admin@mtix-web-01
      </div>
    </footer>
  );
}
