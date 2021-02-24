import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Camera28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.95 2.5c.78 0 1.5.4 1.91 1.06L20.38 6h2.37C24.55 6 26 7.45 26 9.25v12.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 012 21.75V9.25C2 7.45 3.46 6 5.25 6h2.57L9.2 3.62c.4-.7 1.14-1.12 1.95-1.12h5.8zm0 1.5h-5.8c-.23 0-.45.1-.59.28l-.06.1-1.6 2.75a.75.75 0 01-.65.37h-3c-.97 0-1.75.78-1.75 1.75v12.5c0 .97.78 1.75 1.75 1.75h17.5c.97 0 1.75-.78 1.75-1.75V9.25c0-.97-.78-1.75-1.75-1.75h-2.79a.75.75 0 01-.63-.35l-1.74-2.8a.75.75 0 00-.64-.35zM14 9.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 1.5a4 4 0 100 8 4 4 0 000-8z" fill={primaryFill} /></svg>;
};

export default Camera28Regular;