import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Luggage24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 10.25c0-.41.34-.75.75-.75h8.5a.75.75 0 010 1.5h-8.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M9 3.5h-.25a.75.75 0 010-1.5h6.5a.75.75 0 010 1.5H15V5h1.75C18.55 5 20 6.46 20 8.25v9a3.25 3.25 0 01-3 3.24v.76a.75.75 0 01-1.5 0v-.75h-7v.75a.75.75 0 01-1.5 0v-.76a3.25 3.25 0 01-3-3.24v-9C4 6.45 5.46 5 7.25 5H9V3.5zm1.5 0V5h3V3.5h-3zM16.75 19c.97 0 1.75-.78 1.75-1.75v-9c0-.97-.78-1.75-1.75-1.75h-9.5c-.97 0-1.75.78-1.75 1.75v9c0 .97.78 1.75 1.75 1.75h9.5z" fill={primaryFill} /></svg>;
};

export default Luggage24Regular;