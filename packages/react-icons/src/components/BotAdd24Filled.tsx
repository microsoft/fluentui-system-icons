import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BotAdd24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-5.48 2a6.47 6.47 0 00.6 7.8c-.8.13-1.68.2-2.62.2-2.89 0-5.13-.66-6.7-2A3.75 3.75 0 012 17.16v-.91C2 15.01 3.01 14 4.25 14h7.77zm5.48 0h-.09a.5.5 0 00-.4.41l-.01.09V17h-2.6a.5.5 0 00-.4.41v.18c.04.2.2.37.4.4l.1.01H17v2.6c.05.2.2.36.41.4h.18a.5.5 0 00.4-.4l.01-.1V18h2.6a.5.5 0 00.4-.41v-.18a.5.5 0 00-.4-.4l-.1-.01H18v-2.59a.5.5 0 00-.41-.4L17.5 14zM10 2c.38 0 .7.28.74.65l.01.1v.75h3.5c1.24 0 2.25 1 2.25 2.25v4.5c0 .3-.06.6-.17.86-1.12.2-2.15.7-2.99 1.4H5.75c-1.24 0-2.25-1.01-2.25-2.25V5.75c0-1.24 1-2.25 2.25-2.25h3.5v-.75c0-.34.23-.63.55-.72L9.9 2h.1zM7.75 6.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm4.5 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fill={primaryFill} /></svg>;
};

export default BotAdd24Filled;