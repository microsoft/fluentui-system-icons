import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7L3.3 4.01C2.57 4.11 2 4.74 2 5.5v7c0 .83.67 1.5 1.5 1.5h9.8l1 1H4.08c.2.58.76 1 1.41 1h9c.25 0 .49-.03.72-.07l1.93 1.92a.5.5 0 00.7-.7l-15-15zM12 12.7V13H6v-1a2 2 0 00-2-2H3V8h1a2 2 0 001.9-1.39l1.38 1.37a2 2 0 002.74 2.74L12 12.71zM4.3 5l.7.7V6a1 1 0 01-1 1H3V5.5c0-.28.22-.5.5-.5h.8zm3.73 3.74l1.23 1.23a1 1 0 01-1.23-1.23zM3.5 13a.5.5 0 01-.5-.5V11h1a1 1 0 011 1v1H3.5zM14 10a2 2 0 00-1.35.53l.7.7A1 1 0 0114 11h1v1.5c0 .1-.03.2-.1.29l.72.71c.24-.27.38-.62.38-1v-7c0-.83-.67-1.5-1.5-1.5H6.12l1 1H12v1c0 1.1.9 2 2 2h1v2h-1zm.5-5c.28 0 .5.22.5.5V7h-1a1 1 0 01-1-1V5h1.5zm1.83 9.2l.7.72c.6-.63.97-1.48.97-2.42v-5c0-.65-.42-1.2-1-1.41v6.41a2.5 2.5 0 01-.67 1.7z" fill={primaryFill} /></svg>;
}

const MoneyOffRegular = wrapIcon(rawSvg({}), 'MoneyOffRegular');
export default MoneyOffRegular;
      