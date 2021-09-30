import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 17A1.5 1.5 0 013 15.64V4.5c0-.78.6-1.42 1.36-1.5H9c.78 0 1.42.6 1.5 1.36v.39l2.19-2.26a1.5 1.5 0 012-.14l.12.1 2.76 2.72c.55.55.6 1.42.11 2.01l-.1.12-2.31 2.2h.23c.78 0 1.42.6 1.5 1.36v4.64c0 .78-.6 1.42-1.36 1.5H4.5zm5-6.5H4v5c0 .21.14.4.33.47l.08.02.09.01h5v-5.5zm6 0h-5V16h5a.5.5 0 00.5-.41V11a.5.5 0 00-.41-.5h-.09zm-5-2.8v1.8h1.79L10.5 7.7zM9 4H4.5a.5.5 0 00-.5.41V9.5h5.5v-5a.5.5 0 00-.33-.47l-.08-.02L9 4z" fill={primaryFill} /></svg>;
}

const AppsFilled = wrapIcon(rawSvg({}), 'AppsFilled');
export default AppsFilled;
      