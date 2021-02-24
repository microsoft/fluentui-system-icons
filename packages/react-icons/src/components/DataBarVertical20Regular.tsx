import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DataBarVertical20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 3a2 2 0 00-2 2v10a2 2 0 104 0V5a2 2 0 00-2-2zM4 5a1 1 0 012 0v10a1 1 0 11-2 0V5z" fill={primaryFill} /><path d="M8 8a2 2 0 114 0v7a2 2 0 11-4 0V8zm2-1a1 1 0 00-1 1v7a1 1 0 102 0V8a1 1 0 00-1-1z" fill={primaryFill} /><path d="M13 11a2 2 0 114 0v4a2 2 0 11-4 0v-4zm2-1a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1z" fill={primaryFill} /></svg>;
};

export default DataBarVertical20Regular;