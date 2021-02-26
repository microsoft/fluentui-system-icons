import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DualScreenSettings24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.28 2.98a2 2 0 01-1.44 2.5l-.59.14a5.73 5.73 0 00.01 1.8l.54.13a2 2 0 011.45 2.51l-.19.63c.44.4.94.7 1.49.93l.5-.52a2 2 0 012.9 0l.5.52a5.28 5.28 0 001.47-.91l-.2-.69a2 2 0 011.45-2.5l.58-.14a5.72 5.72 0 000-1.8l-.54-.13a2 2 0 01-1.45-2.51l.18-.63c-.44-.4-.94-.7-1.48-.93l-.5.52a2 2 0 01-2.9 0l-.5-.52c-.54.22-1.04.53-1.48.9l.2.7zM16.5 8c-.8 0-1.45-.67-1.45-1.5S15.7 5 16.5 5c.8 0 1.45.67 1.45 1.5S17.3 8 16.5 8zM10 6.5c0-.17 0-.33.02-.5H3.75C2.78 6 2 6.78 2 7.75v12.5C2 21.2 2.78 22 3.75 22h16.5c.97 0 1.75-.79 1.75-1.75V9.97c-.4.64-.91 1.2-1.5 1.66v8.62c0 .14-.11.25-.25.25h-7.5v-8.7c-.58-.4-1.08-.9-1.5-1.47V20.5h-7.5a.25.25 0 01-.25-.25V7.75c0-.14.11-.25.25-.25h6.33a6.54 6.54 0 01-.08-1zm7 11.75a.75.75 0 00-.76-.75h-1.6a.75.75 0 00.1 1.5h1.6a.75.75 0 00.65-.75zm-7 0a.75.75 0 00-.76-.75h-1.6a.75.75 0 00.1 1.5h1.6a.75.75 0 00.65-.75z" fill={primaryFill} /></svg>;
};

export default DualScreenSettings24Regular;