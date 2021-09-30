import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 17A7.5 7.5 0 103 9.6a5.5 5.5 0 017.4 7.4h.1zM11 5.5V9h2.5a.5.5 0 010 1h-3a.5.5 0 01-.5-.5v-4a.5.5 0 011 0zm-10 9a4.5 4.5 0 014-4.47v3.76l-.65-.64a.5.5 0 00-.7.7l1.5 1.5c.2.2.5.2.7 0l1.5-1.5a.5.5 0 00-.7-.7l-.65.64v-3.76a4.5 4.5 0 11-5 4.47zm2 2c0 .28.22.5.5.5h4a.5.5 0 000-1h-4a.5.5 0 00-.5.5z" fill={primaryFill} /></svg>;
}

const ClockArrowDownloadFilled = wrapIcon(rawSvg({}), 'ClockArrowDownloadFilled');
export default ClockArrowDownloadFilled;
      