import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Layer24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.39 3.42l6.36 4.25a1 1 0 010 1.66l-6.36 4.25a2.5 2.5 0 01-2.78 0L4.25 9.33a1 1 0 010-1.66l6.36-4.25a2.5 2.5 0 012.78 0zm6.64 8.77a2 2 0 01-.58.6l-6.05 4.08a2.5 2.5 0 01-2.8 0L4.55 12.8a2 2 0 01-.78-2.29l6.84 4.56c.79.52 1.8.56 2.62.1l.16-.1 6.84-4.56a2 2 0 01-.2 1.7zm0 3.25a2 2 0 01-.58.6l-6.05 4.08a2.5 2.5 0 01-2.8 0l-6.05-4.08a2 2 0 01-.78-2.29l6.84 4.56c.79.52 1.8.56 2.62.1l.16-.1 6.84-4.56a2 2 0 01-.2 1.7z" fill={primaryFill} /></svg>;
};

export default Layer24Filled;