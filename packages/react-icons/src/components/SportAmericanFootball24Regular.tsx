import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SportAmericanFootball24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.72 9.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l4.5-4.5z" fill={primaryFill} /><path d="M17.75 2C20.1 2 22 3.9 22 6.25v1C22 15.4 15.4 22 7.25 22h-1A4.25 4.25 0 012 17.75v-1C2 8.6 8.6 2 16.75 2h1zm2.75 4.25a2.75 2.75 0 00-2.75-2.75h-1c-.4 0-.8.02-1.2.05l4.9 4.9c.03-.4.05-.8.05-1.2v-1zm-.35 4.02l-6.42-6.42a13.27 13.27 0 00-9.9 9.97l6.35 6.36a13.27 13.27 0 009.97-9.9zm-16.6 5.4c-.04.35-.05.71-.05 1.08v1a2.75 2.75 0 002.75 2.75h1c.37 0 .73-.01 1.09-.04l-4.8-4.8z" fill={primaryFill} /></svg>;
};

export default SportAmericanFootball24Regular;