import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CheckmarkLock20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a8 8 0 017.96 8.79A3.02 3.02 0 0017 9.9a7 7 0 10-6 7.03v.57c0 .15.02.3.04.43A8 8 0 1110 2z" fill={primaryFill} /><path d="M13.36 7.65c.17.17.2.44.06.63l-.06.07-4 4a.5.5 0 01-.64.07l-.07-.06-2-2a.5.5 0 01.63-.77l.07.06L9 11.3l3.65-3.65c.2-.2.51-.2.7 0z" fill={primaryFill} /><path d="M16.25 16a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M13.5 13c-.82 0-1.5.67-1.5 1.5v3c0 .83.68 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5v-.5a2 2 0 10-4 0v.5zm1-.5a1 1 0 112 0v.5h-2v-.5zm-1.5 2c0-.28.23-.5.5-.5h4c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-3z" fill={primaryFill} /></svg>;
};

export default CheckmarkLock20Regular;