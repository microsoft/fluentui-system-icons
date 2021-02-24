import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowEnterUp20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.86 2.16a.5.5 0 00-.72 0l-4 4.25a.5.5 0 00.72.68L8 3.76V15a3 3 0 003 3h4.5a.5.5 0 000-1H11a2 2 0 01-2-2V3.76l3.14 3.33a.5.5 0 00.72-.68l-4-4.25z" fill={primaryFill} /></svg>;
};

export default ArrowEnterUp20Regular;