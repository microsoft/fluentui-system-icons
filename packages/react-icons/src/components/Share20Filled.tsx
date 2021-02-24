import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Share20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.38 5.7V3.59c0-.48.53-.74.89-.47l.06.05 4.5 4.42c.2.2.23.54.05.77l-.05.07-4.5 4.42c-.34.33-.89.12-.95-.34v-2.18l-.26.03a9.25 9.25 0 00-5.19 2.5c-.39.35-.99.03-.93-.5.5-4.09 2.59-6.34 6.15-6.63l.23-.01z" fill={primaryFill} /><path d="M5.5 4A2.5 2.5 0 003 6.5v8A2.5 2.5 0 005.5 17h8a2.5 2.5 0 002.5-2.5v-1a.5.5 0 00-1 0v1c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 014 14.5v-8C4 5.67 4.67 5 5.5 5h3a.5.5 0 000-1h-3z" fill={primaryFill} /></svg>;
};

export default Share20Filled;