import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CurrencyDollarEuro16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2a.5.5 0 00-.5.5v.33a2.7 2.7 0 00-2 2.6v.1c0 1.1.65 2.1 1.65 2.55l.35.16v3.87a1.7 1.7 0 01-1-1.55v-.72a.5.5 0 00-1 0v.72c0 1.25.85 2.3 2 2.61v.34a.5.5 0 001 0v-.26a2.7 2.7 0 002.4-2.69v-.09c0-1.1-.64-2.1-1.65-2.54L5 7.59V3.76c.8.14 1.4.84 1.4 1.67v.74a.5.5 0 001 0v-.74A2.7 2.7 0 005 2.75V2.5a.5.5 0 00-.5-.5zM3 5.43c0-.68.41-1.28 1-1.55v3.26c-.61-.3-1-.93-1-1.61v-.1zm2 6.8V8.69l.34.16c.65.29 1.06.93 1.06 1.63v.09c0 .84-.6 1.53-1.4 1.68z" fill={primaryFill} /><path d="M9.07 9A7.07 7.07 0 019 8h-.5a.5.5 0 010-1h.57c.13-.94.45-1.8.91-2.47C10.6 3.63 11.5 3 12.56 3c.4 0 .85.12 1.22.36a.5.5 0 01-.56.83 1.22 1.22 0 00-.66-.19c-.63 0-1.26.38-1.75 1.1-.35.51-.6 1.17-.73 1.91h.42a.5.5 0 010 1H10c0 .35.03.68.08 1h.42a.5.5 0 110 1h-.15c.12.33.28.64.46.9.5.72 1.12 1.1 1.75 1.1.25 0 .49-.06.65-.18a.5.5 0 01.58.82c-.38.26-.84.36-1.23.36-1.06 0-1.96-.63-2.58-1.54A5.45 5.45 0 019.3 10h-.8a.5.5 0 010-1h.58z" fill={primaryFill} /></svg>;
};

export default CurrencyDollarEuro16Regular;