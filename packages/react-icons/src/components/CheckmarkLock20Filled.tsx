import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CheckmarkLock20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a8 8 0 017.96 8.79 3 3 0 00-5.45 1.41 2.5 2.5 0 00-1.5 2.3v3c0 .15 0 .3.03.43A8 8 0 1110 2zm3.36 5.65a.5.5 0 00-.64-.06l-.07.06L9 11.3 7.35 9.65l-.07-.06a.5.5 0 00-.7.7l.07.07 2 2 .07.06c.17.11.4.11.56 0l.07-.06 4-4 .07-.08a.5.5 0 00-.06-.63z" fill={primaryFill} /><path d="M13.5 13c-.82 0-1.5.67-1.5 1.5v3c0 .83.68 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5v-.5a2 2 0 10-4 0v.5zm1-.5a1 1 0 112 0v.5h-2v-.5zm1.75 3.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /></svg>;
};

export default CheckmarkLock20Filled;