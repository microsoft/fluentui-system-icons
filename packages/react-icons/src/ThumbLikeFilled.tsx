import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.48 1.7c-.8-.83-2.09-.38-2.43.6-.28.8-.64 1.77-1 2.48C8 6.9 7.38 8.1 5.67 9.63c-.23.2-.52.36-.84.49-1.13.44-2.2 1.61-1.91 3l.35 1.77a2.5 2.5 0 001.8 1.92l5.6 1.52a4.5 4.5 0 005.6-3.53l.69-3.76A3 3 0 0014 7.5h-.89l.01-.05c.08-.41.18-.97.24-1.59.07-.6.1-1.28.05-1.9a3.68 3.68 0 00-.5-1.74 4.16 4.16 0 00-.44-.52z" fill={primaryFill} /></svg>;
}

const ThumbLikeFilled = wrapIcon(rawSvg({}), 'ThumbLikeFilled');
export default ThumbLikeFilled;
      