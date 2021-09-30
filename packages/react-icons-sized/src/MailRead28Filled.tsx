import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25 11.83v8.92c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 20.75v-8.92c0-.1 0-.2.02-.3l10.58 6.6c.22.14.48.16.7.06l.1-.05 10.58-6.62.02.3zM14.41 3.37l9.35 6.16c.25.16.46.36.64.59L14 16.62l-10.4-6.5c.18-.23.4-.43.64-.59l9.35-6.16a.75.75 0 01.82 0z" fill={primaryFill} /></svg>;
}

const MailRead28Filled = wrapIcon(rawSvg({}), 'MailRead28Filled');
export default MailRead28Filled;
      