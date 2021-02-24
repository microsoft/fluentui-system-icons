import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SendClock20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.72 1.05l15.36 7.57a.5.5 0 010 .9l-.66.32a5.5 5.5 0 00-8.4 4.14l-6.3 3.1a.5.5 0 01-.7-.58l1.52-5.74a.5.5 0 01.4-.37l6.88-1.14a.25.25 0 00.19-.15l.02-.06a.25.25 0 00-.15-.27l-.06-.02L3.9 7.6a.5.5 0 01-.4-.37l-1.48-5.6a.5.5 0 01.7-.58z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM14.5 12a.5.5 0 00-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 000-1h-1v-1.5a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
};

export default SendClock20Filled;