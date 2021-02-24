import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SlideSettings24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6.75A2.75 2.75 0 014.75 4h14.5A2.75 2.75 0 0122 6.75v6.06a6.52 6.52 0 00-1.5-1.08V6.75c0-.69-.56-1.25-1.25-1.25H4.75c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h6.33c.08.52.22 1.03.42 1.5H4.75A2.75 2.75 0 012 17.25V6.75zm10.5 8.88l.45.43a2 2 0 010 2.88l-.45.43c.2.57.5 1.1.85 1.57l.6-.18a2 2 0 012.52 1.45l.17.72a5.17 5.17 0 001.72 0l.17-.72a2 2 0 012.51-1.45l.6.18c.37-.47.66-1 .86-1.57l-.45-.43a2 2 0 010-2.88l.45-.43c-.2-.58-.5-1.1-.85-1.57l-.6.18a2 2 0 01-2.52-1.45l-.17-.72a5.18 5.18 0 00-1.72 0l-.17.72a2 2 0 01-2.52 1.45l-.6-.18c-.36.47-.65 1-.85 1.57zm5 3.37c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19z" fill={primaryFill} /></svg>;
};

export default SlideSettings24Regular;