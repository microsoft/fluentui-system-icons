import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShapeExclude20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10.53V4.5A2.5 2.5 0 014.5 2h6.06A2.49 2.49 0 0113 4.5V7h2.5A2.5 2.5 0 0118 9.5v6.22A2.5 2.5 0 0115.5 18h-6A2.5 2.5 0 017 15.5V13H4.5a2.52 2.52 0 01-2.09-1.12c-.25-.38-.4-.84-.4-1.32L2 10.53zM12 8H9.5C8.67 8 8 8.67 8 9.5V12h2.5c.83 0 1.5-.67 1.5-1.5V8zM3 9.56v.94c0 .23.05.45.15.65l8-8A1.5 1.5 0 0010.5 3h-.94L3 9.56zM8.14 3H6.56L3 6.56v1.58L8.14 3zM3 5.14L5.14 3H4.5C3.67 3 3 3.67 3 4.5v.64zm8.85-1.29L8.5 7.21c.3-.14.64-.21 1-.21h.8L12 5.3v-.8c0-.23-.05-.45-.15-.65zM7.21 8.5l-3.36 3.35c.2.1.42.15.65.15h.8L7 10.3v-.8c0-.36.07-.7.2-1zM8 13.7v1.6l2.3-2.3H8.7l-.7.7zm5-3.4L15.3 8h-1.6l-.7.7v1.6zm3.4-2l-8.1 8.1c.24.32.6.53 1 .59L17 9.3a1.5 1.5 0 00-.59-1zm.6 2.4L10.7 17h1.6l4.7-4.7v-1.6zm0 3L13.7 17h1.6l1.7-1.7v-1.6z" fill={primaryFill} /></svg>;
};

export default ShapeExclude20Regular;