import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const HandLeft24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 4.25a1 1 0 012 0V11a.5.5 0 001 0V6a1 1 0 012 0v8.75c0 2.18-1.17 4.51-1.91 5.8A3 3 0 0114.46 22H12.3c-1.24 0-2.36-.7-2.91-1.8l-.14-.26c-.42-.85-.94-1.63-1.56-2.34l-2.2-2.55-2.2-1.7a.75.75 0 01-.29-.6c0-.48.26-.84.6-1.06.29-.19.64-.27.95-.3a7.2 7.2 0 012.1.12c.5.1.97.3 1.35.5V4.26a1 1 0 012 0v6.25a.5.5 0 001 0V3a1 1 0 012 0v7.5a.5.5 0 001 0V4.25z" fill={primaryFill} /></svg>;
};

export default HandLeft24Filled;