import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm3.53 6.47l-.08-.07a.75.75 0 00-.89-.01l-.09.08L12 10.94 9.53 8.47l-.08-.07a.75.75 0 00-.89-.01l-.09.08-.07.08c-.2.26-.2.62-.01.89l.08.09L10.94 12l-2.47 2.47-.07.08c-.2.26-.2.62-.01.89l.08.09.08.07c.26.2.62.2.89.01l.09-.08L12 13.06l2.47 2.47.08.07c.26.2.62.2.89.01l.09-.08.07-.08c.2-.26.2-.62.01-.89l-.08-.09L13.06 12l2.47-2.47.07-.08c.2-.26.2-.62.01-.89l-.08-.09-.08-.07.08.07z" fill={primaryFill} /></svg>;
}

const DismissCircle24Filled = wrapIcon(rawSvg({}), 'DismissCircle24Filled');
export default DismissCircle24Filled;
      