import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Broom24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.45 1.92c.3.3.3.77 0 1.06l-6.93 6.93a5.75 5.75 0 01-.5 7.57l-.82.83-2.8 4.18a.75.75 0 01-1.15.12l-8.48-8.49a.75.75 0 01.11-1.15l4.18-2.8.84-.82a5.75 5.75 0 017.56-.5l6.93-6.93c.3-.29.77-.29 1.06 0zM7.6 10.76l6.01 6.01.36-.35a4.25 4.25 0 00-6.01-6.01l-.36.35zm-1.15.97L3.48 13.7l7.19 7.19 1.98-2.97-6.2-6.2z" fill={primaryFill} /></svg>;
};

export default Broom24Regular;