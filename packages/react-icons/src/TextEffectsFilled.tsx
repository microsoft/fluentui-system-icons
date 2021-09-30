import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 14.38l.02.05c.1.26.13.53.13.8 0 .6-.23 1.2-.7 1.64-.41.4-.96.64-1.56.64-.47 0-.9-.14-1.28-.39l-.06-.04-.06-.05c-.32-.26-.55-.6-.71-.93l-.01-.03-.68-1.6H8.34l-.64 1.55c-.16.42-.43.8-.84 1.08-.38.27-.82.4-1.28.4-.5 0-1.11-.13-1.6-.62a2.18 2.18 0 01-.63-1.57c0-.19.04-.4.05-.52l.03-.17 4.4-10.67.01-.02c.17-.38.44-.77.86-1.05.43-.29.92-.41 1.43-.37A2.22 2.22 0 0112.19 4l4.32 10.38zm-5.72-9.85a.74.74 0 00-.29-.39.8.8 0 00-.46-.13.69.69 0 00-.49.12.91.91 0 00-.32.4l-4.34 10.5-.03.28c0 .22.06.39.19.51.12.13.3.19.54.19a.7.7 0 00.43-.14.7.7 0 00.28-.39l1.04-2.51h5.25l1.06 2.5c.08.16.18.3.3.4.14.1.29.14.45.14.2 0 .38-.08.52-.22a.73.73 0 00.24-.56c0-.12-.02-.22-.05-.33L10.78 4.53zm-.83 2.13l1.99 4.76H7.98l1.97-4.76z" fill={primaryFill} /></svg>;
}

const TextEffectsFilled = wrapIcon(rawSvg({}), 'TextEffectsFilled');
export default TextEffectsFilled;
      