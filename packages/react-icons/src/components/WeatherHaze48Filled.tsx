import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherHaze48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 37.76a16.74 16.74 0 00-.31.16 1.25 1.25 0 01-1.04-2.27c2.98-1.62 5.66-2 8.32-1.51 2.58.47 5.06 1.77 7.65 3.28 4.76 2.77 10.3 2.03 13.4-.19a1.25 1.25 0 011.45 2.04c-3.9 2.78-10.5 3.58-16.1.3-2.6-1.5-4.74-2.58-6.86-2.98-2-.37-4.06-.13-6.51 1.17z" fill={primaryFill} /><path d="M36 34.98l.59-.2c1.06-.4 2.04-.9 2.88-1.51a1.25 1.25 0 10-1.45-2.04c-3.1 2.22-8.64 2.96-13.4.19-2.59-1.51-5.07-2.8-7.65-3.28-2.66-.5-5.34-.11-8.32 1.51a1.25 1.25 0 001.2 2.2c2.51-1.38 4.62-1.63 6.66-1.26 2.12.4 4.27 1.48 6.86 2.99A15.71 15.71 0 0036 34.98z" fill={primaryFill} /><path d="M24 13.08c-4.41 0-8.21 2.62-9.93 6.38 1.12-.06 2.24.01 3.36.22 3.05.56 5.85 2.06 8.46 3.58a10.68 10.68 0 009.03.8V24c0-6.03-4.89-10.92-10.92-10.92z" fill={primaryFill} /><path d="M13.1 24.61a8.77 8.77 0 013.42-.02c.4.08.8.18 1.22.3 1.73.53 3.54 1.47 5.63 2.69 5.61 3.27 12.21 2.47 16.1-.31a1.25 1.25 0 10-1.45-2.04c-2.2 1.57-5.61 2.4-9.1 1.77a13.23 13.23 0 01-4.3-1.58c-2.26-1.32-4.44-2.48-6.68-3.07a10.84 10.84 0 00-1.33-.28c-2.54-.39-5.11.03-7.96 1.58a1.25 1.25 0 101.2 2.2 11.57 11.57 0 013.25-1.24z" fill={primaryFill} /><path d="M24.07 44a1.24 1.24 0 01-.16 0h.16z" fill={primaryFill} /><path d="M11.6 9.9l-.1-.1a1.25 1.25 0 00-1.66 1.86l2.15 2.15.1.1a1.25 1.25 0 001.66-1.87L11.61 9.9z" fill={primaryFill} /><path d="M38.24 11.56a1.25 1.25 0 00-1.86-1.66l-2.15 2.14-.1.1A1.25 1.25 0 0036 13.81l2.14-2.15.1-.1z" fill={primaryFill} /><path d="M25.24 5.12a1.25 1.25 0 00-2.49.13V8.4a1.25 1.25 0 002.5-.13V5.12z" fill={primaryFill} /></svg>;
};

export default WeatherHaze48Filled;