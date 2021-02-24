import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Album24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 9c0-1.1.9-2 2-2h4a2 2 0 012 2v1a2 2 0 01-2 2h-4a2 2 0 01-2-2V9zm2-.5a.5.5 0 00-.5.5v1c0 .28.22.5.5.5h4a.5.5 0 00.5-.5V9a.5.5 0 00-.5-.5h-4z" fill={primaryFill} /><path d="M4 4a2 2 0 00-2 2v12c0 1.1.9 2 2 2h16a2 2 0 002-2V6a2 2 0 00-2-2H4zm16 1.5c.28 0 .5.22.5.5v12a.5.5 0 01-.5.5H7.5v-13H20zm-16 0h2v13H4a.5.5 0 01-.5-.5V6c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
};

export default Album24Regular;