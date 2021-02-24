import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SlideText16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 5a.5.5 0 000 1h3a.5.5 0 000-1h-3z" fill={primaryFill} /><path d="M4 7.5c0-.28.22-.5.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M4.5 9a.5.5 0 000 1h4a.5.5 0 000-1h-4z" fill={primaryFill} /><path d="M3 3a2 2 0 00-2 2v6c0 1.1.9 2 2 2h10a2 2 0 002-2V5a2 2 0 00-2-2H3zM2 5a1 1 0 011-1h10a1 1 0 011 1v6a1 1 0 01-1 1H3a1 1 0 01-1-1V5z" fill={primaryFill} /></svg>;
};

export default SlideText16Regular;