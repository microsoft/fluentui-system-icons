import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Send20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.72 2.05l15.36 7.57a.5.5 0 010 .9L2.72 18.07a.5.5 0 01-.7-.58l1.52-5.74a.5.5 0 01.4-.37l6.88-1.14a.25.25 0 00.19-.15l.02-.06a.25.25 0 00-.15-.27l-.06-.02L3.9 8.6a.5.5 0 01-.4-.37l-1.48-5.6a.5.5 0 01.7-.58z" fill={primaryFill} /></svg>;
};

export default Send20Filled;