import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowHookDownLeft16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 4.5c0-.28.22-.5.5-.5h3a3.4 3.4 0 012.62 1.1c.6.67.88 1.54.88 2.4a3.6 3.6 0 01-.88 2.4A3.4 3.4 0 018.5 11H4.7l1.15 1.15a.5.5 0 01-.7.7l-2-2a.5.5 0 010-.7l2-2a.5.5 0 11.7.7L4.71 10H8.5a2.4 2.4 0 001.88-.77c.4-.46.62-1.09.62-1.73a2.6 2.6 0 00-.62-1.73A2.4 2.4 0 008.5 5h-3a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
};

export default ArrowHookDownLeft16Regular;