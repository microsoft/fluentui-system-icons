import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MusicNote220Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.7 2.23a1 1 0 011.3.95V13.5a2.5 2.5 0 11-1-2V6.18L8 8.37v7.13a2.5 2.5 0 11-1-2V5.37a1 1 0 01.7-.96l7-2.18zM8 7.32l7-2.19V3.18L8 5.37v1.95zM5.5 14a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.5-.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" fill={primaryFill} /></svg>;
};

export default MusicNote220Regular;