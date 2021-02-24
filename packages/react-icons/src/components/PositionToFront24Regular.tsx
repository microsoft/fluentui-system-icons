import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PositionToFront24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 3.75A2.75 2.75 0 013.75 1h3.5A2.75 2.75 0 0110 3.75V5h-.75c-.26 0-.5.02-.75.07V3.75c0-.69-.56-1.25-1.25-1.25h-3.5c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h1.32c-.05.24-.07.5-.07.75V10H3.75A2.75 2.75 0 011 7.25v-3.5z" fill={primaryFill} /><path d="M14 19v1.25A2.75 2.75 0 0016.75 23h3.5A2.75 2.75 0 0023 20.25v-3.5A2.75 2.75 0 0020.25 14H19v.75c0 .26-.02.5-.07.75h1.32c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25h-3.5c-.69 0-1.25-.56-1.25-1.25v-1.32c-.24.05-.5.07-.75.07H14z" fill={primaryFill} /><path d="M9.25 6A3.25 3.25 0 006 9.25v5.5C6 16.55 7.46 18 9.25 18h5.5c1.8 0 3.25-1.46 3.25-3.25v-5.5C18 7.45 16.54 6 14.75 6h-5.5zm2.31 1.5L7.5 11.56V9.68L9.68 7.5h1.88zM7.5 13.68l6.18-6.18h1.07c.24 0 .47.05.68.14l-7.8 7.79c-.08-.21-.13-.44-.13-.68v-1.07zm1.25 2.75l7.68-7.68c.05.16.07.33.07.5v1.31l-5.94 5.94H9.25c-.17 0-.34-.02-.5-.07zm5.94.07h-2l3.81-3.82v2.07l-.03-.03-1.78 1.78z" fill={primaryFill} /></svg>;
};

export default PositionToFront24Regular;