import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowDownLeft24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 17.59l14.3-14.3a1 1 0 011.49 1.32l-.08.1L6.4 19h5.1a1 1 0 01.98.88l.01.12a1 1 0 01-.88 1H3.94l-.1-.01-.07-.02-.08-.02-.07-.02-.09-.05-.09-.05-.09-.07.03.03a1 1 0 01-.16-.17l-.06-.07-.03-.06-.04-.07-.03-.08-.03-.08-.02-.1v-.07L3 20v-7.5a1 1 0 012-.12v5.21l14.3-14.3L5 17.6z" fill={primaryFill} /></svg>;
};

export default ArrowDownLeft24Filled;