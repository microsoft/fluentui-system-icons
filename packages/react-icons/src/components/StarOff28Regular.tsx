import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const StarOff28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22l22.5 22.5a.75.75 0 01-1.06 1.06l-3.32-3.32.09.49a1.45 1.45 0 01-2.1 1.52L14 21.64l-5.38 2.83a1.45 1.45 0 01-2.1-1.52l1.02-6-4.35-4.24c-.86-.84-.39-2.3.8-2.47l4.53-.66-6.3-6.3a.75.75 0 111.06-1.06zm16.29 18.4L9.84 10.9l-5.53.8 4.3 4.2c.34.33.5.81.41 1.28L8.01 23.1l5.31-2.8c.43-.22.93-.22 1.35 0L20 23.1l-.42-2.47z" fill={primaryFill} /><path d="M10.85 7.66l1.12 1.12L14 4.66l2.66 5.39c.2.43.62.72 1.09.8l5.94.86-4.3 4.19-.15.16 1.28 1.28-.06-.39 4.35-4.24c.86-.84.39-2.3-.8-2.47l-6.02-.88-2.69-5.45a1.45 1.45 0 00-2.6 0l-1.85 3.75z" fill={primaryFill} /></svg>;
};

export default StarOff28Regular;