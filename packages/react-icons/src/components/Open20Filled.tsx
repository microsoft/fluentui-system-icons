import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Open20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.25 4.5a.75.75 0 010-1.5h6a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0V5.56l-5.47 5.47a.75.75 0 11-1.06-1.06l5.47-5.47h-4.19z" fill={primaryFill} /><path d="M6.25 5.5c-.97 0-1.75.78-1.75 1.75v6.5c0 .97.78 1.75 1.75 1.75h6.5c.97 0 1.75-.78 1.75-1.75V12a.75.75 0 011.5 0v1.75c0 1.8-1.46 3.25-3.25 3.25h-6.5A3.25 3.25 0 013 13.75v-6.5C3 5.45 4.46 4 6.25 4H8a.75.75 0 010 1.5H6.25z" fill={primaryFill} /></svg>;
};

export default Open20Filled;