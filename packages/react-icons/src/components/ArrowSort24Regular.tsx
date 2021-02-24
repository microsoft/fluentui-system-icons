import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowSort24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.22 9.22l4.5-4.5a.75.75 0 01.97-.07l.08.07 4.5 4.5a.75.75 0 01-.97 1.13l-.08-.07L8 7.06v11.7c0 .38-.28.7-.65.74l-.1.01a.75.75 0 01-.75-.65V7.06l-3.22 3.22a.75.75 0 01-.98.07l-.08-.07a.75.75 0 01-.07-.98l.07-.08 4.5-4.5-4.5 4.5zM16.65 4.5h.1c.38 0 .7.28.74.64l.01.1v11.7l3.22-3.22c.27-.27.68-.3.98-.07l.08.07c.27.27.3.68.07.98l-.07.08-4.5 4.5a.75.75 0 01-.97.07l-.09-.07-4.5-4.5a.75.75 0 01.98-1.13l.08.07L16 16.94V5.24c0-.37.28-.69.65-.74h.1-.1z" fill={primaryFill} /></svg>;
};

export default ArrowSort24Regular;