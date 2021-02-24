import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ImageSearch24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 6.25C21 4.45 19.54 3 17.75 3H6.25A3.25 3.25 0 003 6.25v4.5a5.5 5.5 0 011.5-.88V6.25c0-.97.78-1.75 1.75-1.75h11.5c.97 0 1.75.78 1.75 1.75v11.5c0 .2-.04.4-.1.6l-5.83-5.7-.12-.12a2.25 2.25 0 00-2.25-.38c.26.42.46.89.6 1.38.25-.07.53 0 .72.18l5.81 5.7c-.18.06-.38.09-.58.09h-4.78l.52.51c.28.28.44.63.5.99h3.76c1.8 0 3.25-1.46 3.25-3.25V6.25z" fill={primaryFill} /><path d="M17.5 8.75a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm-3 0a.75.75 0 111.5 0 .75.75 0 01-1.5 0z" fill={primaryFill} /><path d="M9.95 17.89a4.5 4.5 0 10-1.15.98l2.92 2.91a.75.75 0 101.06-1.06l-2.83-2.83zM6.5 18a3 3 0 110-6 3 3 0 010 6z" fill={primaryFill} /></svg>;
};

export default ImageSearch24Regular;