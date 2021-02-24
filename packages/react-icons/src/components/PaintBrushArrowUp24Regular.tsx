import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PaintBrushArrowUp24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a2.5 2.5 0 00-2.5 2.5v3H7.11c-1.17 0-2.08 1-2.04 2.13.04 1.3.05 3.36-.22 5.48-.26 2.15-.78 4.27-1.73 5.73A.75.75 0 003.75 22h12.8v-1.5h-5.42l.35-1.59a.75.75 0 00-1.46-.32l-.43 1.91H8.3a13.66 13.66 0 00.7-2.64.75.75 0 00-1.48-.22 10.67 10.67 0 01-.83 2.8l-.02.06H5a18.05 18.05 0 001.33-5.2c.1-.79.16-1.57.2-2.3H17.5v1.17a1.75 1.75 0 011.5 0V9.75c0-1.24-1-2.25-2.25-2.25H14.5v-3A2.5 2.5 0 0012 2zm5.5 9.5H6.59c.01-.74 0-1.4-.02-1.92A.56.56 0 017.11 9h3.14c.41 0 .75-.34.75-.75V4.5a1 1 0 112 0v3.75c0 .41.34.75.75.75h3c.41 0 .75.34.75.75v1.75z" fill={primaryFill} /><path d="M15.22 18.78c.3.3.77.3 1.06 0l1.27-1.27v4.74a.75.75 0 001.5 0v-4.64l1.17 1.17a.75.75 0 101.06-1.06l-2.5-2.5a.75.75 0 00-1.06 0l-2.5 2.5c-.3.3-.3.77 0 1.06z" fill={primaryFill} /></svg>;
};

export default PaintBrushArrowUp24Regular;