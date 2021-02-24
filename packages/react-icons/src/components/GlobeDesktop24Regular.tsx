import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const GlobeDesktop24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 12a10 10 0 10-11 9.95v-1.84c-.78-.61-1.48-1.9-1.94-3.61H11V15H8.74a18.5 18.5 0 01-.14-5h6.8c.06.64.1 1.31.1 2H17c0-.68-.03-1.35-.1-2h3.36c.16.64.24 1.31.24 2H22zM4.8 16.5H7.5l.1.4c.32 1.17.75 2.2 1.27 3.01a8.53 8.53 0 01-4.1-3.4zM3.74 10h3.35a20.85 20.85 0 00.13 5H4.04a8.48 8.48 0 01-.3-4.98V10zm5.12-5.9l.02-.01A12.36 12.36 0 007.3 8.5H4.25c.9-2 2.56-3.59 4.6-4.4zm3.02-.6h.25c1.26.13 2.48 2.13 3.04 5H8.83c.57-2.88 1.79-4.88 3.05-5zm3.35.76l-.11-.17.3.12a8.53 8.53 0 014.33 4.29H16.7c-.3-1.66-.8-3.12-1.47-4.24z" fill={primaryFill} /><path d="M12 19a1 1 0 001 1h3v2h-.5a.5.5 0 100 1h4a.5.5 0 000-1H19v-2h3a1 1 0 001-1v-5a1 1 0 00-1-1h-9a1 1 0 00-1 1v5z" fill={primaryFill} /></svg>;
};

export default GlobeDesktop24Regular;