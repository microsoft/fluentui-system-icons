import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowReplyAll48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.79 19.99l9.16-9.17a1.75 1.75 0 012.6 2.35l-.12.13-6.2 6.2H25c3.34 0 6.45.74 9.16 2.17l.4.22c2.76 1.54 5 3.79 6.55 6.55A19.42 19.42 0 0143.5 38a1.75 1.75 0 11-3.5 0c0-2.92-.67-5.59-1.94-7.85a13.51 13.51 0 00-5.21-5.21A15.78 15.78 0 0025.48 23L25 23h-4.78l6.21 6.2c.64.65.68 1.67.11 2.36l-.11.12c-.64.65-1.66.68-2.35.12l-.13-.12-9.19-9.2a1.77 1.77 0 01-.16-.18l-.02-.02a1.7 1.7 0 01-.27-.56l-.02-.11-.03-.13v-.11l-.01-.15v-.13l.02-.1c.04-.25.13-.5.27-.71l.01-.01c.07-.1.15-.2.24-.28l9.16-9.17L14.8 20zM5.76 20l9.2-9.19a1.75 1.75 0 012.58 2.35l-.11.13-7.96 7.95 7.96 7.96a1.75 1.75 0 01-2.35 2.59l-.13-.12-9.19-9.2a1.75 1.75 0 01-.11-2.34l.11-.13 9.2-9.19-9.2 9.2z" fill={primaryFill} /></svg>;
};

export default ArrowReplyAll48Filled;