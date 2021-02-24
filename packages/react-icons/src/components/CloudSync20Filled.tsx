import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CloudSync20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 3c2.82 0 4.41 1.92 4.65 4.25h.07A3.33 3.33 0 0118 10.62 3.33 3.33 0 0114.72 14h-.14a4.98 4.98 0 00-2.63-6.6 1.5 1.5 0 00-2.51-1.46l-1.5 1.5a1.5 1.5 0 00-.35.56c-.4 0-.79.13-1.09.43A4.99 4.99 0 005.42 14h-.14A3.33 3.33 0 012 10.62a3.33 3.33 0 013.28-3.37h.07C5.6 4.9 7.18 3 10 3z" fill={primaryFill} /><path d="M10.85 7.35a.5.5 0 00-.7-.7l-1.5 1.5a.5.5 0 000 .7l1.5 1.5a.5.5 0 00.7-.7L10.21 9a3 3 0 011.93 5.09.5.5 0 10.72.7A3.99 3.99 0 0010.2 8l.65-.65z" fill={primaryFill} /><path d="M7.9 9.86a.5.5 0 00-.7-.72A3.99 3.99 0 0010.3 16l-.65.66a.5.5 0 10.7.7l1.5-1.5a.5.5 0 000-.7l-1.5-1.5a.5.5 0 00-.7.7l.63.64L10 15a3 3 0 01-2.1-5.14z" fill={primaryFill} /></svg>;
};

export default CloudSync20Filled;