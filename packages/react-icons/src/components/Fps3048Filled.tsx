import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Fps3048Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 14.5c1.78 0 3-1.35 3-2.75S17.78 9 16 9c-1.32 0-2.37.76-2.8 1.88-.22.59-.71 1.12-1.35 1.12-1.03 0-1.92-.84-1.62-1.83A6.06 6.06 0 0116 6c3.31 0 6 2.57 6 5.75 0 1.68-.76 3.2-1.96 4.25A5.63 5.63 0 0122 20.25 5.88 5.88 0 0116 26a6.06 6.06 0 01-5.77-4.17c-.3-1 .59-1.83 1.62-1.83.64 0 1.13.53 1.35 1.12A2.92 2.92 0 0016 23c1.78 0 3-1.35 3-2.75s-1.22-2.75-3-2.75a1.5 1.5 0 110-3z" fill={primaryFill} /><path d="M24 12a6 6 0 0112 0v8a6 6 0 01-12 0v-8zm3 8a3 3 0 106 0v-8a3 3 0 10-6 0v8z" fill={primaryFill} /><path d="M9.25 30C8.56 30 8 30.56 8 31.25v11.54a1.25 1.25 0 102.5 0V38.5h4.25a1.25 1.25 0 100-2.5H10.5v-3.5h5.26a1.25 1.25 0 100-2.5H9.25z" fill={primaryFill} /><path d="M20.75 30c-.69 0-1.25.56-1.25 1.25v11.54a1.25 1.25 0 102.5 0V38.5h2.25a4.25 4.25 0 000-8.5h-3.5zm3.5 6H22v-3.5h2.25a1.75 1.75 0 110 3.5z" fill={primaryFill} /><path d="M34.66 32.5a1.66 1.66 0 100 3.31h1.25a4.1 4.1 0 010 8.19h-1.66a3.75 3.75 0 01-3.75-3.75 1.25 1.25 0 112.5 0c0 .69.56 1.25 1.25 1.25h1.66a1.6 1.6 0 000-3.19h-1.25a4.16 4.16 0 110-8.31h1.59A3.75 3.75 0 0140 33.75a1.25 1.25 0 11-2.5 0c0-.69-.56-1.25-1.25-1.25h-1.6z" fill={primaryFill} /></svg>;
};

export default Fps3048Filled;