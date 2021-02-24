import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ImageOff24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l1.26 1.26c-.3.5-.48 1.08-.48 1.71v11.5c0 .63.18 1.21.49 1.7l6.93-6.8.14-.13c.17-.14.36-.25.56-.34l.95.95-.6.59-6.92 6.8c.5.3 1.08.48 1.7.48h11.5c.62 0 1.2-.18 1.7-.48l-.02-.03 1.29 1.3a.75.75 0 001.06-1.07L3.28 2.22z" fill={primaryFill} /><path d="M15.75 7.5a.75.75 0 100 1.5.75.75 0 000-1.5z" fill={primaryFill} /><path d="M21 17.75v.07L6.18 3h11.57C19.55 3 21 4.46 21 6.25v11.5zM15.75 6a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" fill={primaryFill} /></svg>;
};

export default ImageOff24Filled;