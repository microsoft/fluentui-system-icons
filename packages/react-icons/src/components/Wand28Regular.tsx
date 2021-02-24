import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Wand28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.75 3c.41 0 .75.34.75.75V5h1.25a.75.75 0 010 1.5H22.5v1.25a.75.75 0 01-1.5 0V6.5h-1.25a.75.75 0 010-1.5H21V3.75c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M8.5 6.25a.75.75 0 10-1.5 0V7.5H5.75a.75.75 0 100 1.5H7v1.25a.75.75 0 001.5 0V9h1.25a.75.75 0 000-1.5H8.5V6.25z" fill={primaryFill} /><path d="M20.5 17.75a.75.75 0 00-1.5 0V19h-1.25a.75.75 0 000 1.5H19v1.25a.75.75 0 001.5 0V20.5h1.25a.75.75 0 000-1.5H20.5v-1.25z" fill={primaryFill} /><path d="M19.63 9.48a2.87 2.87 0 00-4.54-.64L2.81 21.1a2.88 2.88 0 104.07 4.08L19.15 12.9c.91-.9 1.11-2.3.48-3.43zm-3.48.42a1.37 1.37 0 011.94 1.95l-.84.84-1.94-1.94.84-.85zm-1.9 1.9l1.94 1.95L5.82 24.11a1.38 1.38 0 11-1.95-1.96l10.37-10.34z" fill={primaryFill} /></svg>;
};

export default Wand28Regular;