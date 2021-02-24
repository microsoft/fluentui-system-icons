import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowEnterLeft24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 4a1 1 0 011 .88v6.62a3.5 3.5 0 01-3.3 3.5H5.4l3.3 3.3a1 1 0 01.08 1.31l-.08.1a1 1 0 01-1.32.08l-.1-.08-5-5a1.01 1.01 0 01-.1-.11l-.07-.12-.05-.1-.03-.11-.03-.12v-.06L2 14v-.08l.02-.12.03-.11.04-.11.06-.1.06-.1.08-.09 5-5a1 1 0 011.5 1.32l-.08.1L5.4 13H18.5c.78 0 1.42-.6 1.5-1.36V5a1 1 0 011-1z" fill={primaryFill} /></svg>;
};

export default ArrowEnterLeft24Filled;