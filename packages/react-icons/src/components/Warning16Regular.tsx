import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Warning16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.56 12.26l5-9a.5.5 0 01.83-.08l.05.08 5 9a.5.5 0 01-.35.73L13 13H3a.5.5 0 01-.47-.66l.03-.08 5-9-5 9zM8 4.53L3.85 12h8.3L8 4.53zm0 5.35a.62.62 0 110 1.24.62.62 0 010-1.24zM8 7a.5.5 0 01.5.41V8.5a.5.5 0 01-1 .09V7.5c0-.27.23-.5.5-.5z" fill={primaryFill} /></svg>;
};

export default Warning16Regular;