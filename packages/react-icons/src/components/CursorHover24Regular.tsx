import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CursorHover24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.5 5.5h-15a1 1 0 00-1 1v9a1 1 0 001 1H9V18H4.5A2.5 2.5 0 012 15.5v-9A2.5 2.5 0 014.5 4h15A2.5 2.5 0 0122 6.5v9a2.5 2.5 0 01-2.02 2.45 1.75 1.75 0 00-.7-1.11l-.33-.34h.55a1 1 0 001-1v-9a1 1 0 00-1-1z" fill={primaryFill} /><path d="M11.28 10.22a.75.75 0 00-1.28.53v10.5a.75.75 0 001.37.42l2.46-3.58 4.27.9a.75.75 0 00.68-1.27l-7.5-7.5zm.22 8.62v-6.28L15.94 17l-2.29-.48a.75.75 0 00-.77.3l-1.38 2.02z" fill={primaryFill} /></svg>;
};

export default CursorHover24Regular;