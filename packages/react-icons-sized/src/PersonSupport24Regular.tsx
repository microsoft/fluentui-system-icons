import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 16.25C20 15 19 14 17.75 14H6.25C5 14 4 15 4 16.25v.57c0 .9.32 1.76.9 2.44C6.46 21.09 8.85 22 12 22c3.14 0 5.53-.9 7.1-2.74.58-.68.9-1.54.9-2.44v-.57zM6.25 15.5h11.5c.41 0 .75.33.75.75v.57c0 .54-.2 1.06-.54 1.46-1.26 1.47-3.23 2.22-5.96 2.22-2.74 0-4.7-.75-5.96-2.22-.35-.4-.54-.92-.54-1.46v-.57c0-.42.34-.75.75-.75z" fill={primaryFill} /><path d="M17 7a5 5 0 00-9.03-2.97.75.75 0 00-.22-.03h-2.5a.75.75 0 00-.75.75v5.5A2.75 2.75 0 007.25 13h.26a1 1 0 10-.79-1.62c-.42-.2-.72-.63-.72-1.13V10h.75c.38 0 .73-.12 1.02-.33A5 5 0 0017 7zM7 6.9a5.11 5.11 0 000 .2v1.15c0 .14-.11.25-.25.25H6v-3h1v1.4zm1.5.2V6.9a3.5 3.5 0 110 .18z" fill={primaryFill} /></svg>;
}

const PersonSupport24Regular = wrapIcon(rawSvg({}), 'PersonSupport24Regular');
export default PersonSupport24Regular;
      