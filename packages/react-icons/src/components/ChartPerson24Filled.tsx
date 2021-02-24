import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChartPerson24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 2c.41 0 .75.34.75.75V3h6.25C20.55 3 22 4.46 22 6.25V13h-.26l.01-.25a3.75 3.75 0 10-6.3 2.75h-.95A2.5 2.5 0 0012 18v.5c0 .17.01.33.03.5H9.6l-2.27 2.73a.75.75 0 01-1.16-.96L7.65 19h-2.4A3.25 3.25 0 012 15.75v-9.5C2 4.45 3.46 3 5.25 3H11v-.25c0-.41.34-.75.75-.75zM6 7.75c0 .41.34.75.75.75h4a.75.75 0 000-1.5h-4a.75.75 0 00-.75.75zM6.75 10a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zM6 13.75c0 .41.34.75.75.75h5.5a.75.75 0 000-1.5h-5.5a.75.75 0 00-.75.75zm14 .89a2.74 2.74 0 01-4.75-1.89A2.75 2.75 0 1120 14.64zm1.9 1.91a1.5 1.5 0 00-.4-.05h-7c-.83 0-1.5.67-1.5 1.5v.5c0 .17.01.33.04.5.28 1.8 2.09 3.5 4.96 3.5 3.14 0 5-2.03 5-4V18a1.5 1.5 0 00-1.1-1.45z" fill={primaryFill} /></svg>;
};

export default ChartPerson24Filled;