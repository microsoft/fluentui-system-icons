import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.75A3.75 3.75 0 016.75 3h14.5A3.75 3.75 0 0125 6.75V15h-6.25A3.75 3.75 0 0015 18.75V25H6.75A3.75 3.75 0 013 21.25V6.75zM16.5 25h.06L25 16.56v-.06h-6.25c-1.24 0-2.25 1-2.25 2.25V25z" fill={primaryFill} /></svg>;
}

const Note28Filled = wrapIcon(rawSvg({}), 'Note28Filled');
export default Note28Filled;
      