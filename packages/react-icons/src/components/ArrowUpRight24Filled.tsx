import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowUpRight24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 3h7.55l.12.02.1.02.1.03.08.04.07.04.06.04.06.05.07.06.1.1.06.12.06.11.03.1.02.07v.05L21 4v7.5a1 1 0 01-2 .12V6.41L4.7 20.72a1 1 0 01-1.31.08l-.1-.08a1 1 0 01-.08-1.32l.08-.1L17.6 5h-5.1a1 1 0 01-.99-.88V4a1 1 0 011-1z" fill={primaryFill} /></svg>;
};

export default ArrowUpRight24Filled;