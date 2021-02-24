import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowUpLeft20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3.75a.75.75 0 00-.75-.75h-7.5a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0V5.56l11.22 11.22a.75.75 0 001.06-1.06L5.56 4.5h5.69c.41 0 .75-.34.75-.75z" fill={primaryFill} /></svg>;
};

export default ArrowUpLeft20Filled;