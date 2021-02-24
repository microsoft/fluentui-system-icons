import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Fps6048Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 12a6 6 0 0112 0v8a6 6 0 01-12 0v-8zm9.5 0a3.5 3.5 0 10-7 0v8a3.5 3.5 0 107 0v-8z" fill={primaryFill} /><path d="M10.02 20.46a6 6 0 102.48-5.33V12a3.5 3.5 0 117 0 1.25 1.25 0 102.5 0 6 6 0 00-12 0v8.25c0 .07 0 .14.02.2zM16 23.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" fill={primaryFill} /><path d="M9.25 30C8.56 30 8 30.56 8 31.25v11.54a1.25 1.25 0 102.5 0V38.5h4.25a1.25 1.25 0 100-2.5H10.5v-3.5h5.26a1.25 1.25 0 100-2.5H9.25z" fill={primaryFill} /><path d="M20.75 30c-.69 0-1.25.56-1.25 1.25v11.54a1.25 1.25 0 102.5 0V38.5h2.25a4.25 4.25 0 000-8.5h-3.5zm3.5 6H22v-3.5h2.25a1.75 1.75 0 110 3.5z" fill={primaryFill} /><path d="M33 34.16c0-.92.74-1.66 1.66-1.66h1.59c.69 0 1.25.56 1.25 1.25a1.25 1.25 0 102.5 0A3.75 3.75 0 0036.25 30h-1.6a4.16 4.16 0 100 8.31h1.26a1.6 1.6 0 010 3.19h-1.66c-.69 0-1.25-.56-1.25-1.25a1.25 1.25 0 10-2.5 0A3.75 3.75 0 0034.25 44h1.66a4.1 4.1 0 100-8.19h-1.25c-.92 0-1.66-.74-1.66-1.65z" fill={primaryFill} /></svg>;
};

export default Fps6048Regular;