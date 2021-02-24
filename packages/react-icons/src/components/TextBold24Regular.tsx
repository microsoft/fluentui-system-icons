import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextBold24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.38 4a4.64 4.64 0 013.75 7.3A4.7 4.7 0 0118 15.13c0 3.11-2.7 4.88-4.88 4.88H8a1.5 1.5 0 01-1.5-1.5v-13A1.5 1.5 0 018 4h4.38zm.74 9.25H9.5V17h3.62c.87 0 1.88-.75 1.88-1.88a1.9 1.9 0 00-1.88-1.87zM12.38 7H9.5v3.25h2.88c.9 0 1.62-.76 1.62-1.62C14 7.76 13.28 7 12.38 7z" fillRule="nonzero" /></svg>;
};

export default TextBold24Regular;