import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Beach24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.35 5.32a6.75 6.75 0 0111.7 6.75l-.26.43a.75.75 0 01-1.02.28l-4.56-2.63-2.37 4.15a7.75 7.75 0 014.84 2.61 2 2 0 00-1.3.8A6.12 6.12 0 0012 15.76c-1.67 0-3.21.76-4.38 1.97a2 2 0 00-1.3-.8 7.76 7.76 0 014.78-2.61l2.81-4.91-4.54-2.62a.75.75 0 01-.27-1.03l.25-.43zm1.43.54l1.97 1.13c.53-.82 1.07-1.49 1.74-2.1.52-.48 1.12-.9 1.83-1.32a5.25 5.25 0 00-5.54 2.29zm5.81 3.35c.55-1 .82-1.79.92-2.55.07-.62.04-1.26-.07-2.01a8.86 8.86 0 00-3.4 3.1L16.6 9.2zm1.3.75l1.97 1.14a5.25 5.25 0 00-.85-6.02c.05.6.06 1.18-.02 1.76-.12 1.01-.47 2-1.1 3.12zM6.7 18.66a.75.75 0 00-1.44.06c-.21.89-.6 1.36-1.04 1.63-.46.28-1.05.4-1.73.4a.75.75 0 000 1.5c.82 0 1.73-.13 2.52-.63.41-.25.77-.6 1.06-1.03a3.81 3.81 0 005.92-.02 3.82 3.82 0 006-.08 4.46 4.46 0 003.5 1.76.75.75 0 000-1.5c-1.18 0-2.38-.8-2.78-2.08a.75.75 0 00-1.43-.01c-.79 2.44-3.81 2.4-4.58.1a.75.75 0 00-1.42 0c-.77 2.3-3.8 2.34-4.58-.1z" fill={primaryFill} /></svg>;
};

export default Beach24Regular;