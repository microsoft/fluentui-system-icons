import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const StrikethroughGaNa20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 4.75a.75.75 0 00-1.5 0V9h1.5V4.75zM1.75 10a.75.75 0 000 1.5h2.41c-.37.23-.87.4-1.53.5a.75.75 0 10.24 1.5c1.68-.27 2.75-1 3.37-2H8v4.75a.75.75 0 001.5 0V11.5h1.12l-.12 1.7a.75.75 0 00.81.8l3-.25a.75.75 0 10-.12-1.5l-2.13.18.06-.93H16v4.75a.75.75 0 001.5 0V11.5h.75a.75.75 0 000-1.5H1.75zm10.54-1h-1.5L11 5.7a.75.75 0 111.5.1L12.29 9zM16 9h1.5V4.75a.75.75 0 00-1.5 0V9zM5.45 9h1.51C7 8.56 7 8.14 7 7.75A.75.75 0 006.25 7h-3.5a.75.75 0 100 1.5h2.74l-.04.5z" fill={primaryFill} /></svg>;
};

export default StrikethroughGaNa20Filled;