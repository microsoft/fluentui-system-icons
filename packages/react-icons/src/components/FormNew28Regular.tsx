import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FormNew28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.25C3 4.45 4.46 3 6.25 3h15.5C23.55 3 25 4.46 25 6.25v8.25a7.49 7.49 0 00-1.5-.88V6.25c0-.97-.78-1.75-1.75-1.75H6.25c-.97 0-1.75.78-1.75 1.75v15.5c0 .97.78 1.75 1.75 1.75h7.37c.24.54.53 1.04.88 1.5H6.25A3.25 3.25 0 013 21.75V6.25z" fill={primaryFill} /><path d="M6 12.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm2.5-1a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /><path d="M8.5 17a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm-1 2.5a1 1 0 112 0 1 1 0 01-2 0z" fill={primaryFill} /><path d="M12 11.75c0-.41.34-.75.75-.75h8.5a.75.75 0 110 1.5h-8.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M6.75 6.05a.75.75 0 100 1.5h14.5a.75.75 0 000-1.5H6.75z" fill={primaryFill} /><path d="M27 20.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-6-4a.5.5 0 00-1 0V20h-3.5a.5.5 0 000 1H20v3.5a.5.5 0 001 0V21h3.5a.5.5 0 000-1H21v-3.5z" fill={primaryFill} /></svg>;
};

export default FormNew28Regular;