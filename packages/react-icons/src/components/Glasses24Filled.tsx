import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Glasses24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.9 5h.85a.75.75 0 01.1 1.5h-.94a.75.75 0 00-.48.17l-.07.07L5.28 9h3.47c1.16 0 2.11.88 2.24 2H13c.13-1.12 1.08-2 2.24-2h3.48l-2.09-2.26a.75.75 0 00-.44-.23l-.1-.01h-.85a.75.75 0 01-.1-1.5h.94c.57 0 1.11.21 1.52.6l.14.12 3.64 3.95.12.18c.3.38.49.87.49 1.4v3.5c0 1.8-1.46 3.25-3.25 3.25h-2.5A3.25 3.25 0 0113 14.75V12.5h-2v2.25C11 16.55 9.54 18 7.75 18h-2.5A3.25 3.25 0 012 14.75v-3.5c0-.56.2-1.08.55-1.47l.03-.06.05-.05 3.62-3.94c.39-.42.91-.68 1.47-.72L7.91 5h.84-.84z" fill={primaryFill} /></svg>;
};

export default Glasses24Filled;