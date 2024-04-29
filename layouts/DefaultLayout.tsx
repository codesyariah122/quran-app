/* eslint-disable @next/next/no-img-element */
/**
 * @author: puji ermanto <pujiermanto@gmail.com>
 * @return: React.FC
 */

import * as React from 'react';
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  Navbar,
  HeroSection,
  Footer,
  FooterMobile,
  PopupMenu,
} from '@/components';

interface Props {
  children: React.ReactNode;
  menus?: any;
  fields?: any;
  isLoading?: boolean;
  messagePage?: string;
  pageTitle?: string;
  header?: string;
  colors?: Object | string | any;
  styles?: any;
  bg?: string | any;
}

export const DefaultLayout: React.FC<Props> = ({ children, ...props }) => {
  const [bottom, setBottom] = React.useState<boolean>(false);
  const [zIndex, setZIndex] = React.useState<string>('-z-10');
  const [bg, setBg] = React.useState<string>('bg-[#f6ebda]');
  let [isOpen, setIsOpen] = React.useState<boolean>(false);
  let [menuId, setMenuId] = React.useState<number>(0);

  const router = useRouter();
  const pathName = router.pathname;

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 20) {
      setBottom(true);
      setZIndex('z-40');
    } else {
      setBottom(false);
      setZIndex('-z-10');
    }

    if (scrollPosition >= 1200) {
      setBg('bg-[#ffffff]');
    } else {
      setBg('bg-[#f6ebda]');
    }
  };

  React.useEffect(() => {
    handleScroll;
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Flowbite>
    <Head>
    <title>{props?.pageTitle}</title>
    </Head>

    <main className="flex flex-col items-center min-h-screen dark:bg-gray-600 dark:text-gray-50 p-2">
    <div className="flex justify-center mb-6 text-center">
    <div className="shrink-0 w-full">
    <h1 className="text-5xl">{props.pageTitle}</h1>
    </div>
    </div>
    <div className="container mx-auto mb-12 p-6">
    <div className="flex justify-start mb-6">
    <div>
    <DarkThemeToggle />
    </div>
    </div>
    {children}
    </div>
    </main>
    </Flowbite>
    );
};
