import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextFont24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 2c.31 0 .6.2.7.49l2.96 7.98v.04l.23.6-.83 2.09-.62-1.7H4.56l-1.1 3.01a.75.75 0 11-1.42-.52l1.3-3.48v-.04L6.3 2.5c.1-.3.39-.49.7-.49zm-1.88 8h3.76L7 4.91l-1.88 5.1z" fill={primaryFill} /><path d="M13.8 6.47a.75.75 0 011.4 0l5.56 14.03h.49a.75.75 0 110 1.5h-1-1.5a.75.75 0 010-1.5h.4l-1.2-3h-6.9l-1.2 3h.4a.75.75 0 110 1.5h-1.5-1a.75.75 0 110-1.5h.49L13.8 6.47zM17.37 16L14.5 8.79 11.64 16h5.72z" fill={primaryFill} /></svg>;
};

export default TextFont24Regular;