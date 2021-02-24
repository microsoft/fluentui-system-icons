import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CallTransfer20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.55 2.44a4.1 4.1 0 012.99-.32c.5.13.94.45 1.2.9l.97 1.7a2.5 2.5 0 01-.67 3.24l-.6.45c-.28.22-.4.52-.34.78.18.8.59 1.56 1.15 2.12.17.16.47.22.8.1l.66-.26a2.5 2.5 0 013.07 1.11l.95 1.7c.27.48.31 1.04.12 1.54a3.9 3.9 0 01-1.96 2.22c-.9.41-1.94.4-2.88-.24-1.5-1-3.3-2.68-4.94-5.48a13.27 13.27 0 01-2.03-7.06 2.87 2.87 0 011.51-2.5z" fill={primaryFill} /><path d="M12 8.5a.5.5 0 11-1 0 .5.5 0 011 0z" fill={primaryFill} /><path d="M12.5 8a.5.5 0 100-1 .5.5 0 000 1z" fill={primaryFill} /><path d="M14 6.5a.5.5 0 11-1 0 .5.5 0 011 0z" fill={primaryFill} /><path d="M17 7.5a.5.5 0 001 0v-5a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h3.8l-2.15 2.15a.5.5 0 00.7.7L17 3.71V7.5z" fill={primaryFill} /></svg>;
};

export default CallTransfer20Filled;