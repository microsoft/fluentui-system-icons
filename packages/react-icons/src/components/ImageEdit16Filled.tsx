import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ImageEdit16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2A2.5 2.5 0 002 4.5v7c0 .5.15.98.41 1.38L6.8 8.49a1.7 1.7 0 012.4 0l.34.34 2.09-2.08a2.56 2.56 0 012.37-.7V4.5A2.5 2.5 0 0011.5 2h-7zm7 3.5a1 1 0 11-2 0 1 1 0 012 0zM13.26 7c-.34.05-.66.2-.92.45l-4.3 4.3c-.35.35-.6.8-.72 1.28l-.3 1.21a.6.6 0 00.73.74l1.22-.3c.48-.12.93-.38 1.29-.73l4.28-4.29a1.56 1.56 0 00-1.28-2.65zM8.83 9.55l-1.49 1.5a3.78 3.78 0 00-1 1.75l-.3 1.2H4.5c-.51 0-.98-.14-1.38-.4L7.5 9.2a.7.7 0 011 0l.33.34z" fill={primaryFill} /></svg>;
};

export default ImageEdit16Filled;