import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SetTopStack16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.42 3.73a.5.5 0 00-.84 0l-.63.98-1.04.2a.5.5 0 00-.25.86l.77.73-.4 1.36a.5.5 0 00.74.56L6 7.65l1.23.77a.5.5 0 00.75-.56L7.57 6.5l.77-.73a.5.5 0 00-.25-.86l-1.04-.2-.63-.98zm-.75 1.7l.33-.5.33.5c.07.12.2.2.33.22l.29.06-.3.27a.5.5 0 00-.13.51l.11.37-.36-.23a.5.5 0 00-.54 0l-.36.23.1-.37a.5.5 0 00-.13-.5l-.29-.28.3-.06a.5.5 0 00.32-.22z" fill={primaryFill} /><path d="M2.5 2C1.67 2 1 2.67 1 3.5v5c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-7zm7 1c.28 0 .5.22.5.5v5a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-5c0-.28.22-.5.5-.5h7z" fill={primaryFill} /><path d="M4.5 12a1.5 1.5 0 01-1.41-1H10a2 2 0 002-2V4.09c.58.2 1 .76 1 1.41V9a3 3 0 01-3 3H4.5z" fill={primaryFill} /><path d="M6.5 14a1.5 1.5 0 01-1.41-1h5.41A3.5 3.5 0 0014 9.5V6.09c.58.2 1 .76 1 1.41v2a4.5 4.5 0 01-4.5 4.5h-4z" fill={primaryFill} /></svg>;
};

export default SetTopStack16Regular;