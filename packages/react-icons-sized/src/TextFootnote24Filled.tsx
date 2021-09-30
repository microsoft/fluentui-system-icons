import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.02 7.54l-.22.16a1 1 0 11-1.1-1.67 3.31 3.31 0 001.35-1.74 1 1 0 011.97.21V11a1 1 0 11-2 0V7.54zM2.12 17.97H2.1c-.22-.2-.35-.48-.35-.78 0-.19.05-.37.11-.54L5.3 7.69c.1-.27.27-.52.51-.7.25-.17.53-.24.83-.24a1.34 1.34 0 011.3.93l3.45 8.97c.06.17.11.35.11.54 0 .31-.13.58-.37.78-.23.2-.5.28-.8.28a1.14 1.14 0 01-1.12-.82L8.4 15.2H4.86l-.82 2.23c-.09.23-.22.44-.42.6-.21.15-.46.22-.7.22-.3 0-.57-.08-.8-.27zm5.52-4.86l-1.01-2.8-1.02 2.8h2.03zm4.11 4.04c0 .28.09.55.29.77v.01c.22.23.5.32.79.32a1.09 1.09 0 001.02-.67 3.28 3.28 0 002.02.67c1.08 0 1.98-.4 2.66-1.22.66-.8.97-1.86.97-3.1s-.3-2.28-.97-3.1a3.28 3.28 0 00-2.65-1.22 3.2 3.2 0 00-1.9.6V7.9c0-.3-.09-.59-.3-.82-.22-.23-.5-.34-.81-.34-.31 0-.6.11-.81.34-.22.24-.31.52-.31.82v9.24zm5.49-3.22c0 .77-.18 1.32-.47 1.7-.27.35-.64.53-1.15.53a1.4 1.4 0 01-1.15-.56 2.6 2.6 0 01-.5-1.67c0-.73.19-1.27.5-1.66.3-.4.68-.57 1.15-.57.51 0 .88.18 1.15.54.3.38.47.93.47 1.7z" fill={primaryFill} /></svg>;
}

const TextFootnote24Filled = wrapIcon(rawSvg({}), 'TextFootnote24Filled');
export default TextFootnote24Filled;
      