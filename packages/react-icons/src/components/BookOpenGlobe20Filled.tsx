import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BookOpenGlobe20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 4.75v5.5a5.5 5.5 0 00-1.5-.88V4.75a.25.25 0 00-.25-.25H12c-.69 0-1.25.56-1.25 1.25v4.73a5.5 5.5 0 00-1.5 2.38V5.75c0-.69-.56-1.25-1.25-1.25H3.75a.25.25 0 00-.25.25v10.5c0 .14.11.25.25.25H8c.42 0 .8-.2 1.02-.53.05.58.19 1.13.4 1.64-.42.25-.9.39-1.42.39H3.75C2.78 17 2 16.22 2 15.25V4.75C2 3.78 2.78 3 3.75 3H8c.79 0 1.5.33 2 .86.5-.53 1.21-.86 2-.86h4.25c.97 0 1.75.78 1.75 1.75zM13.01 14a8.9 8.9 0 01.54-2.85c.17-.42.35-.72.53-.91.19-.2.33-.24.42-.24.1 0 .23.05.42.24.18.19.36.5.53.91.3.73.5 1.72.54 2.85h-2.98zm-.39-3.22c.07-.16.13-.31.21-.46a4.5 4.5 0 00-2.8 3.68H12c.05-1.23.27-2.36.61-3.22zm3.76 0a5.35 5.35 0 00-.2-.46c1.5.6 2.6 2 2.8 3.68h-1.99a9.92 9.92 0 00-.61-3.22zm.61 4.22h1.98a4.5 4.5 0 01-2.8 3.68A9.92 9.92 0 0017 15zm-2.07 3.76c-.19.2-.33.24-.42.24-.1 0-.23-.05-.42-.24-.18-.19-.36-.5-.53-.91a8.9 8.9 0 01-.54-2.85h2.98a8.9 8.9 0 01-.54 2.85c-.17.42-.35.72-.53.91zM10.02 15a4.5 4.5 0 002.81 3.68A9.92 9.92 0 0112 15h-1.98z" fill={primaryFill} /></svg>;
};

export default BookOpenGlobe20Filled;