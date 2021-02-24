import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Gesture24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 17.5a.75.75 0 110 1.5.75.75 0 010-1.5zm3-13.5h10.5a.75.75 0 01.1 1.5h-6.6l9.77 3.8c.57.22.64.98.16 1.31l-.1.06L6.1 17.93a.75.75 0 01-.76-1.3l.09-.04 12.97-6.5L6.48 5.45c-.74-.28-.58-1.35.16-1.44h10.61-10.5zm13 0a.75.75 0 110 1.5.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
};

export default Gesture24Regular;