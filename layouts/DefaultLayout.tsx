/* eslint-disable @next/next/no-img-element */
/**
 * @author: puji ermanto <pujiermanto@gmail.com>
 * @return: React.FC
 */

import * as React from 'react';
import { ReactNode } from 'react';
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import Head from 'next/head';
import { useRouter } from 'next/router';

interface Props {
  children?: ReactNode;
  isLoading?: boolean;
  pageTitle?: string;
}

export const DefaultLayout: React.FC<Props> = ({ children, ...props }) => {
  const pageTitle = props.pageTitle ?? "Alquran Kemenag || Web App Quran";

  return (
    <Flowbite>
    <Head>
    <title>{pageTitle}</title>
    </Head>

    <main className="flex flex-col items-center min-h-screen dark:bg-gray-600 dark:text-gray-50 p-2">
    <div className="flex justify-center mb-6 text-center">
    <div className="shrink-0 w-full">
    <h1 className="text-5xl">{pageTitle}</h1>
    </div>
    </div>
    <div className="container mx-auto mb-12 p-6">
    <div className="flex justify-start mb-6">
    <div>
    <DarkThemeToggle />
    </div>
    </div>
    {children || <p>There are no children to display.</p>}
    </div>
    </main>
    </Flowbite>
    );
};
