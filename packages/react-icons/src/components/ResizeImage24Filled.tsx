import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ResizeImage24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.25 13c.38 0 .7.28.74.65l.01.1v5a3.25 3.25 0 01-3.07 3.24l-.18.01h-4.67c.54-.39.98-.9 1.27-1.5h3.4c.92 0 1.67-.7 1.74-1.6l.01-.15v-5c0-.41.34-.75.75-.75zm-11.8 4.16l.11.1 4.09 4.1.02.01c-.54.4-1.2.63-1.92.63h-6.5c-.72 0-1.38-.23-1.92-.63l.02-.02 4.09-4.08.11-.1a1.5 1.5 0 011.9 0zM11.75 9c1.8 0 3.25 1.46 3.25 3.25v6.5c0 .72-.23 1.38-.63 1.92l-.02-.02-4.08-4.09-.13-.12a2.5 2.5 0 00-3.27 0l-.14.12-4.08 4.09-.02.02c-.4-.54-.63-1.2-.63-1.92v-6.5C2 10.45 3.46 9 5.25 9h6.5zM11 12a1 1 0 100 2 1 1 0 000-2zm7.75-10a3.25 3.25 0 013.24 3.07l.01.18v5a.75.75 0 01-1.5.1v-5.1c0-.92-.7-1.67-1.6-1.74l-.15-.01h-5a.75.75 0 01-.1-1.5h5.1zm-8.5 0a.75.75 0 01.1 1.5h-5.1c-.92 0-1.67.7-1.74 1.6l-.01.15v3.4c-.6.3-1.11.73-1.5 1.27V5.25a3.25 3.25 0 013.07-3.24L5.25 2h5z" fill={primaryFill} /></svg>;
};

export default ResizeImage24Filled;