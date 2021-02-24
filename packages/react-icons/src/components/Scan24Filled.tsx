import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Scan24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm3.33 12.22a4 4 0 01-.26.34l-.14.17-3.95 5.2a8.07 8.07 0 006.24-1.87l-1.9-3.84zm-3.9 1.8H5.09a8.03 8.03 0 003.82 3.36l2.54-3.36zm8.32-6.03h-4.28l.06.13.12.23 3 6.09a7.96 7.96 0 001.1-6.45zM5.05 8.05a7.96 7.96 0 00-.8 5.97h4.29l-.06-.09-3.44-5.88zM12 10a2 2 0 00-1.58.77l-.1.17a1 1 0 01-.09.12 2 2 0 003.17 2.36l.16-.2a1 1 0 01.12-.13A2 2 0 0012 10zm0-6c-2.2 0-4.2.9-5.65 2.33l2.17 3.7a4 4 0 01.25-.39L12.15 4H12zm2.28.33L12.1 8h6.83a8.02 8.02 0 00-4.64-3.66z" fill={primaryFill} /></svg>;
};

export default Scan24Filled;