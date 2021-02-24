import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextChangeCase24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.51 2.75a1 1 0 01.93.67l5.5 15.5a1 1 0 01-1.88.66L19.79 16h-6.96l-1.4 3.61a1 1 0 01-1.86-.72l6-15.5a1 1 0 01.94-.64zm-.05 3.88L13.6 14h5.48l-2.62-7.37z" fill={primaryFill} /><path d="M8.25 20.26a1 1 0 01-.96-.7c-.89.46-1.73.7-2.54.7-1.97 0-3.5-1.4-3.5-3.5 0-.92.32-1.74.91-2.35a4.02 4.02 0 012.47-1.14 7.7 7.7 0 012.6.13 1.23 1.23 0 00-.34-.75c-.23-.22-.6-.36-1.19-.4-.95-.04-1.55.1-1.88.33a1 1 0 11-1.15-1.64 4.7 4.7 0 012.83-.69l.3.01c1.02.05 1.87.37 2.47.95.6.57.93 1.37.98 2.33v5.72a1 1 0 01-.86 1h-.14zm-3.38-4.97c-.58.07-.98.26-1.24.5-.25.25-.38.59-.38 1 0 .5.16.87.41 1.11.25.25.62.4 1.09.4.6 0 1.4-.29 2.36-.92l.14-.1v-1.77l-.12-.04a5.8 5.8 0 00-2.26-.18z" fill={primaryFill} /></svg>;
};

export default TextChangeCase24Filled;