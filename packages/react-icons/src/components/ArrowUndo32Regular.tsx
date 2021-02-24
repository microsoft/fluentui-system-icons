import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowUndo32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23.37 7.05a5.9 5.9 0 00-4.61-2.1 7 7 0 00-5 2.56L8.38 14H17a1 1 0 110 2H6a1 1 0 01-1-1V4a1 1 0 112 0v8.54l5.24-6.33.01-.01a9 9 0 016.45-3.25 7.9 7.9 0 016.17 2.77 8.41 8.41 0 01-.01 11.2l-5.59 5.83-5.43 5.63-.32.32a1 1 0 01-1.43-1.4l.3-.31h.01l5.43-5.62 5.56-5.82a6.42 6.42 0 00-.02-8.5z" fill={primaryFill} /></svg>;
};

export default ArrowUndo32Regular;