import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Screenshot24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.25 3A3.75 3.75 0 0121 6.75v10.5A3.75 3.75 0 0117.25 21H6.75A3.75 3.75 0 013 17.25V6.75A3.75 3.75 0 016.75 3h10.5zm0 10c-.38 0-.7.28-.74.65l-.01.1V16a.5.5 0 01-.41.5h-2.34a.75.75 0 00-.1 1.5H16a2 2 0 002-1.85v-2.4a.75.75 0 00-.75-.75zm-10.5 0c-.38 0-.7.28-.74.65l-.01.1V16a2 2 0 001.85 2h2.4a.75.75 0 00.1-1.5H8a.5.5 0 01-.5-.41v-2.34a.75.75 0 00-.75-.75zm3.5-7h-2.4a2 2 0 00-1.84 1.84L6 8v2.35a.75.75 0 001.5 0V7.91a.5.5 0 01.41-.4L8 7.5h2.35a.75.75 0 000-1.5h-.1zM16 6h-2.25a.75.75 0 00-.1 1.5H16a.5.5 0 01.5.41v2.34a.75.75 0 001.5.1V8a2 2 0 00-1.85-2H16z" fill={primaryFill} /></svg>;
};

export default Screenshot24Filled;