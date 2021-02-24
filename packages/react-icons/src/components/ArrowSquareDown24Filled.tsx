import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowSquareDown24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 3A2.5 2.5 0 003 5.5v13A2.5 2.5 0 005.5 21h13a2.5 2.5 0 002.5-2.5v-13A2.5 2.5 0 0018.5 3h-13zm11.03 8.72c.27.27.3.68.07.98l-.07.08-4 4a.75.75 0 01-.98.07l-.08-.07-4-4a.75.75 0 01.98-1.13l.08.07 2.72 2.72V7.75c0-.38.28-.7.65-.74L12 7c.38 0 .7.28.74.65l.01.1v6.69l2.72-2.72a.75.75 0 01.98-.07l.08.07z" fill={primaryFill} /></svg>;
};

export default ArrowSquareDown24Filled;