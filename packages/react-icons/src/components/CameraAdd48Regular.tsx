import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CameraAdd48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.52 7c-1.55 0-2.97.84-3.72 2.19l-1.29 2.31h-3.76A5.75 5.75 0 006 17.25v17A5.75 5.75 0 0011.75 40H23a12.9 12.9 0 01-.76-2.5H11.75a3.25 3.25 0 01-3.25-3.25v-17c0-1.8 1.46-3.25 3.25-3.25h5.24l2-3.6c.3-.56.89-.9 1.53-.9h6.96c.64 0 1.23.34 1.53.9l2 3.6h5.24c1.8 0 3.25 1.46 3.25 3.25v5.55c.88.33 1.72.74 2.5 1.24v-6.79a5.75 5.75 0 00-5.75-5.75h-3.76L31.2 9.19A4.25 4.25 0 0027.48 7h-6.96z" fill={primaryFill} /><path d="M24 17a8 8 0 017.59 5.45c-.82.22-1.6.52-2.34.89a5.5 5.5 0 10-6.4 7.04c-.3.77-.52 1.58-.66 2.41A8 8 0 0124 17z" fill={primaryFill} /><path d="M46 35a11 11 0 11-22 0 11 11 0 0122 0zm-10-6a1 1 0 10-2 0v5h-5a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5v-5z" fill={primaryFill} /></svg>;
};

export default CameraAdd48Regular;