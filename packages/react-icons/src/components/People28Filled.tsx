import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const People28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 16h11a2 2 0 012 1.85v2.65c0 4.2-4.29 5.5-7.5 5.5-3.15 0-7.33-1.25-7.5-5.25V18a2 2 0 011.85-2H4zm13.22 0H24a2 2 0 012 1.85V20c0 3.76-3.43 5-6 5a7.74 7.74 0 01-3.3-.73 5.6 5.6 0 001.3-3.46V18c0-.7-.25-1.34-.65-1.85l-.13-.15H24h-6.78zM9.5 3a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm11 2a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" fill={primaryFill} /></svg>;
};

export default People28Filled;