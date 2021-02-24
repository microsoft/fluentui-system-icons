import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlertUrgent24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.43 19.92l3.56-1.5a2 2 0 01-3.56 1.5zM15.86 2.1a11.72 11.72 0 014.68 4.4A11.72 11.72 0 0122 12.72a.75.75 0 01-1.5-.04c.05-2.1-.37-3.92-1.26-5.46a10.23 10.23 0 00-4.1-3.82.75.75 0 11.72-1.32zM6.71 6.52a5.82 5.82 0 017.6 2.74l.1.21 1.29 2.9 1.7 1.46c.09.08.17.18.26.33l.06.11c.28.63 0 1.37-.64 1.65L6.76 20.49A1.25 1.25 0 015 19.35V17l-1.24-2.79a5.82 5.82 0 012.95-7.7zm8.91-.83c.97.53 1.75 1.3 2.32 2.3.57.99.85 2.04.82 3.14a.75.75 0 11-1.5-.03c.02-.82-.18-1.6-.62-2.37a4.42 4.42 0 00-1.73-1.72.75.75 0 01.71-1.32z" fill={primaryFill} /></svg>;
};

export default AlertUrgent24Filled;