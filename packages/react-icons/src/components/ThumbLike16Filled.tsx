import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ThumbLike16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.58 1.05c-.75-.2-1.34.35-1.55.87-.24.6-.45 1.02-.7 1.53-.16.3-.33.65-.53 1.09-.48 1-.95 1.65-1.3 2.04a4.06 4.06 0 01-.5.49h-.02L3.11 8.19a2 2 0 00-.86 2.43l.52 1.38a2 2 0 001.28 1.2l5.35 1.69a2.5 2.5 0 003.15-1.68l1.36-4.65A2 2 0 0012 6h-1.38l.2-.74c.13-.56.24-1.2.23-1.74-.01-.5-.06-1.02-.27-1.46-.22-.48-.6-.83-1.19-1z" fill={primaryFill} /></svg>;
};

export default ThumbLike16Filled;