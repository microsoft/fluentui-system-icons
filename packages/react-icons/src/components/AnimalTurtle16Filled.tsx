import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AnimalTurtle16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.34 3.99c-1.85 0-3.03 1.31-3.48 2.8L3.8 7H2.5a.5.5 0 00-.5.5c0 .7.19 1.33.52 1.82.12.17.26.33.41.46l-.3.72A1.1 1.1 0 003.66 12h1.07c.42 0 .81-.24 1-.63l.3-.64c.9.12 1.83.12 2.74 0l.3.64c.18.39.57.63 1 .63h1.06a1.1 1.1 0 001-1.5l-.2-.5h.97c.62 0 1.11-.52 1.11-1.13v-.62c0-.94-.73-1.75-1.69-1.75h-1.46a3.76 3.76 0 00-3.5-2.51zM11.6 9l-.44-1.5h1.16c.36 0 .7.31.7.75v.62c0 .03-.02.07-.05.1L12.9 9h-1.3zm-1.81 1.55c.39-.1.77-.2 1.15-.33l.27.65a.1.1 0 01-.08.13h-1.07a.1.1 0 01-.08-.05l-.2-.4zm-5.95-.34c.38.14.77.25 1.16.34l-.18.4a.1.1 0 01-.09.05H3.65a.1.1 0 01-.09-.13l.27-.66zM3.5 8l-.2.67c-.12-.19-.2-.42-.26-.67h.46z" fill={primaryFill} /></svg>;
};

export default AnimalTurtle16Filled;