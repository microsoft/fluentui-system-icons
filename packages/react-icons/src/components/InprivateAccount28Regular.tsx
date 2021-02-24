import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const InprivateAccount28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 16a3 3 0 012.83 2H14v-.5H7c-.78 0-1.42.6-1.5 1.36v.85c0 2.68 3.39 4.79 8.5 4.79V24h7.47c-1.79 1.24-4.4 2-7.47 2-5.79 0-10-2.57-10-6.29V19a3 3 0 013-3h14z" fill={primaryFill} /><path d="M24 19v.71c0 .27-.02.53-.07.79H14V19h10z" fill={primaryFill} /><path d="M23.63 21.5H14V23h8.63c.43-.46.77-.96 1-1.5z" fill={primaryFill} /><path d="M19.95 7.25a6.07 6.07 0 010 1.5H14v-1.5h5.95z" fill={primaryFill} /><path d="M19.74 6.25a5.97 5.97 0 00-.7-1.5H14v1.5h5.74z" fill={primaryFill} /><path d="M14 2c1.65 0 3.15.67 4.24 1.75H14V3.5a4.5 4.5 0 100 9v-.25h4.24A6 6 0 1114 2z" fill={primaryFill} /><path d="M19.04 11.25H14v-1.5h5.74c-.16.54-.4 1.04-.7 1.5z" fill={primaryFill} /></svg>;
};

export default InprivateAccount28Regular;