import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Speaker228Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 4.81c0-1.09-1.3-1.66-2.1-.9L9.45 8.52c-.33.3-.75.48-1.2.48H5.25A3.25 3.25 0 002 12.26v3.49C2 17.55 3.46 19 5.25 19h3.01c.45 0 .87.17 1.2.47l4.94 4.63c.8.74 2.1.18 2.1-.92V4.81zm-6.02 4.82L15 5.39v17.22l-4.52-4.23c-.6-.57-1.4-.88-2.22-.88H5.25c-.97 0-1.75-.79-1.75-1.75v-3.5c0-.96.78-1.74 1.75-1.74h3.01c.83 0 1.62-.32 2.22-.88z" fill={primaryFill} /><path d="M22.7 5.25a.75.75 0 00-1.12 1 11.7 11.7 0 010 15.5.75.75 0 101.12 1 13.2 13.2 0 000-17.5z" fill={primaryFill} /><path d="M20.35 8.3a.75.75 0 10-1.2.9 7.96 7.96 0 010 9.6.75.75 0 001.2.9 9.46 9.46 0 000-11.4z" fill={primaryFill} /></svg>;
};

export default Speaker228Regular;