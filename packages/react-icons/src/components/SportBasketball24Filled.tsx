import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SportBasketball24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.43 12.87c-1.28-.39-2.76-.9-4.16-2.08L13.07 12l6.51 6.52a9.94 9.94 0 002.16-4.22l-.01-.01-.01-.01a3.74 3.74 0 00-1.34-.8c-.43-.17-.9-.3-1.42-.46l-.53-.15z" fill={primaryFill} /><path d="M18.52 4.42l-4.24 4.24a9.6 9.6 0 01-1.7-3.52l-.15-.47c-.15-.54-.31-1.1-.5-1.6-.15-.36-.31-.71-.52-1.05a9.98 9.98 0 017.11 2.4z" fill={primaryFill} /><path d="M19.58 5.48l-4.24 4.24a9.6 9.6 0 003.52 1.7l.47.15c.54.15 1.1.31 1.6.5.36.15.71.31 1.05.52a9.98 9.98 0 00-2.4-7.11z" fill={primaryFill} /><path d="M9.72 2.28l-.01-.01a9.94 9.94 0 00-4.23 2.15L12 10.94l1.21-1.21a10.93 10.93 0 01-2.08-4.16l-.15-.52c-.15-.53-.29-1-.46-1.43-.21-.56-.46-1-.8-1.34z" fill={primaryFill} /><path d="M2.13 10.39a9.95 9.95 0 012.29-4.91L10.94 12l-1.09 1.09a10.34 10.34 0 00-4.66-1.91l-.6-.12c-.6-.12-1.15-.22-1.65-.37-.31-.09-.58-.19-.8-.3z" fill={primaryFill} /><path d="M2 11.96c0 2.34.8 4.68 2.42 6.56l4.36-4.36a9.13 9.13 0 00-3.89-1.51l-.54-.1A21.13 21.13 0 012 11.95z" fill={primaryFill} /><path d="M9.85 15.21l-4.37 4.37A9.97 9.97 0 0012.24 22c-.15-.3-.27-.62-.37-.93-.17-.54-.29-1.13-.41-1.7l-.1-.5a8.6 8.6 0 00-1.51-3.66z" fill={primaryFill} /><path d="M13.9 21.82a9.94 9.94 0 004.62-2.24L12 13.06l-1.09 1.09a9.88 9.88 0 011.91 4.4l.12.56c.12.56.22 1.05.36 1.51.16.5.34.9.6 1.2z" fill={primaryFill} /></svg>;
};

export default SportBasketball24Filled;