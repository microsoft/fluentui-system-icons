import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AnimalRabbit28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 10.77l-1.92-1.89a2.27 2.27 0 113.21-3.21l6.33 6.29a4.7 4.7 0 01-3.7 8 3.18 3.18 0 01-2.97 2.05H9.2A3.19 3.19 0 016 18.83v-1.87a3.5 3.5 0 112.55-5.19 5.3 5.3 0 012.77-.77h4.5c.31 0 .61.03.9.08.09-.1.18-.21.28-.3zm.23-4.04a.77.77 0 00-1.1 1.09h.01L19.36 11l-1 .58c-.25.15-.51.46-.65.7l-.29.52-.57-.16c-.32-.09-.67-.14-1.03-.14h-4.5c-2.1 0-3.82 1.7-3.82 3.8v2.53c0 .92.76 1.68 1.7 1.68H14v-.33c0-.93-.75-1.68-1.68-1.68h-1.57a.75.75 0 010-1.5h1.57a3.18 3.18 0 013.18 3.18v.33h2.45c.86 0 1.57-.65 1.67-1.48l.1-.84.82.2a3.2 3.2 0 003.02-5.37l-6.33-6.3zm-9.87 6.04a2 2 0 10-1.29 2.65c.18-1.01.63-1.93 1.3-2.65z" fill={primaryFill} /></svg>;
};

export default AnimalRabbit28Regular;