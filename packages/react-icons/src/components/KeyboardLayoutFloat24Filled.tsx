import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const KeyboardLayoutFloat24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.25 19.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.5h18.6zM19.75 3C20.99 3 22 4 22 5.25v9.5C22 16 20.99 17 19.75 17h-6.53a1.25 1.25 0 01-2.44 0H4.25C3.01 17 2 16 2 14.75v-9.5C2 4.01 3 3 4.25 3h15.5zm-2.5 9.5H6.65a.75.75 0 000 1.5h10.7a.75.75 0 000-1.5h-.1zM16.5 9a1 1 0 100 2 1 1 0 000-2zm-6 0a1 1 0 100 2 1 1 0 000-2zm-3 0a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2zM6 6a1 1 0 100 2 1 1 0 000-2zm3 0a1 1 0 100 2 1 1 0 000-2zm3 0a1 1 0 100 2 1 1 0 000-2zm3 0a1 1 0 100 2 1 1 0 000-2zm3 0a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /></svg>;
};

export default KeyboardLayoutFloat24Filled;