import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiplier12X20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.66 6.03c.2.06.34.26.34.47v7a.5.5 0 01-1 0V7.96a6 6 0 01-1.24.97.5.5 0 01-.52-.86c.94-.56 1.31-1.1 1.64-1.57l.22-.3a.5.5 0 01.56-.17zm4.33 2.06v-.03l.05-.12c.04-.11.1-.25.2-.39.2-.26.55-.55 1.26-.55.64 0 1.04.2 1.27.5.23.3.35.76.24 1.42-.07.38-.26.61-.57.8-.24.16-.52.28-.85.41a22 22 0 00-.43.18c-.5.21-1.05.5-1.47 1A3.27 3.27 0 008 13.5a.5.5 0 00.5.5h4a.5.5 0 100-1H9.03c.07-.49.23-.81.43-1.05.26-.32.64-.52 1.1-.72.1-.05.2-.1.32-.14.36-.14.77-.3 1.1-.52.49-.31.89-.76 1.01-1.49.15-.84.02-1.62-.44-2.2C12.1 6.29 11.36 6 10.5 6a2.44 2.44 0 00-2.47 1.81L8 7.88v.03L8 7.99v-.06a.5.5 0 001 .17zm5.86 2.06a.5.5 0 00-.7.7L15.29 12l-1.14 1.15a.5.5 0 00.7.7L16 12.71l1.15 1.14a.5.5 0 00.7-.7L16.71 12l1.14-1.15a.5.5 0 00-.7-.7L16 11.29l-1.15-1.14zM7 13.5a.5.5 0 11-1 0 .5.5 0 011 0z" fill={primaryFill} /></svg>;
};

export default Multiplier12X20Regular;