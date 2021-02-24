import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const KeyboardTab24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.03 11.47l-6.5-6.5a.75.75 0 00-1.13.98l.07.08 5.22 5.22H3.75c-.38 0-.7.28-.74.65L3 12c0 .38.28.7.65.74l.1.01h11.94l-5.22 5.22a.75.75 0 00-.07.98l.07.08c.27.27.68.3.98.07l.08-.07 6.5-6.5a.75.75 0 00.07-.98l-.07-.08-6.5-6.5 6.5 6.5zM21 18.5v-13a.75.75 0 00-1.5 0v13a.75.75 0 001.5 0z" fill={primaryFill} /></svg>;
};

export default KeyboardTab24Regular;