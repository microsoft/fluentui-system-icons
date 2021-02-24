import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextBulletListTree24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 15.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4 .5H21a1 1 0 01.12 2H11.5a1 1 0 01-.12-2h.12zm-8-5.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4 .5H21a1 1 0 01.12 2H7.5a1 1 0 01-.12-2h.12zm-4-5.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4 .5H21a1 1 0 01.12 2H7.5a1 1 0 01-.12-2h.12z" fill={primaryFill} /></svg>;
};

export default TextBulletListTree24Filled;