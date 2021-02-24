import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowExportRtl20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 4a.5.5 0 00-.5.5v11a.5.5 0 001 0v-11a.5.5 0 00-.5-.5z" fill={primaryFill} /><path d="M15 10a.5.5 0 00-.5-.5H3.7l3.15-3.15a.5.5 0 00-.7-.7l-4 4a.5.5 0 000 .7l4 4a.5.5 0 00.7-.7L3.71 10.5H14.5a.5.5 0 00.5-.5z" fill={primaryFill} /></svg>;
};

export default ArrowExportRtl20Regular;