import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WifiProtected24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2c-.92 0-1.67.7-1.74 1.6l-.01.15v.78a1 1 0 00-.74.85L4 17.5V20a1 1 0 00.88 1H8a1 1 0 001-.89V17.5a1 1 0 00-.64-.94l-.1-.03-.01-.78c0-.97-.78-1.75-1.75-1.75zm9.26-.3c.46.46.83 1.03 1.1 1.63a1 1 0 01-1.83.8 3.22 3.22 0 00-2.94-1.96 6.52 6.52 0 00-1.56-1.77 5.23 5.23 0 015.23 1.3zM6.5 15c.38 0 .7.28.74.65l.01.1v.75h-1.5v-.75c0-.42.34-.75.75-.75zm11.3-4.29c.6.6 1.12 1.32 1.5 2.08a1 1 0 01-1.77.92 6.13 6.13 0 00-8.88-2.34 6.5 6.5 0 00-2.63-.35l.29-.31a8.13 8.13 0 0111.5 0zm2.64-2.41c.5.5.99 1.09 1.4 1.7a1 1 0 01-1.64 1.13 9.92 9.92 0 00-16.36 0A1 1 0 112.2 9.97 11.92 11.92 0 0120.44 8.3z" fill={primaryFill} /></svg>;
};

export default WifiProtected24Filled;