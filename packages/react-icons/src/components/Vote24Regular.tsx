import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Vote24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.5 15.5h-17v5h17v-5zm1.44-1.03l.03.06.02.1V21.25c0 .38-.27.7-.64.74l-.1.01H2.75a.75.75 0 01-.74-.65l-.01-.1V14.7l.01-.09.05-.15 2.76-6.02c.1-.23.32-.4.57-.43h2.65l-.79 1.36-.07.13h-1.2L3.92 14h16.15l-2.03-4.35.87-1.5c.06.06.12.12.17.2l.05.09 2.81 6.03zM13.37 2.06l.09.04 5.18 3c.33.2.46.6.32.94l-.04.09-2.8 4.87h1.13a.75.75 0 01.1 1.5H6.75a.75.75 0 01-.1-1.5H8.57l-.18-.1a.75.75 0 01-.32-.94l.05-.09 4.31-7.5a.75.75 0 01.94-.31zm-.01 1.72l-3.57 6.2L11.57 11h2.81l2.87-4.97-3.9-2.25z" fill={primaryFill} /></svg>;
};

export default Vote24Regular;