import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LinkSquare20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 3C3.67 3 3 3.67 3 4.5v6c0 .83.67 1.5 1.5 1.5H6v1H4.5A2.5 2.5 0 012 10.5v-6A2.5 2.5 0 014.5 2h6A2.5 2.5 0 0113 4.5v6a2.5 2.5 0 01-2.5 2.5H9v-1h1.5c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5h-6zm5 4H11v1H9.5C8.67 8 8 8.67 8 9.5v6c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5H14V7h1.5A2.5 2.5 0 0118 9.5v6a2.5 2.5 0 01-2.5 2.5h-6A2.5 2.5 0 017 15.5v-6A2.5 2.5 0 019.5 7z" fill={primaryFill} /></svg>;
};

export default LinkSquare20Regular;