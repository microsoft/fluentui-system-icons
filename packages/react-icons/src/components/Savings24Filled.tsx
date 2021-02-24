import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Savings24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.82 11.13a5 5 0 001.97-2.7A6.89 6.89 0 0122 12.5a7.1 7.1 0 01-3 5.93v1.83c0 .97-.78 1.75-1.75 1.75H16a1.5 1.5 0 01-1.5-1.5h-2c0 .83-.67 1.5-1.5 1.5H9.75C8.78 22 8 21.22 8 20.25v-.68a7 7 0 01-2.53-1.54 9.86 9.86 0 01-1.6-2.13.49.49 0 00-.33-.26A1.84 1.84 0 012 13.83v-1.75c0-.85.6-1.57 1.44-1.7.09-.02.22-.1.28-.29.19-.58.56-1.43 1.25-2.12A7.94 7.94 0 017 6.52V3.67c0-.94 1.13-1.32 1.74-.72.33.33.81.77 1.34 1.14.53.37 1.04.6 1.46.66a5 5 0 00-.45 3.17c.18.96.9 1.57 1.6 1.85l3.7 1.53c.68.29 1.63.38 2.43-.17zM8 11a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M18.26 10.3a3.98 3.98 0 001.44-4.83 4 4 0 00-7.63 2.27 1.27 1.27 0 00.3.62c.19.21.43.38.7.49l3.7 1.53c.49.2 1.05.22 1.49-.08z" fill={primaryFill} /></svg>;
};

export default Savings24Filled;