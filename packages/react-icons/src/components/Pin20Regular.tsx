import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Pin20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.6 2.38a1.5 1.5 0 012.43-.44l5.03 5.03c.74.74.52 2-.44 2.43l-4.51 2.05a.5.5 0 00-.27.3l-1.56 4.67a.5.5 0 01-.82.2l-3.19-3.19L3.71 17H3v-.7H3l3.57-3.57-3.18-3.18a.5.5 0 01.19-.83l4.68-1.56a.5.5 0 00.3-.27l2.05-4.5zm1.72.27a.5.5 0 00-.8.15L9.47 7.3c-.18.38-.5.68-.9.8l-3.9 1.31 5.92 5.93 1.3-3.91c.14-.4.43-.72.8-.9l4.52-2.04a.5.5 0 00.14-.81l-5.03-5.03z" fill={primaryFill} /></svg>;
};

export default Pin20Regular;