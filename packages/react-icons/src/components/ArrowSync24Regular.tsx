import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowSync24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.75 5.18c.25.33.19.8-.14 1.05a7.24 7.24 0 003.6 12.98l-.68-.68a.75.75 0 01.98-1.13l.08.07 2 2c.27.27.3.68.07.98l-.07.08-2 2a.75.75 0 01-1.13-.98l.07-.08.75-.75A8.75 8.75 0 016.7 5.04a.75.75 0 011.05.14zm5.72-3.71c.3.3.3.77 0 1.06l-.75.75a8.75 8.75 0 014.85 15.47.75.75 0 11-.96-1.16A7.25 7.25 0 0012.8 4.8l.68.68a.75.75 0 11-1.06 1.06l-2-2a.75.75 0 010-1.06l2-2c.3-.3.77-.3 1.06 0z" fill={primaryFill} /></svg>;
};

export default ArrowSync24Regular;