import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DualScreenDesktop24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 10v12H3.75c-.92 0-1.67-.7-1.74-1.6L2 20.24v-8.5c0-.92.7-1.67 1.6-1.74l.15-.01H7.5zm4.75 0c.92 0 1.67.7 1.74 1.6l.01.15v8.5c0 .92-.7 1.67-1.6 1.74l-.15.01H8.5V10h3.75zm-1.6 8.5h-.6a.75.75 0 000 1.5h.7a.75.75 0 00-.1-1.5zm-4.76 0h-.6a.75.75 0 000 1.5H6a.75.75 0 00-.1-1.5zM19.75 2c1.2 0 2.17.93 2.24 2.1l.01.15v9c0 1.2-.93 2.17-2.1 2.24l-.15.01H17v2h1.25a.75.75 0 01.1 1.5H15v-1.5h.5v-2H15v-4A2.5 2.5 0 0012.66 9H4V4.25c0-1.2.93-2.17 2.1-2.24L6.25 2h13.5z" fill={primaryFill} /></svg>;
};

export default DualScreenDesktop24Filled;