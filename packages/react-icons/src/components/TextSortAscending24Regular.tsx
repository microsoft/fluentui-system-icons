import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextSortAscending24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 19.44l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V2.75a.75.75 0 011.5 0v16.69zM7.07 2c.31 0 .59.2.7.49l3.18 8.5a.75.75 0 01-1.4.52L8.79 9.5H5.24l-.8 2.02a.75.75 0 01-1.39-.54l3.32-8.5c.11-.3.4-.48.7-.48zm-.02 2.85L5.82 8h2.41L7.05 4.85zM4.75 13a.75.75 0 100 1.5h3.39l-4.02 6.35A.75.75 0 004.75 22H9.5a.75.75 0 100-1.5H6.11l4.02-6.35A.75.75 0 009.5 13H4.75z" fill={primaryFill} /></svg>;
};

export default TextSortAscending24Regular;