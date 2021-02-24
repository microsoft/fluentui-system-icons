import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Image48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M31 12a5 5 0 110 10 5 5 0 010-10zm-2.5 5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zM6 10.75A4.75 4.75 0 0110.75 6h26.5A4.75 4.75 0 0142 10.75v26.5c0 1.19-.44 2.27-1.16 3.1a1.26 1.26 0 01-.48.5A4.73 4.73 0 0137.25 42h-26.5a4.73 4.73 0 01-3.11-1.16 1.25 1.25 0 01-.48-.48A4.73 4.73 0 016 37.25v-26.5zm33.5 26.5v-26.5c0-1.24-1-2.25-2.25-2.25h-26.5c-1.24 0-2.25 1-2.25 2.25v26.5c0 .16.02.3.05.46l12.82-12.62a3.75 3.75 0 015.26 0L39.45 37.7c.03-.14.05-.3.05-.45zM10.75 39.5h26.5c.14 0 .29-.01.42-.04l-12.8-12.6a1.25 1.25 0 00-1.75 0l-12.8 12.6c.14.03.29.04.43.04z" fill={primaryFill} /></svg>;
};

export default Image48Regular;