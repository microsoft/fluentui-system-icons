import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Dock24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.8 10h4.45a.75.75 0 01.1 1.49H4.8c-.67 0-1.2.46-1.26 1v.12l-.03 4.78c0 .56.49 1.04 1.14 1.1H19.23c.67 0 1.2-.44 1.26-1l.01-.1.02-4.78c0-.56-.49-1.05-1.14-1.1l-.13-.01h-4.5a.75.75 0 01-.1-1.5h4.6a2.7 2.7 0 012.77 2.44v.17L22 17.39c0 1.4-1.16 2.52-2.6 2.6H4.77a2.7 2.7 0 01-2.76-2.44L2 17.38l.02-4.77c0-1.4 1.16-2.52 2.6-2.6l.17-.01h4.46-4.46zm7.81-6.8l.1.09L16.43 7a1 1 0 01-1.32 1.5l-.1-.08L13 6.4V15a1 1 0 01-.88 1H12a1 1 0 01-1-.88V6.4L8.98 8.43a1 1 0 01-1.32.08l-.09-.08a1 1 0 01-.08-1.32l.08-.1 3.72-3.72a1 1 0 011.32-.08z" fill={primaryFill} /></svg>;
};

export default Dock24Filled;