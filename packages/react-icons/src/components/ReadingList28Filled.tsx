import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ReadingList28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 7.5a1.5 1.5 0 012.75-.83A1 1 0 008.4 5.56 3.5 3.5 0 105.48 11H21a1 1 0 100-2H5.5A1.5 1.5 0 014 7.5z" fill={primaryFill} /><path d="M12 5a1 1 0 100 2h13a1 1 0 100-2H12z" fill={primaryFill} /><path d="M7 13a1 1 0 100 2h18a1 1 0 100-2H7z" fill={primaryFill} /><path d="M2 18a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z" fill={primaryFill} /><path d="M7 21a1 1 0 100 2h18a1 1 0 100-2H7z" fill={primaryFill} /></svg>;
};

export default ReadingList28Filled;