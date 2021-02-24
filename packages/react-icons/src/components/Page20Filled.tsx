import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Page20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 3A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5V9h-4.5A1.5 1.5 0 0111 7.5V3H5.5z" fill={primaryFill} /><path d="M12 3.14V7.5c0 .28.22.5.5.5h4.36a2.5 2.5 0 00-.6-.93l-3.33-3.34a2.5 2.5 0 00-.93-.59z" fill={primaryFill} /></svg>;
};

export default Page20Filled;