import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.82 2l.1.02 8.5 2c.3.07.53.32.57.63l.01.1v14.5c0 .31-.2.59-.48.7l-.1.03-8.5 2a.75.75 0 01-.91-.63l-.01-.1V2.75c0-.41.33-.74.72-.75h.1zm.68 1.7v16.6l7-1.64V5.34l-7-1.64zM9 4v1.5H5.5v13H9V20H4.75a.75.75 0 01-.74-.65l-.01-.1V4.75c0-.38.28-.7.65-.74l.1-.01H9zm5 7a1 1 0 110 2 1 1 0 010-2z" fill={primaryFill} /></svg>;
}

const ConferenceRoom24Regular = wrapIcon(rawSvg({}), 'ConferenceRoom24Regular');
export default ConferenceRoom24Regular;
      