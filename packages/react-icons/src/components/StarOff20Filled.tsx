import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const StarOff20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.86 2.15a.5.5 0 10-.71.7l4.1 4.1-3.4.49a1 1 0 00-.55 1.7l3.13 3.05-.74 4.3a1 1 0 001.45 1.05L10 15.51l3.86 2.03a1 1 0 001.45-1.05l-.1-.57 1.94 1.93a.5.5 0 00.7-.7l-15-15z" fill={primaryFill} /><path d="M14.58 12.19l.05.32-6.87-6.88L9.1 2.9a1 1 0 011.8 0l1.93 3.91 4.31.63a1 1 0 01.56 1.7l-3.12 3.05z" fill={primaryFill} /></svg>;
};

export default StarOff20Filled;