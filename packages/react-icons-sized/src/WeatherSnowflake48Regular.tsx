import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24.26 4.05c.65 0 1.18.5 1.24 1.12V13.07l5.13-4.5a1.25 1.25 0 111.65 1.88L25.5 16.4V23h6.6l5.95-6.77a1.25 1.25 0 011.66-.2l.1.09c.49.42.57 1.14.2 1.66l-.08.1-4.5 5.12h7.77c.65 0 1.18.5 1.25 1.12v.13c0 .65-.49 1.18-1.12 1.24l-.13.01h-7.78l4.5 5.12c.43.49.41 1.2-.01 1.67l-.1.1c-.48.42-1.2.4-1.67-.02l-.1-.1-5.94-6.77h-6.6v6.6l6.77 5.95c.48.43.56 1.15.2 1.66l-.09.1c-.42.5-1.14.57-1.65.2l-.11-.08-5.13-4.5v7.78c0 .64-.49 1.18-1.12 1.24h-.13c-.65 0-1.18-.49-1.24-1.12v-7.9l-5.12 4.5a1.25 1.25 0 01-1.65-1.88L23 32.11v-6.6h-6.14l-.08.1-6.32 7.19a1.25 1.25 0 01-1.88-1.65l4.96-5.65H5.31c-.65 0-1.18-.49-1.25-1.12v-.13c0-.64.49-1.18 1.12-1.24h7.43l-4.03-4.6a1.25 1.25 0 111.88-1.65L15.94 23h7.07v-6.6l-6.77-5.95a1.25 1.25 0 01-.2-1.66l.09-.1a1.25 1.25 0 011.65-.2l.11.08 5.12 4.5V5.3c0-.6.43-1.1 1-1.22l.12-.02.13-.01z" fill={primaryFill} /></svg>;
}

const WeatherSnowflake48Regular = wrapIcon(rawSvg({}), 'WeatherSnowflake48Regular');
export default WeatherSnowflake48Regular;
      