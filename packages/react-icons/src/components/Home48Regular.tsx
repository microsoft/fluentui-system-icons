import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Home48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.6 5.86a3.78 3.78 0 014.8 0L39.56 16.6c.9.73 1.43 1.85 1.43 3.03V39.1A3.86 3.86 0 0137.17 43h-5.1a3.86 3.86 0 01-3.82-3.89v-9.36c0-.72-.57-1.3-1.27-1.3h-5.96c-.7 0-1.27.58-1.27 1.3v9.36A3.86 3.86 0 0115.93 43h-5.1A3.86 3.86 0 017 39.11V19.63c0-1.18.53-2.3 1.43-3.03L21.61 5.86zm3.2 2.02a1.26 1.26 0 00-1.6 0L10.03 18.62c-.3.24-.48.62-.48 1v19.5c0 .7.57 1.29 1.27 1.29h5.1c.7 0 1.28-.58 1.28-1.3v-9.36a3.86 3.86 0 013.82-3.89h5.96a3.86 3.86 0 013.82 3.89v9.36c0 .72.57 1.3 1.28 1.3h5.1c.7 0 1.27-.58 1.27-1.3V19.63c0-.4-.18-.77-.48-1.01L24.8 7.88z" fill={primaryFill} /></svg>;
};

export default Home48Regular;