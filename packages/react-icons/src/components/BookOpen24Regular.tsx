import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BookOpen24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 19.14c-.5.53-1.21.86-2 .86H3.75C2.78 20 2 19.22 2 18.25V5.75C2 4.78 2.78 4 3.75 4H10c.79 0 1.5.33 2 .86.5-.53 1.21-.86 2-.86h6.25c.97 0 1.75.78 1.75 1.75v12.5c0 .97-.78 1.75-1.75 1.75H14c-.79 0-1.5-.33-2-.86zM3.5 5.75v12.5c0 .14.11.25.25.25H10c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25H3.75a.25.25 0 00-.25.25zm9.25 11.5c0 .69.56 1.25 1.25 1.25h6.25c.14 0 .25-.11.25-.25V5.75a.25.25 0 00-.25-.25H14c-.69 0-1.25.56-1.25 1.25v10.5z" fill={primaryFill} /></svg>;
};

export default BookOpen24Regular;