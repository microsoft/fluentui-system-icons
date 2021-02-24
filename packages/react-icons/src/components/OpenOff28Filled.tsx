import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const OpenOff28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l3.34 3.34A4.98 4.98 0 004.25 10v9a5 5 0 005 5H18c1.37 0 2.6-.55 3.5-1.43l3.22 3.21a.75.75 0 001.06-1.06L3.28 2.22zm16.81 18.93c-.54.53-1.28.85-2.09.85H9.25a3 3 0 01-3-3v-9c0-.75.27-1.43.73-1.96l5.78 5.78-.47.47a1 1 0 001.42 1.42l.47-.47 5.91 5.91z" fill={primaryFill} /><path d="M8.28 5.1l1.9 1.9H12a1 1 0 100-2H9.25c-.33 0-.66.03-.97.1z" fill={primaryFill} /><path d="M14.88 11.7l1.42 1.42 6.45-6.46v5.59a1 1 0 102 0v-8a1 1 0 00-1-1h-8a1 1 0 100 2h5.59l-6.46 6.45z" fill={primaryFill} /><path d="M22.94 19.76L21 17.82V16a1 1 0 112 0v3c0 .26-.02.51-.06.76z" fill={primaryFill} /></svg>;
};

export default OpenOff28Filled;