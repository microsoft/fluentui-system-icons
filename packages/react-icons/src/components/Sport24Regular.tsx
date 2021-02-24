import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Sport24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.09 7.19a8.2 8.2 0 00-.18.5c.46.06.96.16 1.48.3a6.7 6.7 0 011.09-1.95l4.21 4.21-.25.25a10.2 10.2 0 011.06 1.06l.25-.25 4.21 4.21a6.7 6.7 0 01-1.94 1.09c.13.52.23 1.02.3 1.48a8.2 8.2 0 005-4.58A8.26 8.26 0 106.1 7.2zm13.96.62c-.88.7-2.09.78-3.04.25l2.01-2.02a6.7 6.7 0 011.03 1.77zm-4.13 1.33c1.34.94 3.11 1.01 4.52.21a6.74 6.74 0 01-1.42 5.11l-4.2-4.21 1.1-1.1zm-1.06-1.06l-1.11 1.1-4.21-4.2a6.74 6.74 0 015.1-1.42c-.8 1.4-.72 3.18.22 4.52zM15.94 7a2.75 2.75 0 01.25-3.04 6.7 6.7 0 011.77 1.03l-2.02 2.01zm-8.97 6.48c.3-.3.77-.3 1.06 0l2.5 2.5a.75.75 0 11-1.06 1.06l-2.5-2.5a.75.75 0 010-1.06zm-4.94-2.45a2.3 2.3 0 012.49-2.5c1.98.16 5.34.78 7.76 3.2s3.04 5.78 3.2 7.76a2.3 2.3 0 01-2.5 2.5c-1.98-.16-5.34-.78-7.76-3.2S2.18 13 2.02 11.02zm2.38-1a.8.8 0 00-.89.89c.15 1.86.72 4.77 2.76 6.81s4.95 2.62 6.82 2.76a.8.8 0 00.88-.89c-.14-1.86-.72-4.77-2.76-6.81s-4.95-2.61-6.81-2.76z" fill={primaryFill} /></svg>;
};

export default Sport24Regular;