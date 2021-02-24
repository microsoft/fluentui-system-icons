import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ResizeImage24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.25 13c.38 0 .7.28.74.65l.01.1v5a3.25 3.25 0 01-3.07 3.24l-.18.01h-4.67c.54-.39.98-.9 1.27-1.5h3.4c.92 0 1.67-.7 1.74-1.6l.01-.15v-5c0-.41.34-.75.75-.75zm-9.5-4c1.8 0 3.25 1.46 3.25 3.25v6.5c0 1.8-1.46 3.25-3.25 3.25h-6.5A3.25 3.25 0 012 18.75v-6.5C2 10.45 3.46 9 5.25 9h6.5zm-4.03 8.35l-.1.1-2.96 2.95c.19.06.38.1.59.1h6.5c.2 0 .4-.04.59-.1l-2.96-2.96a1.25 1.25 0 00-1.55-.16l-.11.07zm4.03-6.85h-6.5c-.97 0-1.75.78-1.75 1.75v6.5c0 .2.04.4.1.59l2.96-2.96a2.75 2.75 0 013.75-.12l.13.12 2.96 2.96c.06-.19.1-.38.1-.59v-6.5c0-.97-.78-1.75-1.75-1.75zM11 12a1 1 0 110 2 1 1 0 010-2zm7.75-10a3.25 3.25 0 013.24 3.07l.01.18v5a.75.75 0 01-1.5.1v-5.1c0-.92-.7-1.67-1.6-1.74l-.15-.01h-5a.75.75 0 01-.1-1.5h5.1zm-8.5 0a.75.75 0 01.1 1.5h-5.1c-.92 0-1.67.7-1.74 1.6l-.01.15v3.4c-.6.3-1.11.73-1.5 1.27V5.25a3.25 3.25 0 013.07-3.24L5.25 2h5z" fill={primaryFill} /></svg>;
};

export default ResizeImage24Regular;