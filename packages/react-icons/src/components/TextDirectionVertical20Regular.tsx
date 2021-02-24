import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextDirectionVertical20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 3.5a.5.5 0 011 0v11.8l1.15-1.15a.5.5 0 01.7.7l-2 2a.5.5 0 01-.35.15.5.5 0 01-.35-.15l-2-2a.5.5 0 01.7-.7L5 15.29V3.5z" fill={primaryFill} /><path d="M13 12.5a.5.5 0 011 0v2.8l1.15-1.15a.5.5 0 01.7.7l-2 2a.5.5 0 01-.7 0l-2-2a.5.5 0 01.7-.7L13 15.29V12.5z" fill={primaryFill} /><path d="M13.5 3a.5.5 0 00-.47.32l-3 8a.5.5 0 00.94.36l1-2.68h3.06l1 2.68a.5.5 0 00.94-.36l-3-8A.5.5 0 0013.5 3zm0 1.92L14.65 8h-2.3l1.15-3.08z" fill={primaryFill} /></svg>;
};

export default TextDirectionVertical20Regular;