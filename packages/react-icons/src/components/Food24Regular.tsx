import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Food24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 3.25c.38 0 .7.28.74.65L19 4v16a.75.75 0 01-1.5.1V15h-2.25a.75.75 0 01-.74-.65l-.01-.1V7a3.75 3.75 0 013.75-3.75zm-6 0c.38 0 .7.28.74.65L13 4v4a4 4 0 01-3.25 3.93V20a.75.75 0 01-1.5.1v-8.17a4 4 0 01-3.24-3.72L5 8V4a.75.75 0 011.5-.1V8a2.5 2.5 0 001.75 2.39V4a.75.75 0 011.5-.1V10.39a2.5 2.5 0 001.74-2.2L11.5 8V4c0-.41.34-.75.75-.75zM17.5 13.5V4.88A2.25 2.25 0 0016 6.83v6.67h1.5V4.88v8.62z" fill={primaryFill} /></svg>;
};

export default Food24Regular;