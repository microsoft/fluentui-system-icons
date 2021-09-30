import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.65 2.15c.2-.2.5-.2.7 0A5.71 5.71 0 0012.5 4c.28 0 .5.22.5.5v3c0 3.22-1.64 5.4-4.84 6.47a.5.5 0 01-.32 0C4.64 12.91 3 10.72 3 7.5v-3c0-.28.22-.5.5-.5 1.53 0 2.9-.61 4.15-1.85zM6.53 5.84a.5.5 0 00-.63.06l-.06.07a.5.5 0 00.06.63L7.3 8 5.9 9.4l-.06.07a.5.5 0 00.06.63l.07.06c.2.14.46.12.63-.06L8 8.7l1.4 1.4.07.06c.2.14.46.12.63-.06l.06-.07a.5.5 0 00-.06-.63L8.7 8l1.4-1.4.06-.07a.5.5 0 00-.06-.63l-.07-.06a.5.5 0 00-.63.06L8 7.3 6.6 5.9l-.07-.06z" fill={primaryFill} /></svg>;
}

const ShieldDismiss16Filled = wrapIcon(rawSvg({}), 'ShieldDismiss16Filled');
export default ShieldDismiss16Filled;
      