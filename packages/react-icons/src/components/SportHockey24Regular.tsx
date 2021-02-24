import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SportHockey24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.49 6.87a.75.75 0 00-.62-.86.77.77 0 00-.86.64 3.78 3.78 0 01-.11.46c-.1.32-.24.79-.48 1.35a12.84 12.84 0 01-2.73 4.01 14.11 14.11 0 01-6.07 3.54h-.03a.75.75 0 00-.57.9c.14.66.89.57.89.57h.02l.03-.01a5.93 5.93 0 00.6-.17 15.61 15.61 0 006.18-3.77 14.34 14.34 0 003.6-6.03 8.21 8.21 0 00.14-.57v-.05h.01z" fill={primaryFill} /><path d="M2.35 12.57c-.68 1.9-.77 3.88.44 5.1l.23.24a629.85 629.85 0 003.03 3.04c1.28 1.28 3.3 1.3 5.29.66a16.3 16.3 0 006.22-4.04 16.3 16.3 0 004.04-6.22c.64-1.99.62-4.01-.66-5.3a771.08 771.08 0 01-2.9-2.9l-.35-.37c-1.23-1.21-3.2-1.12-5.1-.44-1.97.71-4.15 2.14-6.12 4.11a17.45 17.45 0 00-4.12 6.12zm1.41.51a15.98 15.98 0 013.77-5.57 15.98 15.98 0 015.56-3.76c1.78-.64 2.97-.47 3.54.1l.35.35a1731.6 1731.6 0 002.9 2.92c.67.67.87 1.96.3 3.76a14.81 14.81 0 01-3.68 5.63 14.81 14.81 0 01-5.62 3.67c-1.8.58-3.1.38-3.77-.3l-2.36-2.36-.66-.67-.23-.23c-.57-.57-.74-1.76-.1-3.54z" fill={primaryFill} /></svg>;
};

export default SportHockey24Regular;