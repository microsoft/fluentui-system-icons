import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowReply16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.7 8l2.69 2.68a.5.5 0 01-.64.77l-.07-.06-3.56-3.57-.05-.07-.03-.06-.02-.06V7.6A.5.5 0 012 7.5v.07-.11l.02-.09.02-.06.04-.08.05-.07 3.55-3.55a.5.5 0 01.77.64l-.06.07L3.7 7H8c3.52 0 5.89 1.98 6 4.8v.2a.5.5 0 01-1 0c0-2.27-1.8-3.9-4.74-4H3.7l2.69 2.68L3.7 8z" fill={primaryFill} /></svg>;
};

export default ArrowReply16Regular;