import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BookOpenGlobe20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 4.5v5.76a5.5 5.5 0 00-1-.66V4.5a.5.5 0 00-.5-.5H12c-.83 0-1.5.67-1.5 1.5v5.23c-.4.43-.75.93-1 1.48V5.5C9.5 4.67 8.83 4 8 4H3.5a.5.5 0 00-.5.5v11c0 .28.22.5.5.5H8c.43 0 .82-.18 1.1-.48.06.37.17.72.3 1.05-.4.27-.88.43-1.4.43H3.5A1.5 1.5 0 012 15.5v-11C2 3.67 2.67 3 3.5 3H8c.82 0 1.54.4 2 1 .46-.6 1.18-1 2-1h4.5c.83 0 1.5.67 1.5 1.5zM13.01 14a8.9 8.9 0 01.54-2.85c.17-.42.35-.72.53-.91.19-.2.33-.24.42-.24.1 0 .23.05.42.24.18.19.36.5.53.91.3.73.5 1.72.54 2.85h-2.98zm-.39-3.22l.2-.46a4.5 4.5 0 00-2.8 3.68h1.99c.05-1.23.27-2.36.61-3.22zm3.76 0a5.29 5.29 0 00-.21-.46c1.51.6 2.62 2 2.8 3.68H17a9.92 9.92 0 00-.61-3.22zm.61 4.22h1.98a4.5 4.5 0 01-2.8 3.68 9.92 9.92 0 00.82-3.68zm-2.07 3.76c-.19.2-.33.24-.42.24-.1 0-.23-.05-.42-.24-.18-.19-.36-.5-.53-.91a8.9 8.9 0 01-.54-2.85h2.98a8.9 8.9 0 01-.54 2.85c-.17.42-.35.72-.53.91zM10.02 15a4.5 4.5 0 002.8 3.68l-.2-.46a9.92 9.92 0 01-.61-3.22h-1.98z" fill={primaryFill} /></svg>;
};

export default BookOpenGlobe20Regular;