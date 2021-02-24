import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowSwap24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.78 2.22l4.5 4.5c.26.26.29.68.07.97l-.07.08-4.5 4.5a.75.75 0 01-1.13-.97l.07-.08L16.94 8H5.24a.75.75 0 01-.74-.65v-.1c0-.38.27-.7.64-.75H16.94l-3.22-3.22a.75.75 0 01-.07-.98l.07-.08a.75.75 0 01.98-.07l.08.07 4.5 4.5-4.5-4.5zm4.72 14.43v.1c0 .38-.27.7-.64.74l-.1.01H7.06l3.22 3.22c.27.27.3.68.08.98l-.08.08a.75.75 0 01-.97.07l-.09-.07-4.5-4.5a.75.75 0 01-.07-.97l.07-.09 4.5-4.5a.75.75 0 011.14.98l-.08.08L7.07 16h11.69c.38 0 .7.28.74.65v.1-.1z" fill={primaryFill} /></svg>;
};

export default ArrowSwap24Regular;