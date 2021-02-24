import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Warning16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.56 12.26l5-9a.5.5 0 01.83-.08l.05.08 5 9a.5.5 0 01-.35.73L13 13H3a.5.5 0 01-.47-.66l.03-.08 5-9-5 9zM8 9.88a.75.75 0 100 1.5.75.75 0 000-1.5zm0-3a.63.63 0 00-.62.53V8.6a.63.63 0 001.24 0V7.4A.63.63 0 008 6.88z" fill={primaryFill} /></svg>;
};

export default Warning16Filled;