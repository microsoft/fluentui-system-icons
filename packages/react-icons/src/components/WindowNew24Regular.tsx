import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WindowNew24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.27 7.25c0-.41.34-.75.75-.75h4.73c.41 0 .75.34.75.75v4.73a.75.75 0 01-1.5 0V9.06l-5.22 5.22a.75.75 0 11-1.06-1.06L14.94 8h-2.92a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M6.16 5.25A3.25 3.25 0 019.25 3h8.5C19.55 3 21 4.46 21 6.25v8.59c0 1.35-.83 2.5-2 3v.14a2.7 2.7 0 01-1.3 2.34c-.76.48-1.73.68-2.7.68H7a4.13 4.13 0 01-2.89-1.05A3.63 3.63 0 013 17.25V8.5c0-.87.22-1.68.73-2.3a2.8 2.8 0 012.23-.95h.2zM6 6.75h-.04c-.55 0-.87.18-1.08.42-.22.26-.38.7-.38 1.33v8.75c0 .69.24 1.23.64 1.6.4.38 1.02.65 1.86.65h8c.8 0 1.45-.17 1.88-.44.37-.24.58-.55.62-.97H9.25A3.25 3.25 0 016 14.84V6.75zM9.25 4.5c-.97 0-1.75.78-1.75 1.75v8.59c0 .96.78 1.75 1.75 1.75h8.5c.97 0 1.75-.79 1.75-1.75V6.25c0-.97-.78-1.75-1.75-1.75h-8.5z" fill={primaryFill} /></svg>;
};

export default WindowNew24Regular;