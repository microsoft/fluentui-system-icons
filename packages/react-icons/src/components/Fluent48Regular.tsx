import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Fluent48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25.36 5h-.21l-.13.02-.2.05-12.2 6.1-.17.11-.16.16v.01l-.16.23-.03.07-.05.15-.05.23v23.12c0 .44.24.85.62 1.08l12 7c.84.48 1.89-.12 1.88-1.1l-.07-11.26 11.37-5.6c.93-.46.93-1.78 0-2.24l-9.75-4.88 9.76-4.89c.92-.46.92-1.77 0-2.23l-12.01-6-.18-.08-.26-.05zM14.5 26.27l9.43 4.76.06 9.03-9.49-5.53v-8.26zm9.5 1.99l-7.96-4L24 20.3v7.95zm10.44-4.02l-7.94 3.91-.02-7.89 7.96 3.98zM14.5 22.23v-7.95l7.94 4-7.94 3.95zm9.49-5.97l-7.95-4L24 8.26l-.01 8zm2.5-.03V8.27l7.96 3.98-7.97 3.98z" fill={primaryFill} /></svg>;
};

export default Fluent48Regular;