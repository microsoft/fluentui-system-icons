import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MoviesAndTv16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.22 4.25L7.09 6.24a.5.5 0 01-.24.08L4.75 7h8.75c.28 0 .5.22.5.5v5a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 12.5v-5c0-.1.03-.2.09-.29l-.2-.6A2.5 2.5 0 013.5 3.46l6.66-2.16a2.5 2.5 0 013.15 1.6l.23.72a.5.5 0 01-.32.63zm-3.75.16l1.29-2.23-.3.07-1.24.4-1.3 2.27 1.55-.5zm2.3-1.98l-.02.04-.85 1.48 1.53-.5-.07-.24a1.5 1.5 0 00-.6-.78zm-3.97.69l-1.56.5-1.3 2.27 1.55-.51L7.8 3.12zM2.92 6.54l.59-.2 1.3-2.26-1 .33a1.5 1.5 0 00-.96 1.9l.07.23zM3 8v4.5c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5V8H3z" fill={primaryFill} /></svg>;
};

export default MoviesAndTv16Regular;