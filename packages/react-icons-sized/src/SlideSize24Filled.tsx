import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6.75A2.75 2.75 0 014.75 4h14.5A2.75 2.75 0 0122 6.75v10.5A2.75 2.75 0 0119.25 20H4.75A2.75 2.75 0 012 17.25V6.75zm14.78.47a.75.75 0 00-.53-.22h-2.5a.75.75 0 000 1.5h.69l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72v.69a.75.75 0 001.5 0v-2.5c0-.2-.08-.39-.22-.53zM7.75 17h2.5a.75.75 0 000-1.5h-.69l1.72-1.72a.75.75 0 00-1.06-1.06L8.5 14.44v-.69a.75.75 0 00-1.5 0v2.5a.75.75 0 00.75.75z" fill={primaryFill} /></svg>;
}

const SlideSize24Filled = wrapIcon(rawSvg({}), 'SlideSize24Filled');
export default SlideSize24Filled;
      