import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CallProhibited28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25.96 8.94a5.71 5.71 0 01-1.3 3.25l-.15.18a2.75 2.75 0 01-2.42 1.02l-2.51-.25a2.75 2.75 0 01-2.4-2.07l-.44-1.77c-.1-.37-.31-.6-.54-.67a8.1 8.1 0 00-4.4 0c-.23.07-.45.3-.54.67l-.44 1.77a2.75 2.75 0 01-2.4 2.07l-2.51.25c-.93.1-1.84-.3-2.42-1.02l-.15-.18a5.71 5.71 0 01-1.3-3.25 3.85 3.85 0 011.38-3.2C5.35 4.12 8.63 2.5 14 2.5s8.65 1.62 10.58 3.24a3.85 3.85 0 011.38 3.2zm-1.5-.07a2.35 2.35 0 00-.85-1.98C21.98 5.5 19.04 4 14 4 8.96 4 6.02 5.51 4.39 6.89a2.35 2.35 0 00-.85 1.98c.04.79.38 1.64.97 2.38l.15.18c.26.33.67.5 1.1.47l2.52-.26c.52-.05.96-.43 1.08-.94l.45-1.76c.18-.74.69-1.48 1.55-1.74 1.58-.5 3.68-.5 5.28 0 .86.26 1.37 1 1.55 1.74l.45 1.76c.12.51.56.9 1.08.94l2.52.26c.43.04.84-.14 1.1-.47l.15-.18c.6-.74.93-1.6.97-2.38z" fill={primaryFill} /><path d="M14 26a6.5 6.5 0 110-13 6.5 6.5 0 010 13zm0-1.5a5 5 0 004.03-7.97l-7 7c.83.6 1.86.97 2.97.97zm2.97-9.03a5 5 0 00-7 7l7-7z" fill={primaryFill} /></svg>;
};

export default CallProhibited28Regular;