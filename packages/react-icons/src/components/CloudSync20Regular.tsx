import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CloudSync20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.65 7.25C14.4 4.92 12.82 3 10 3 7.18 3 5.59 4.9 5.35 7.25H5.1A3.34 3.34 0 002 10.62 3.34 3.34 0 005 14v-1a2.35 2.35 0 01-2-2.37 2.33 2.33 0 012.28-2.37h.07a1 1 0 001-.9C6.55 5.32 7.89 4 10 4c2.1 0 3.45 1.32 3.65 3.35a1 1 0 001 .9h.07A2.33 2.33 0 0117 10.62c0 1.22-.88 2.22-2 2.36v1c1.68-.14 3-1.59 3-3.36a3.33 3.33 0 00-3.28-3.37h-.07z" fill={primaryFill} /><path d="M10.85 7.35l-.65.66a4 4 0 012.66 6.79.5.5 0 11-.72-.7A3 3 0 0010.21 9l.64.65a.5.5 0 01-.7.7l-1.5-1.5a.5.5 0 010-.7l1.5-1.5a.5.5 0 01.7.7z" fill={primaryFill} /><path d="M7.9 9.86a.5.5 0 00-.7-.72A3.99 3.99 0 0010.3 16l-.65.66a.5.5 0 10.7.7l1.5-1.5a.5.5 0 000-.7l-1.5-1.5a.5.5 0 00-.7.7l.63.64L10 15a3 3 0 01-2.1-5.14z" fill={primaryFill} /></svg>;
};

export default CloudSync20Regular;