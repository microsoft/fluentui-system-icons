import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowSync24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.95 5.03a1 1 0 01-.2 1.4 6.99 6.99 0 003.17 12.49l-.71-.71a1 1 0 011.41-1.42l2.5 2.5a1 1 0 010 1.42l-2.5 2.5a1 1 0 01-1.41-1.42l.84-.84a9 9 0 01-4.5-16.11 1 1 0 011.4.19zm1.93-1.74l2.5-2.5a1 1 0 011.5 1.32l-.09.1-.84.84a9 9 0 014.78 15.9 1 1 0 01-1.28-1.55 6.98 6.98 0 00-3.37-12.32l.71.71a1 1 0 01-1.32 1.5l-.1-.08-2.5-2.5a1 1 0 01-.07-1.32l.08-.1 2.5-2.5-2.5 2.5z" fill={primaryFill} /></svg>;
};

export default ArrowSync24Filled;