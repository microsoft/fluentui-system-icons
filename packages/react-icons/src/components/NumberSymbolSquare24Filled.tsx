import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const NumberSymbolSquare24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.44 11l-.4 2h-2.47l.4-2h2.47zM6.25 3A3.25 3.25 0 003 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25zm4.65 4.51c.4.09.67.48.59.89l-.22 1.1h2.47l.28-1.4a.75.75 0 011.47.3l-.22 1.1h.98a.75.75 0 010 1.5h-1.28l-.4 2h1.18a.75.75 0 010 1.5h-1.48l-.28 1.4a.75.75 0 01-1.48-.3l.23-1.1h-2.47l-.28 1.4a.75.75 0 01-1.48-.3l.23-1.1h-.99a.75.75 0 010-1.5h1.29l.4-2H8.25a.75.75 0 010-1.5h1.49l.28-1.4c.08-.4.47-.67.88-.59z" fill={primaryFill} /></svg>;
};

export default NumberSymbolSquare24Filled;