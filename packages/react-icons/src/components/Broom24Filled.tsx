import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Broom24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.45 1.92c.3.3.3.77 0 1.06L16.14 9.3a6.81 6.81 0 00-1.07-1.06l6.32-6.32c.3-.29.77-.29 1.06 0z" fill={primaryFill} /><path d="M15.03 9.35a5.75 5.75 0 00-8.13 0l-.25.24 8.13 8.13.25-.24a5.75 5.75 0 000-8.13z" fill={primaryFill} /><path d="M1.88 12.97l3.62-2.41 8.32 8.32-2.41 3.61a.75.75 0 01-1.16.12l-8.48-8.49a.75.75 0 01.11-1.15z" fill={primaryFill} /></svg>;
};

export default Broom24Filled;