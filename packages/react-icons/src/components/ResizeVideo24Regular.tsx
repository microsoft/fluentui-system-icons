import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ResizeVideo24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.25 13c.38 0 .7.28.74.65l.01.1v5a3.25 3.25 0 01-3.07 3.24l-.18.01h-4.67c.54-.39.98-.9 1.27-1.5h3.4c.92 0 1.67-.7 1.74-1.6l.01-.15v-5c0-.41.34-.75.75-.75zm-9.5-4c1.8 0 3.25 1.46 3.25 3.25v6.5c0 1.8-1.46 3.25-3.25 3.25h-6.5A3.25 3.25 0 012 18.75v-6.5C2 10.45 3.46 9 5.25 9h6.5zm0 1.5h-6.5c-.97 0-1.75.78-1.75 1.75v6.5c0 .97.78 1.75 1.75 1.75h6.5c.97 0 1.75-.78 1.75-1.75v-6.5c0-.97-.78-1.75-1.75-1.75zm-5.69 2.6a.5.5 0 01.6-.23l.08.03 3.96 2.16a.5.5 0 01.07.83l-.07.05-3.96 2.16a.5.5 0 01-.73-.35l-.01-.1v-4.3a.5.5 0 01.06-.25zM18.75 2a3.25 3.25 0 013.24 3.07l.01.18v5a.75.75 0 01-1.5.1v-5.1c0-.92-.7-1.67-1.6-1.74l-.15-.01h-5a.75.75 0 01-.1-1.5h5.1zm-8.5 0a.75.75 0 01.1 1.5h-5.1c-.92 0-1.67.7-1.74 1.6l-.01.15v3.4c-.6.3-1.11.73-1.5 1.27V5.25a3.25 3.25 0 013.07-3.24L5.25 2h5z" fill={primaryFill} /></svg>;
};

export default ResizeVideo24Regular;