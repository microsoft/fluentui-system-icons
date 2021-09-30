import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a.5.5 0 01.5.4v3.16l2.02-1.77a.5.5 0 11.66.75L10.5 6.9v2.6h2.6l2.36-2.68a.5.5 0 01.63-.1l.07.06a.5.5 0 01.1.63l-.05.07-1.77 2.02h3.06a.5.5 0 01.5.4v.1a.5.5 0 01-.4.5h-3.17l1.78 2.02a.5.5 0 01.01.64l-.06.06a.5.5 0 01-.64.02l-.06-.06-2.36-2.68h-2.6v2.6l2.68 2.36a.5.5 0 01.1.63l-.06.07a.5.5 0 01-.63.1l-.07-.05-2.02-1.78v3.07a.5.5 0 01-.41.5h-.1a.5.5 0 01-.48-.4l-.01-.1v-3.06L7.48 16.2a.5.5 0 11-.66-.75L9.5 13.1V10.5H7.07l-.03.04-2.5 2.85a.5.5 0 11-.75-.66l1.96-2.23H2.5a.5.5 0 01-.5-.41V10a.5.5 0 01.4-.5h2.98L3.79 7.69a.5.5 0 01.75-.66L6.71 9.5H9.5V6.9L6.82 4.53a.5.5 0 01-.1-.63l.06-.07a.5.5 0 01.63-.1l.07.05L9.5 5.56V2.5c0-.22.14-.4.33-.47l.08-.02L10 2z" fill={primaryFill} /></svg>;
}

const WeatherSnowflake20Regular = wrapIcon(rawSvg({}), 'WeatherSnowflake20Regular');
export default WeatherSnowflake20Regular;
      