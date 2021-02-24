import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const XboxConsole20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 6.5a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M4 2.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v15a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-15zm4 7V17h7V3H5v14h2V9.5a.5.5 0 011 0z" fill={primaryFill} /></svg>;
};

export default XboxConsole20Regular;