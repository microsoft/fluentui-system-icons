import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChannelArrowLeft24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm.25-9A3.25 3.25 0 0121 6.07V12.02a6.47 6.47 0 00-8.2.98H8.76l-.1.01a.75.75 0 000 1.49h3.08a6.47 6.47 0 00.3 6.5H6.24a3.25 3.25 0 01-3.24-3.07L3 17.75V9.37a2.25 2.25 0 10.22-4.3A3.25 3.25 0 016.05 3l.2-.01h11.5zm-1.03 11.59l-.07.06-2.52 2.51-.04.05-.04.08-.02.06-.02.08v.11l.01.09.03.08.03.06.05.07 2.52 2.51a.5.5 0 00.77-.63l-.06-.07L15.7 18h4.79a.5.5 0 00.5-.41v-.09a.5.5 0 00-.41-.5h-4.88l1.65-1.65a.5.5 0 00.05-.63l-.05-.07a.5.5 0 00-.64-.06zm-1.47-5.1h-6.5l-.1.01a.75.75 0 000 1.49H15.35a.75.75 0 00-.1-1.5zM3.75 6a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /></svg>;
};

export default ChannelArrowLeft24Filled;