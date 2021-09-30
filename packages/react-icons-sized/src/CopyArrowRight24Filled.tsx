import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-12-7.37V17.25c0 1.8 1.46 3.25 3.25 3.25h2.98c.3.56.66 1.06 1.08 1.5H8.75A4.75 4.75 0 014 17.25V6.75c0-.98.63-1.81 1.5-2.12zm12.78 9.96a.5.5 0 00-.56 0l-.07.06-.06.07a.5.5 0 000 .56l.06.07L19.29 17H14.4a.5.5 0 00-.4.41v.18c.04.2.2.36.4.4l.1.01h4.8l-1.65 1.65-.06.07a.5.5 0 00.7.7l.06-.07 2.53-2.53.04-.05.04-.08.03-.08V17.39l-.01-.04-.04-.08-.02-.04-.04-.05-2.53-2.53-.07-.06zM17.75 2C18.99 2 20 3 20 4.25v7.25a6.5 6.5 0 00-8.69 8H8.75c-1.24 0-2.25-1-2.25-2.25v-13C6.5 3.01 7.5 2 8.75 2h9z" fill={primaryFill} /></svg>;
}

const CopyArrowRight24Filled = wrapIcon(rawSvg({}), 'CopyArrowRight24Filled');
export default CopyArrowRight24Filled;
      