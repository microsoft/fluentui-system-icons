import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const StarOff16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.36 13.06a.9.9 0 01-1.32.89L8 12.35l-3.04 1.6a.9.9 0 01-1.3-.95l.57-3.39-2.46-2.4a.9.9 0 01.5-1.53l2.36-.34-3.48-3.49a.5.5 0 11.7-.7l13 13a.5.5 0 01-.7.7l-1.8-1.79zm-1.22-1.22L5.5 6.22l-2.9.42 2.36 2.3c.21.2.3.5.26.79l-.56 3.24 2.91-1.53a.9.9 0 01.84 0l2.9 1.53-.18-1.13z" fill={primaryFill} /><path d="M13.39 6.64l-2.35 2.28.74.73-.01-.04 2.46-2.4a.9.9 0 00-.5-1.53l-3.4-.5L8.8 2.1a.9.9 0 00-1.62 0l-.98 2 .75.74L8 2.73l1.46 2.94a.9.9 0 00.67.5l3.26.47z" fill={primaryFill} /></svg>;
};

export default StarOff16Regular;