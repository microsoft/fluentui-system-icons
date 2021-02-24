import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Hd24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.25 8c.41 0 .75.34.75.75v2.75h2V8.75a.75.75 0 011.5 0v6.5a.75.75 0 01-1.5 0V13H8v2.25a.75.75 0 01-1.5 0v-6.5c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M13.75 8a.75.75 0 00-.75.75v6.5c0 .41.34.75.75.75h1c1.8 0 3.25-1.46 3.25-3.25v-1.5C18 9.45 16.54 8 14.75 8h-1zm.75 6.5v-5h.25c.97 0 1.75.78 1.75 1.75v1.5c0 .97-.78 1.75-1.75 1.75h-.25z" fill={primaryFill} /><path d="M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25zM6.25 4.5c-.97 0-1.75.78-1.75 1.75v11.5c0 .97.78 1.75 1.75 1.75h11.5c.97 0 1.75-.78 1.75-1.75V6.25c0-.97-.78-1.75-1.75-1.75H6.25z" fill={primaryFill} /></svg>;
};

export default Hd24Regular;