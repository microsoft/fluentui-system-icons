import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BookmarkMultiple20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.27 3A2 2 0 018 2h4.5A3.5 3.5 0 0116 5.5v10a.5.5 0 01-.78.42l-.22-.15V5.5A2.5 2.5 0 0012.5 3H6.27z" fill={primaryFill} /><path d="M6 4a2 2 0 00-2 2v11.5a.5.5 0 00.78.42L9 15.1l4.22 2.82a.5.5 0 00.78-.42V6a2 2 0 00-2-2H6z" fill={primaryFill} /></svg>;
};

export default BookmarkMultiple20Filled;