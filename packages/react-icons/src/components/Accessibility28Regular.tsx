import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Accessibility28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.6 6.36a3.5 3.5 0 116.8 0l3.55-1.35a2.63 2.63 0 111.87 4.92l-4.32 1.64v4.13l2.47 6.8a2.62 2.62 0 01-4.91 1.8L14 18.74l-2.04 5.56a2.62 2.62 0 01-4.93-1.8l2.46-6.78v-4.15L5.18 9.91A2.62 2.62 0 017.05 5l3.56 1.35zM12 5.5a2 2 0 001.31 1.88c.42.13.86.14 1.28.03A2 2 0 1012 5.5zm.8 3.3a3.71 3.71 0 01-.12-.05L6.52 6.42a1.12 1.12 0 00-.8 2.09l4.8 1.85c.29.1.48.39.48.7v4.79c0 .09-.01.17-.04.25l-2.5 6.92a1.12 1.12 0 002.1.77l2.05-5.6a1.5 1.5 0 012.8 0l2.06 5.59a1.12 1.12 0 002.1-.77l-2.53-6.92a.75.75 0 01-.04-.26v-4.78c0-.31.2-.6.48-.7l4.8-1.82a1.13 1.13 0 10-.8-2.11l-6.14 2.33a3.77 3.77 0 01-2.53.04z" fill={primaryFill} /></svg>;
};

export default Accessibility28Regular;