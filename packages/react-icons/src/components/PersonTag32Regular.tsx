import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonTag32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 16a7 7 0 100-14 7 7 0 000 14zm0-2a5 5 0 110-10 5 5 0 010 10zm-8.5 6c-.83 0-1.5.67-1.5 1.5v.5c0 1.47.94 2.94 2.76 4.1C8.56 27.25 11.12 28 14 28c1.39 0 2.7-.18 3.9-.49l1.6 1.6c-1.66.57-3.53.88-5.5.88-3.2 0-6.14-.82-8.32-2.2C3.52 26.4 2 24.39 2 21.99v-.5A3.5 3.5 0 015.5 18h9.53l-.03.5V20H5.5zm24.8 6.2l-4.1 4.1a2.4 2.4 0 01-3.4 0l-5.72-5.72a2 2 0 01-.58-1.41V18.5c0-1.1.9-2 2-2h4.67a2 2 0 011.41.58l5.72 5.72a2.4 2.4 0 010 3.4zM20 21a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
};

export default PersonTag32Regular;