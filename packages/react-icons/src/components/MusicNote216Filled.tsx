import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MusicNote216Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 5.21v5.06A2 2 0 1013 12V1.93a.8.8 0 00-1.07-.76l-6.4 2.29A.8.8 0 005 4.2v7.06A2 2 0 106 13V7.35l6-2.14z" fill={primaryFill} /></svg>;
};

export default MusicNote216Filled;