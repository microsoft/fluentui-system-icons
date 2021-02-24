import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ImageSearch24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 8.25a.75.75 0 10-1.5 0 .75.75 0 001.5 0z" fill={primaryFill} /><path d="M3 10.76V6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5c0 .63-.18 1.21-.49 1.7l-6.93-6.8-.13-.12a2.25 2.25 0 00-2.25-.38 5.5 5.5 0 00-8.2-1.4zm10.5-2.5a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z" fill={primaryFill} /><path d="M13.98 21c-.05-.36-.21-.7-.5-.99l-2.23-2.24a5.48 5.48 0 00.55-4.24.75.75 0 01.63.11l.1.08 6.92 6.8c-.5.3-1.08.48-1.7.48h-3.77z" fill={primaryFill} /><path d="M9.95 17.89a4.5 4.5 0 10-1.15.98l2.92 2.91a.75.75 0 101.06-1.06l-2.83-2.83zM6.5 18a3 3 0 100-6 3 3 0 000 6z" fill={primaryFill} /></svg>;
};

export default ImageSearch24Filled;