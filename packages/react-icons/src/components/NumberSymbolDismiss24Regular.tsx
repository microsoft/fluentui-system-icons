import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const NumberSymbolDismiss24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.99 2.89a.75.75 0 10-1.48-.28L8.5 8H3.75a.75.75 0 100 1.5h4.46l-.95 5H2.75a.75.75 0 000 1.5h4.23l-.97 5.11a.75.75 0 101.48.28L8.5 16h2.66c.13-.52.32-1.02.56-1.5H8.8l.95-5h5.47l-.4 2.09c.52-.23 1.06-.4 1.63-.5l.3-1.59h4.51a.75.75 0 100-1.5h-4.23L18 2.9a.75.75 0 00-1.48-.28L15.5 8h-5.47L11 2.9z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-7.15-2.35a.5.5 0 00-.7.7l1.64 1.65-1.64 1.65a.5.5 0 00.7.7l1.65-1.64 1.65 1.64a.5.5 0 00.7-.7l-1.64-1.65 1.64-1.65a.5.5 0 00-.7-.7l-1.65 1.64-1.65-1.64z" fill={primaryFill} /></svg>;
};

export default NumberSymbolDismiss24Regular;