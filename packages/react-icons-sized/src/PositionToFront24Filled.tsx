import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 3.75A2.75 2.75 0 013.75 1h3.5A2.75 2.75 0 0110 3.75V5h-.75c-.26 0-.5.02-.75.07V3.75c0-.69-.56-1.25-1.25-1.25h-3.5c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h1.32c-.05.24-.07.5-.07.75V10H3.75A2.75 2.75 0 011 7.25v-3.5z" fill={primaryFill} /><path d="M14 19v1.25A2.75 2.75 0 0016.75 23h3.5A2.75 2.75 0 0023 20.25v-3.5A2.75 2.75 0 0020.25 14H19v.75c0 .26-.02.5-.07.75h1.32c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25h-3.5c-.69 0-1.25-.56-1.25-1.25v-1.32c-.24.05-.5.07-.75.07H14z" fill={primaryFill} /><path d="M6 9.25C6 7.45 7.46 6 9.25 6h5.5C16.55 6 18 7.46 18 9.25v5.5c0 1.8-1.46 3.25-3.25 3.25h-5.5A3.25 3.25 0 016 14.75v-5.5z" fill={primaryFill} /></svg>;
}

const PositionToFront24Filled = wrapIcon(rawSvg({}), 'PositionToFront24Filled');
export default PositionToFront24Filled;
      