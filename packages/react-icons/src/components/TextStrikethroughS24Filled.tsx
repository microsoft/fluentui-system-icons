import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextStrikethroughS24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.85 11.5h5.65a1 1 0 110 2h-2.39c.66.77 1 1.67 1 2.68 0 2.93-3.28 4.92-7.03 4.48-2.33-.27-3.97-1.22-4.83-2.83-.26-.49-.2-1.02.25-1.33.46-.32 1.26-.1 1.52.39.53 1 1.6 1.59 3.29 1.78 2.59.3 4.8-.9 4.8-2.49 0-1.1-.55-1.94-2.1-2.68H5a1 1 0 110-2h8.85zM6.99 9.7l-.3-.52a3.64 3.64 0 01-.44-1.83c.16-2.96 2.94-4.71 6.6-4.29 2.27.27 4 1.09 5.15 2.49a1 1 0 01-.15 1.4.99.99 0 01-1.4-.1c-.81-.99-2.07-1.6-3.82-1.8-2.57-.3-4.38.72-4.38 2.32 0 .72.24 1.22.77 1.81.22.26.64.53 1.26.82H7.2c-.1-.17-.18-.27-.2-.3z" fill={primaryFill} /></svg>;
};

export default TextStrikethroughS24Filled;