import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SignOut20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 3.5a.5.5 0 00-.58-.5l-7 1.08a.5.5 0 00-.42.49v10.86c0 .25.18.46.42.5l7 1.07a.5.5 0 00.58-.5V10h5.17l-1 .87a.5.5 0 00.66.76l2-1.75a.5.5 0 000-.76l-2-1.75a.5.5 0 10-.65.76l1 .87H11V3.5zm-2.5 7.75a.75.75 0 110-1.5.75.75 0 010 1.5z" fill={primaryFill} /><path d="M12.5 16H12v-5h1v4.5a.5.5 0 01-.5.5z" fill={primaryFill} /><path d="M12 8V4h.5c.28 0 .5.22.5.5V8h-1z" fill={primaryFill} /></svg>;
};

export default SignOut20Filled;