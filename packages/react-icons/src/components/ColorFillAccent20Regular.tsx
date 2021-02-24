import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ColorFillAccent20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.16 13c.34 1.05 1.21 2 2.59 2 1.03 0 1.77-.53 2.22-1.23A1 1 0 0117 14v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2a1 1 0 011-1h1.34l.45.45a3 3 0 004.24 0l.45-.45h1.68z" fill={primaryFill} /></svg>;
};

export default ColorFillAccent20Regular;