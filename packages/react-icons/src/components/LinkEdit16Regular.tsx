import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LinkEdit16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 3H9.4a.5.5 0 00.1 1h1.16c.81.06 1.52.5 1.94 1.14.34-.12.7-.16 1.06-.13A3.5 3.5 0 0010.5 3zm.49 3.39l-.61.61H5.5a.5.5 0 01-.09-1h5.09a.5.5 0 01.49.39zm2.15-.36c-.06 0-.12.02-.18.04-.23.08-.44.2-.62.38L9.06 9.73l-1.01 1.01c-.36.36-.61.8-.73 1.3l-.3 1.2a.6.6 0 00.73.74l1.22-.3c.48-.12.93-.38 1.29-.73l4.28-4.29a1.56 1.56 0 00-1.4-2.63zM6.5 3H5.3a3.5 3.5 0 00.2 7h1l.09-.01a.5.5 0 00-.1-1H5.35A2.5 2.5 0 015.5 4h1.09a.5.5 0 00-.1-1z" fill={primaryFill} /></svg>;
};

export default LinkEdit16Regular;