import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TicketDiagonal28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.47 3.92a1.06 1.06 0 00-1.54-.04L3.86 15.95c-.42.42-.41 1.12.03 1.53l1.38 1.27c.04.04.1.07.23.08.14 0 .3-.03.47-.1a3.16 3.16 0 014.22 3.9c-.06.17-.08.34-.06.48.01.13.05.19.1.22l1.01.95c.42.38 1.06.37 1.47-.03l11.53-11.32c.4-.4.42-1.05.04-1.47l-1.08-1.19c-.03-.04-.09-.08-.21-.1-.13-.01-.3 0-.47.05A3.17 3.17 0 0118.72 6c.07-.16.1-.33.09-.46 0-.12-.04-.18-.07-.22l-1.27-1.4zm-2.6-1.1a2.56 2.56 0 013.72.1l1.26 1.4c.63.7.5 1.65.27 2.23a1.66 1.66 0 001.55 2.28c.15 0 .3-.02.45-.06.6-.17 1.56-.2 2.2.5l1.07 1.19a2.56 2.56 0 01-.1 3.54L13.76 25.32c-.98.96-2.53.99-3.54.06l-1.02-.95c-.71-.66-.64-1.64-.44-2.26a1.67 1.67 0 00-2.22-2.05c-.6.24-1.58.4-2.3-.27l-1.37-1.27a2.56 2.56 0 01-.07-3.7L14.87 2.83z" fill={primaryFill} /></svg>;
};

export default TicketDiagonal28Regular;