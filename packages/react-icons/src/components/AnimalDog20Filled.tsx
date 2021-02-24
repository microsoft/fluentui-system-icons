import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AnimalDog20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2c-.33 0-.81.1-1.23.4-.44.31-.77.84-.77 1.6v1.25c0 .13.04.34.16.5.09.12.25.25.59.25.34 0 .5-.13.6-.26a.9.9 0 00.15-.49.5.5 0 111 0c0 .3-.08.71-.35 1.08-.28.39-.74.67-1.4.67-.32 0-.6-.06-.82-.18a6.5 6.5 0 01-1.78 3.83 7.47 7.47 0 00-1.89 3.48A9.33 9.33 0 006 15.95v.08a1.34 1.34 0 01-.13.5.82.82 0 01-.28.32c-.12.08-.3.15-.59.15a2 2 0 01-1.2-3.6.5.5 0 10-.6-.8A3 3 0 005 18h8v-.5c0-.4-.19-1.05-.73-1.33-.19-.1-.44-.17-.77-.17h-1a.5.5 0 010-1h1c.18 0 .34.01.5.04V12.5a.5.5 0 011 0v2.95c.79.57 1 1.52 1 2.05v.5h2.5a.5.5 0 00.5-.5c0-.87-.3-1.52-.8-1.95-.36-.29-.78-.45-1.2-.51V7h.5c.83 0 1.5-.67 1.5-1.5V4.28a1 1 0 00-.49-.85l-1.78-1.07A2.5 2.5 0 0013.45 2H12z" fill={primaryFill} /></svg>;
};

export default AnimalDog20Filled;