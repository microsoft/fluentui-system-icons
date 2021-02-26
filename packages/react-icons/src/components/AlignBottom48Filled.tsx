import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlignBottom48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 41.5a1.25 1.25 0 110-2.5h37.5a1.25 1.25 0 110 2.5H5.25zM26 32.25c0 2.35 1.9 4.25 4.25 4.25h5.5c2.35 0 4.25-1.9 4.25-4.25v-15C40 14.9 38.1 13 35.75 13h-5.5A4.25 4.25 0 0026 17.25v15zM12.25 36.5h5.5c2.35 0 4.25-1.9 4.25-4.25V10c0-2.35-1.9-4.25-4.25-4.25h-5.5A4.25 4.25 0 008 10v22.25c0 2.35 1.9 4.25 4.25 4.25z" fill={primaryFill} /></svg>;
};

export default AlignBottom48Filled;