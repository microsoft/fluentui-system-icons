import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonSupport24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 16.25C20 15 19 14 17.75 14H6.25C5 14 4 15 4 16.25v.92c0 .57.18 1.13.51 1.6C6.05 20.92 8.58 22 12 22s5.94-1.07 7.49-3.24c.33-.46.51-1.02.51-1.6v-.91z" fill={primaryFill} /><path d="M17 7a5 5 0 00-9.03-2.97.75.75 0 00-.22-.03h-2.5a.75.75 0 00-.75.75v5.5A2.75 2.75 0 007.25 13h.26a1 1 0 10-.79-1.62c-.42-.2-.72-.63-.72-1.13V10h.75c.38 0 .73-.12 1.02-.33A5 5 0 0017 7zM7 6.9a5.11 5.11 0 000 .2v1.15c0 .14-.11.25-.25.25H6v-3h1v1.4z" fill={primaryFill} /></svg>;
};

export default PersonSupport24Filled;