import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const GlobeAdd24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-6.42 4.5a6.55 6.55 0 001.55 5.3c-.2.13-.42.2-.63.2-1.2 0-2.4-2.1-3.04-5.2l-.05-.3h2.17zm-3.7 0c.36 2.08.98 3.85 1.79 5.1a10.03 10.03 0 01-6.1-5.1h4.3zM17.5 14h-.09a.5.5 0 00-.4.4l-.01.1V17h-2.6a.5.5 0 00-.4.41v.18c.04.2.2.36.4.4l.1.01H17v2.6c.05.2.2.36.41.4h.18a.5.5 0 00.4-.4l.01-.1V18h2.6a.5.5 0 00.4-.41v-.18a.5.5 0 00-.4-.4l-.1-.01H18v-2.6a.5.5 0 00-.41-.4h-.09zM7.07 10a28.2 28.2 0 00.03 4.42l.06.58h-4.7a10 10 0 01-.26-5h4.87zm8.36 0c.03.43.05.87.06 1.31a6.52 6.52 0 00-4 3.69H8.69a25.36 25.36 0 01-.14-4.51l.04-.5h6.85zm6.37 0a10.05 10.05 0 01.17 2.78 6.48 6.48 0 00-4.99-1.76v-.37l-.05-.65h4.87zm-6.96-7.6c3.02.9 5.44 3.17 6.53 6.1h-4.59c-.3-2.27-.88-4.23-1.67-5.65l-.16-.27-.11-.18zm-5.67 0a14.57 14.57 0 00-1.89 5.66l-.06.44H2.63a10.03 10.03 0 016.1-5.96l.31-.1.13-.04zM12 2c1.32 0 2.65 2.54 3.22 6.18l.04.32H8.74C9.28 4.69 10.64 2 12 2z" fill={primaryFill} /></svg>;
};

export default GlobeAdd24Filled;