import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 2C14.99 2 16 3 16 4.25v5.77A6.5 6.5 0 0010.17 18H8.75a.75.75 0 00-.1 1.5h2.08a6.53 6.53 0 002.3 2.5H6.26C5.01 22 4 21 4 19.75V4.25C4 3.01 5 2 6.25 2h7.5zm2.75 9a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm.22 2.59l-.07.06-.06.07a.5.5 0 000 .56l.06.07L18.29 16H13.4a.5.5 0 00-.4.41v.18c.04.2.2.36.4.4l.1.01h4.8l-1.65 1.65-.06.07a.5.5 0 00.7.7l.06-.07 2.53-2.53.04-.05.04-.08.03-.08V16.39l-.03-.08-.04-.08-.04-.05-2.53-2.53-.07-.06a.5.5 0 00-.49-.04l-.07.04z" fill={primaryFill} /></svg>;
}

const PhoneArrowRight24Filled = wrapIcon(rawSvg({}), 'PhoneArrowRight24Filled');
export default PhoneArrowRight24Filled;
      