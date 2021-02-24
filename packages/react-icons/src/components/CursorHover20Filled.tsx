import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CursorHover20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4a2 2 0 00-2 2v7c0 1.1.9 2 2 2h5v-4.5a1.5 1.5 0 012.56-1.06l5 5c.11.11.2.24.28.38A2 2 0 0018 13V6a2 2 0 00-2-2H4z" fill={primaryFill} /><path d="M10.85 10.15a.5.5 0 00-.85.35v7a.5.5 0 00.91.29l1.57-2.25 2.94.45a.5.5 0 00.43-.84l-5-5zM11 15.9v-4.2l3.07 3.06-1.74-.26a.5.5 0 00-.49.2l-.84 1.2z" fill={primaryFill} /></svg>;
};

export default CursorHover20Filled;