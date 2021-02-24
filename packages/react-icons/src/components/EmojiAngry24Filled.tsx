import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const EmojiAngry24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 11.5c-1.63 0-3.17.66-4.29 1.8a.75.75 0 001.07 1.05 4.48 4.48 0 016.43 0 .75.75 0 101.07-1.06A5.98 5.98 0 0012 13.5zM8.22 6.66l-.1-.06a.75.75 0 00-.92 1.16l.08.08 1.26 1A1.25 1.25 0 1010.25 10a.75.75 0 00.55-1.26l-.08-.08-2.5-2-.1-.06.1.06zm8.62.12a.75.75 0 00-.97-.18l-.09.06-2.5 2-.08.08a.75.75 0 00.44 1.25h.11a1.25 1.25 0 101.83-1.1l-.12-.05 1.26-1 .08-.08a.75.75 0 00.04-.98z" fill={primaryFill} /></svg>;
};

export default EmojiAngry24Filled;