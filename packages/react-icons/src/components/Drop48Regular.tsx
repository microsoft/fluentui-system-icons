import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Drop48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 4c.33 0 .65.13.88.37l.24.23a68.22 68.22 0 017.17 8.23c3.13 4.3 6.21 9.88 6.21 15.42 0 5.38-1.6 9.36-4.31 12C31.49 42.85 27.83 44 24 44c-3.83 0-7.48-1.14-10.19-3.76-2.71-2.63-4.31-6.61-4.31-11.99 0-5.54 3.01-11.06 6.11-15.33 2.9-3.98 6-7.06 7.24-8.29l.27-.26c.23-.24.55-.37.88-.37zm-6.36 10.4C14.6 18.55 12 23.53 12 28.24c0 4.87 1.44 8.14 3.55 10.2 2.13 2.06 5.1 3.05 8.45 3.05 3.35 0 6.32-.99 8.45-3.05 2.11-2.06 3.55-5.33 3.55-10.2 0-4.71-2.67-9.75-5.73-13.95A64.03 64.03 0 0024 7a63.67 63.67 0 00-6.36 7.38z" fill={primaryFill} /></svg>;
};

export default Drop48Regular;