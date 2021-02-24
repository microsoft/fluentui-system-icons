import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Filter20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.25 13.5a.75.75 0 010 1.5h-4.5a.75.75 0 010-1.5h4.5zm2-4.25a.75.75 0 010 1.5h-8.5a.75.75 0 010-1.5h8.5zm2-4.25a.75.75 0 010 1.5H3.75a.75.75 0 010-1.5h12.5z" fill={primaryFill} /></svg>;
};

export default Filter20Filled;