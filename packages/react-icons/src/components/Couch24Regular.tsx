import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Couch24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 6h12.5c.92 0 1.67.7 1.74 1.6l.01.15v2.1a2.75 2.75 0 012 2.46v3.94c0 .92-.7 1.67-1.6 1.74l-.15.01H3.75c-.92 0-1.67-.7-1.74-1.6L2 16.24V12.5c0-1.26.85-2.32 2-2.65v-2.1c0-.92.7-1.67 1.6-1.74L5.76 6h12.5-12.5zm13.5 5.25c-.65 0-1.18.5-1.24 1.12l-.01.13v.25c0 .38-.28.7-.65.74l-.1.01H6.75a.75.75 0 01-.74-.65l-.01-.1v-.25a1.25 1.25 0 00-2.5-.13v3.88c0 .12.08.22.2.24l.05.01h16.5c.12 0 .22-.08.24-.2l.01-.05V12.5c0-.69-.56-1.25-1.25-1.25zm-1-3.75H5.75a.25.25 0 00-.24.2l-.01.05v2.1a2.76 2.76 0 011.92 1.97l.03.18h9.1l.03-.17c.24-.95.98-1.71 1.92-1.98v-2.1a.25.25 0 00-.2-.24l-.05-.01z" fill={primaryFill} /></svg>;
};

export default Couch24Regular;