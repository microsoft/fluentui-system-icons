import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiplier12X32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.98 13.75a1.25 1.25 0 001.5-.96c0-.04.03-.1.06-.18.07-.16.18-.38.35-.6.32-.38.88-.83 1.98-.83 1.03 0 1.75.34 2.17.79.4.43.64 1.1.48 2.07-.09.49-.33.78-.83 1.06a9 9 0 01-1.54.61l-.82.28c-.92.33-2.04.8-2.9 1.71A5.62 5.62 0 0012 21.75 1.25 1.25 0 0013.25 23h7.5a1.25 1.25 0 000-2.5h-6.1c.13-.5.35-.83.59-1.08a4.79 4.79 0 011.93-1.08l.57-.19c.7-.23 1.5-.5 2.17-.87a3.88 3.88 0 002.07-2.82 4.8 4.8 0 00-1.11-4.2 5.36 5.36 0 00-4-1.58 4.84 4.84 0 00-4.83 3.55v.02h-.01c0 .01-.08.36 0 .01-.15.67.27 1.34.95 1.5zM10 23a1 1 0 100-2 1 1 0 000 2zm13.37-6.63a1.25 1.25 0 011.76 0l1.37 1.36 1.37-1.36a1.25 1.25 0 011.76 1.76l-1.36 1.37 1.36 1.37a1.25 1.25 0 01-1.76 1.76l-1.37-1.36-1.37 1.36a1.25 1.25 0 01-1.76-1.76l1.36-1.37-1.36-1.37a1.25 1.25 0 010-1.76zM7.2 9.09c.48.19.79.65.79 1.16v11.5a1.25 1.25 0 11-2.5 0v-8.5c-.43.32-.95.68-1.6 1.07a1.25 1.25 0 01-1.3-2.14 11.1 11.1 0 002.02-1.47c.29-.27.48-.5.71-.75l.5-.56c.36-.38.9-.5 1.38-.31z" fill={primaryFill} /></svg>;
};

export default Multiplier12X32Filled;