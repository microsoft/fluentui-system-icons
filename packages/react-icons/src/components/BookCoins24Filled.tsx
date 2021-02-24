import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BookCoins24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4.5A2.5 2.5 0 016.5 2H18a2.5 2.5 0 012.5 2.5v14.25c0 .41-.34.75-.75.75H5.5a1 1 0 001 1h13.25a.75.75 0 010 1.5H6.5A2.5 2.5 0 014 19.5v-15zm6.2 2.96C9.62 7.74 9 8.24 9 9s.62 1.26 1.2 1.54c.62.3 1.43.46 2.3.46.87 0 1.68-.17 2.3-.46.58-.28 1.2-.78 1.2-1.54s-.62-1.26-1.2-1.54A5.46 5.46 0 0012.5 7c-.87 0-1.68.17-2.3.46zM16 10.9A5.58 5.58 0 0112.5 12 5.58 5.58 0 019 10.89V11c0 1.1 1.57 2 3.5 2s3.5-.9 3.5-2v-.11zM12.5 14A5.58 5.58 0 019 12.89V13c0 1.1 1.57 2 3.5 2s3.5-.9 3.5-2v-.11A5.58 5.58 0 0112.5 14z" fill={primaryFill} /></svg>;
};

export default BookCoins24Filled;