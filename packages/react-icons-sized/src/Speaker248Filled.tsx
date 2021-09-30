import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25.08 6.42A1.75 1.75 0 0128 7.72v32.56c0 1.51-1.8 2.31-2.92 1.3l-8.2-7.36c-.88-.79-2-1.22-3.18-1.22H9a5.25 5.25 0 01-5.25-5.25v-7.5C3.75 17.35 6.1 15 9 15h4.7c1.17 0 2.3-.43 3.18-1.22l8.2-7.36zM36.34 8.4c.47-.5 1.26-.53 1.76-.06h.02c-.35-.34-.01 0-.01 0l.02.03a5.46 5.46 0 01.27.26 20.4 20.4 0 012.7 3.79A23.76 23.76 0 0144 24c0 5.05-1.45 8.94-2.9 11.58a20.41 20.41 0 01-2.9 4l-.07.05-.02.02v.01s.66-.66 0 0a1.25 1.25 0 01-1.72-1.82 3.26 3.26 0 00.19-.19 17.9 17.9 0 002.33-3.28C40.2 32.03 41.5 28.55 41.5 24c0-4.55-1.3-8.03-2.6-10.37a17.9 17.9 0 00-2.5-3.47 1.25 1.25 0 01-.06-1.76zm-4 6c.46-.5 1.25-.54 1.76-.07l.06.07c-.1-.1-.06-.07-.06-.07v.01l.02.02a2.62 2.62 0 01.18.17c.12.12.27.3.45.51a13.98 13.98 0 01-.63 18.6l-.01.02s.39-.4 0 0a1.25 1.25 0 01-1.71-1.82l.01-.02a4.57 4.57 0 00.43-.47 11.48 11.48 0 00-.43-15.17l-.01-.02a1.25 1.25 0 01-.07-1.76z" fill={primaryFill} /></svg>;
}

const Speaker248Filled = wrapIcon(rawSvg({}), 'Speaker248Filled');
export default Speaker248Filled;
      