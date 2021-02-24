import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextBold20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 4.25C5.5 3.56 6.06 3 6.75 3h3.5a4 4 0 013.17 6.44c.9.7 1.58 1.8 1.58 3.31A4.23 4.23 0 0110.75 17h-4c-.69 0-1.25-.56-1.25-1.25V4.25zM8 11v3.5h2.75c.81 0 1.75-.62 1.75-1.75S11.56 11 10.75 11H8zm0-2.5h2.25a1.5 1.5 0 100-3H8v3z" fillRule="nonzero" /></svg>;
};

export default TextBold20Regular;