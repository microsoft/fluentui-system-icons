import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShapeUnion24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 2A3.25 3.25 0 002 5.25v8a3.3 3.3 0 00.56 1.82 3.27 3.27 0 002.4 1.42l.29.01H7.5v2.25A3.24 3.24 0 0010.75 22h8c1.8 0 3.25-1.46 3.25-3.25v-8a3.25 3.25 0 00-3.25-3.25H16.5V5.25a3.28 3.28 0 00-1.54-2.77 3.29 3.29 0 00-1.7-.48H5.24zm.69 1.5L3.5 5.94v-.69c0-.97.78-1.75 1.75-1.75h.69zM3.5 8.06L8.06 3.5h1.88L3.5 9.94V8.06zm8.56-4.56h1.19c.2 0 .4.04.59.1L3.6 13.84c-.06-.19-.1-.38-.1-.59v-1.19l8.56-8.56zm2.84 1.16c.06.19.1.38.1.59v1.19L6.44 15H5.25c-.2 0-.4-.04-.59-.1L14.9 4.66zm.1 3.9a.5.5 0 00.5.44h.94L9 16.44v-.94a.5.5 0 00-.44-.5L15 8.56zm3.56.44h.19c.47 0 .9.18 1.2.48L9.49 19.96c-.3-.32-.48-.74-.48-1.21v-.19L18.56 9zm1.94 2.06v1.88l-7.56 7.56h-1.88l9.44-9.44zm0 4v1.88l-3.56 3.56h-1.88l5.44-5.44zm-.03 4.03a1.75 1.75 0 01-1.38 1.38l1.38-1.38z" fill={primaryFill} /></svg>;
};

export default ShapeUnion24Regular;