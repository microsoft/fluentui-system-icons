import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CallOutbound48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 3.75c-4.92 0-9.62 3.38-9.46 8.74a35.8 35.8 0 004.88 16.89A39.98 39.98 0 0021.47 42.4c4.49 3.08 10 .94 12.64-3.37a5.17 5.17 0 00-.43-6l-2.64-3.18a5.25 5.25 0 00-5.24-1.76l-3.42.8c-.77.17-1.41 0-1.8-.38a21.86 21.86 0 01-4.45-6.99c-.2-.54 0-1.27.72-1.86l2.32-1.93a5.25 5.25 0 001.6-5.77l-1.65-4.7a5.25 5.25 0 00-4.96-3.52h-.15zm-6.96 8.66c-.1-3.54 3-6.16 6.97-6.16h.15c1.17 0 2.21.74 2.6 1.84l1.64 4.7a2.75 2.75 0 01-.83 3.03l-2.33 1.93c-1.23 1.03-2.12 2.79-1.47 4.62a24.3 24.3 0 005.04 7.9 4.37 4.37 0 004.14 1.06l3.42-.8a2.75 2.75 0 012.75.92l2.63 3.2c.73.87.82 2.11.23 3.08-2.1 3.44-6.1 4.68-9.1 2.62a37.48 37.48 0 01-11.3-12.23 33.3 33.3 0 01-4.54-15.71z" fill={primaryFill} /><path d="M26.37 19.87a1.25 1.25 0 101.76 1.76L41.5 8.27v10.48a1.25 1.25 0 102.5 0V5.25C44 4.56 43.44 4 42.75 4h-13.5a1.25 1.25 0 100 2.5h10.48L26.37 19.87z" fill={primaryFill} /></svg>;
};

export default CallOutbound48Regular;