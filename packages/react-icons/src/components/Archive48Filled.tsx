import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Archive48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M38 18v18a4 4 0 01-4 4H14a4 4 0 01-4-4V18h28zm-11.25 4.5h-6.5a1.25 1.25 0 100 2.5h6.5a1.25 1.25 0 100-2.5zM38 8a2 2 0 012 2v4a2 2 0 01-2 2H10a2 2 0 01-2-2v-4c0-1.1.9-2 2-2h28z" fill={primaryFill} /></svg>;
};

export default Archive48Filled;