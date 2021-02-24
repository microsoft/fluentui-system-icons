import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextBulletListLtr24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 15.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4 .5H21a1 1 0 01.12 2H7.5a1 1 0 01-.12-1.99H21 7.5zm-4-5.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4 .5H21a1 1 0 01.12 2H7.5a1 1 0 01-.12-1.99H21 7.5zm-4-5.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4 .5H21a1 1 0 01.12 2H7.5a1 1 0 01-.12-2H21 7.5z" fill={primaryFill} /></svg>;
};

export default TextBulletListLtr24Filled;