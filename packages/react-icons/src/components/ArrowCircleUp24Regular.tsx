import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowCircleUp24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.47 12.28l.08.07c.3.22.71.2.98-.07l2.72-2.72v6.8c.06.36.37.64.75.64h.1a.75.75 0 00.65-.75V9.56l2.72 2.72.08.07a.75.75 0 00.98-1.13l-4-4-.08-.07a.75.75 0 00-.98.07l-4 4-.07.08c-.22.3-.2.71.07.98z" fill={primaryFill} /><path d="M22 12a10 10 0 10-20 0 10 10 0 0020 0zM3.5 12a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0z" fill={primaryFill} /></svg>;
};

export default ArrowCircleUp24Regular;