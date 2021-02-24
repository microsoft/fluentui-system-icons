import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Fluent48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25.36 5h-.21l-.13.02-.2.05-12.2 6.1-.17.11-.16.16v.01l-.16.23-.03.07-.05.15-.05.23v23.12c0 .44.24.85.62 1.08l12 7c.84.48 1.89-.12 1.88-1.1l-.07-11.26 11.37-5.6c.93-.46.93-1.78 0-2.24l-9.75-4.88 9.76-4.89c.92-.46.92-1.77 0-2.23l-12.01-6-.18-.08-.26-.05z" fill={primaryFill} /></svg>;
};

export default Fluent48Filled;