import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextDescription24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 17h12a1 1 0 01.12 2H3a1 1 0 01-.12-2H15 3zm0-4h18a1 1 0 01.12 2H3a1 1 0 01-.12-2H21 3zm0-4h18a1 1 0 01.12 2H3a1 1 0 01-.12-2H21 3zm0-4h18a1 1 0 01.12 2H3a1 1 0 01-.12-2H21 3z" fill={primaryFill} /></svg>;
};

export default TextDescription24Filled;