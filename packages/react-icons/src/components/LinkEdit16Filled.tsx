import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LinkEdit16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.26 3h-.61a.75.75 0 00.1 1.5h.67c.67.05 1.26.4 1.63.9.46-.3 1-.43 1.52-.4a3.73 3.73 0 00-3.3-2zm.67 3.44L9.88 7.5H5.75a.75.75 0 01-.1-1.5h4.6c.3 0 .57.18.68.44zm2.26-.42a1.58 1.58 0 00-.86.44L9 9.78l-.95.95c-.36.36-.61.8-.73 1.3l-.3 1.2a.6.6 0 00.73.74l1.22-.3c.48-.12.93-.38 1.29-.73l4.28-4.29a1.56 1.56 0 00-1.35-2.64zM6.25 3h-.7a3.75 3.75 0 00.2 7.5h.6a.75.75 0 00-.1-1.5H5.6a2.25 2.25 0 01.15-4.5h.6a.75.75 0 00-.1-1.5z" fill={primaryFill} /></svg>;
};

export default LinkEdit16Filled;