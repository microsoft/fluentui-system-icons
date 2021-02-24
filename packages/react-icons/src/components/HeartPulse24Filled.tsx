import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const HeartPulse24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.82 5.58L12 6.4l-.82-.82A5.37 5.37 0 002.25 11h3.5l1.42-3a1.75 1.75 0 013.13-.06l1.98 3.8 1.58-2.05a1.75 1.75 0 012.7-.1L17.8 11h3.96a5.37 5.37 0 00-8.93-5.41z" fill={primaryFill} /><path d="M11.47 21.08L4.89 14.5h1.97c.67 0 1.29-.39 1.58-1l.38-.82 1.63 3.13a1.75 1.75 0 002.94.25l1.95-2.55.34.4c.34.37.82.59 1.32.59h2.11l-6.58 6.58c-.3.29-.77.29-1.06 0z" fill={primaryFill} /><path d="M9.42 8.41a.75.75 0 00-1.35.02L6.38 12H2.75a.75.75 0 000 1.5h4.1c.3 0 .56-.17.69-.43l1.23-2.6 2.56 5.11a.75.75 0 001.28.1l2.7-3.73 1.13 1.3c.14.16.34.25.56.25h4.25a.75.75 0 000-1.5h-3.91l-1.53-1.74a.75.75 0 00-1.17.05l-2.52 3.5-2.7-5.4z" fill={primaryFill} /></svg>;
};

export default HeartPulse24Filled;