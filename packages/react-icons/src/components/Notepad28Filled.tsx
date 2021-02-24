import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Notepad28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2c.41 0 .75.34.75.75V4h3.75V2.75a.75.75 0 011.5 0V4h.75C21.99 4 23 5 23 6.25V18.5h-4.75c-1.25 0-2.25 1-2.25 2.25v4.75H6.75c-1.24 0-2.25-1-2.25-2.25v-17C4.5 5.01 5.5 4 6.75 4H8V2.75a.75.75 0 011.5 0V4h3.75V2.75c0-.41.34-.75.75-.75zm-6 8.25c0 .41.34.75.75.75h10a.75.75 0 000-1.5h-10a.75.75 0 00-.75.75zm0 4.5c0 .41.34.75.75.75h10a.75.75 0 000-1.5h-10a.75.75 0 00-.75.75zm0 4.5c0 .41.34.75.75.75h4.5a.75.75 0 000-1.5h-4.5a.75.75 0 00-.75.75z" fill={primaryFill} /><path d="M17.5 25.06L22.56 20h-4.31a.75.75 0 00-.75.75v4.31z" fill={primaryFill} /></svg>;
};

export default Notepad28Filled;