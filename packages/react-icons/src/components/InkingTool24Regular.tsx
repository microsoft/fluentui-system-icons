import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const InkingTool24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.25 2c.38 0 .7.28.74.65v3.6c0 .92-.7 1.67-1.6 1.74H19L15 16.97c-.2.47-.61.82-1.09.97a5.64 5.64 0 01-.31 3.04 1.75 1.75 0 01-3.21-.04 5.5 5.5 0 01-.3-3.02c-.4-.14-.74-.42-.95-.8l-.07-.14L5.02 8h-.27c-.92 0-1.67-.7-1.74-1.6V2.74a.75.75 0 011.48-.1l.01.1v3.5c0 .12.08.22.2.24h14.55c.12 0 .22-.07.24-.18V2.75c0-.42.34-.75.76-.75zM12.4 18h-.8l-.03.19a3.99 3.99 0 00.2 2.16.25.25 0 00.46 0 4.14 4.14 0 00.2-2.17l-.03-.18zm4.94-10H6.66l3.78 8.35c.03.08.1.13.17.14l.06.01h2.74c.08 0 .16-.04.2-.1l.03-.05L17.34 8z" fill={primaryFill} /></svg>;
};

export default InkingTool24Regular;