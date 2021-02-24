import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Delete28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2a4 4 0 014 3.8V6h5a1 1 0 01.12 2h-.97l-1.18 14.55A3.75 3.75 0 0117.23 26h-6.46a3.75 3.75 0 01-3.74-3.45L5.85 8H5a1 1 0 01-1-.88V7a1 1 0 01.88-1H10a4 4 0 014-4zm-2.25 9.25c-.38 0-.7.28-.74.65L11 12v8.1a.75.75 0 001.5 0v-8.2a.75.75 0 00-.75-.65zm4.5 0c-.38 0-.7.28-.74.65l-.01.1v8.1a.75.75 0 001.5 0v-8.2a.75.75 0 00-.75-.65zM14 4a2 2 0 00-2 1.85V6h4v-.15A2 2 0 0014 4z" fill={primaryFill} /></svg>;
};

export default Delete28Filled;