import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Person532Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 9A7 7 0 119 9a7 7 0 0114 0zm-2 0a5 5 0 10-10 0 5 5 0 0010 0zM6 21.5c0-.83.67-1.5 1.5-1.5h12.05l.19-2H7.5A3.5 3.5 0 004 21.5v.5c0 2.4 1.52 4.42 3.68 5.8A15.67 15.67 0 0016 30c1.14 0 2.25-.1 3.3-.3a2.5 2.5 0 01-.17-2c-.98.2-2.03.3-3.13.3-2.88 0-5.43-.74-7.24-1.9C6.94 24.96 6 23.48 6 22v-.5zM22.25 17a1 1 0 00-1 .9l-.5 5.26a1 1 0 001.13 1.08l3.16-.43A2.6 2.6 0 1125.4 29h-.61c-.8 0-1.59-.3-2.18-.85l-.42-.39a1 1 0 00-1.36 1.48l.43.38A5.22 5.22 0 0024.78 31h.61a4.6 4.6 0 10-.61-9.17l-1.92.26.3-3.09h5.34a1 1 0 100-2h-6.25z" fill={primaryFill} /></svg>;
};

export default Person532Regular;