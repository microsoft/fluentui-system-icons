import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TetrisApp20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.25 2C6.56 2 6 2.56 6 3.25v2.5c0 .14-.11.25-.25.25h-2.5C2.56 6 2 6.56 2 7.25v2.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-2.5c0-.14.11-.25.25-.25h2.5C14.44 7 15 6.44 15 5.75v-2.5C15 2.56 14.44 2 13.75 2h-6.5zm6.5 4H11V3h2.75c.14 0 .25.11.25.25v2.5c0 .14-.11.25-.25.25zm-3.72 1c-.02.08-.03.16-.03.25v2.5c0 .14-.11.25-.25.25H7V7h3.03zM6 7v3H3.25A.25.25 0 013 9.75v-2.5c0-.14.11-.25.25-.25H6zm.97-1C7 5.92 7 5.84 7 5.75v-2.5c0-.14.11-.25.25-.25H10v3H6.97zm7.28 3c-.69 0-1.25.56-1.25 1.25v2.5c0 .14-.11.25-.25.25h-6.5C5.56 13 5 13.56 5 14.25v2.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5C18 9.56 17.44 9 16.75 9h-2.5zm-.28 4c.02-.08.03-.16.03-.25v-2.5c0-.14.11-.25.25-.25h2.5c.14 0 .25.11.25.25V13h-3.03zm.03 1h3v2.75c0 .14-.11.25-.25.25H14v-3zm-1 0v3h-3v-3h3zm-4 0v3H6.25a.25.25 0 01-.25-.25v-2.5c0-.14.11-.25.25-.25H9z" fill={primaryFill} /></svg>;
};

export default TetrisApp20Regular;