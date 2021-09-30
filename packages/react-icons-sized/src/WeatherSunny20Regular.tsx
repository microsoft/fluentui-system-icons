import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.03 15.8a.5.5 0 01.49.4v1.31a.5.5 0 01-.99.1V16.3c0-.28.22-.5.5-.5zm4.8-1.71l.85.86a.5.5 0 01-.7.7l-.86-.85a.5.5 0 11.7-.71zm-8.9 0c.2.2.2.51 0 .7l-.85.87a.5.5 0 11-.71-.71l.86-.86c.2-.2.51-.2.7 0zm4.1-8.56a4.48 4.48 0 110 8.97 4.48 4.48 0 010-8.97zm0 1a3.48 3.48 0 100 6.97 3.48 3.48 0 000-6.97zm7.48 3a.5.5 0 01.1 1h-1.3a.5.5 0 01-.1-.99h1.3zM3.76 9.51a.5.5 0 01.09 1h-1.3a.5.5 0 01-.1-1h1.3zM5 4.32l.07.06.86.86A.5.5 0 015.3 6l-.07-.05-.86-.86a.5.5 0 01.64-.77zm10.67.06c.18.18.2.44.06.64l-.06.07-.86.86a.5.5 0 01-.76-.64l.06-.07.85-.86c.2-.2.52-.2.71 0zm-5.65-2.36a.5.5 0 01.5.41v1.3a.5.5 0 01-1 .1v-1.3c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const WeatherSunny20Regular = wrapIcon(rawSvg({}), 'WeatherSunny20Regular');
export default WeatherSunny20Regular;
      