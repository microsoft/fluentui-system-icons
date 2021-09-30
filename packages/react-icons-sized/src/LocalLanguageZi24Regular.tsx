import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.25 1c.41 0 .75.34.75.75V3h4.5c.41 0 .75.34.75.75v1.5a.75.75 0 01-1.5 0V4.5h-9.5v.75a.75.75 0 01-1.5 0v-1.5c0-.41.34-.75.75-.75h5V1.75c0-.41.34-.75.75-.75zm-3.5 5a.75.75 0 000 1.5h4.43l-1.41 1.17a.75.75 0 00-.27.58v.25h-4.75a.75.75 0 000 1.5h4.75v2.73c0 .5-.48.87-.97.72l-.56-.17a.75.75 0 00-.44 1.44l.57.17c1.45.43 2.9-.65 2.9-2.16V11h4.25a.75.75 0 000-1.5h-4.13l2.61-2.17A.75.75 0 0020.25 6h-6.5zm-5.36.48l-.05-.1a.73.73 0 00-1.31.08l-5.97 14.5-.03.1c-.1.35.08.73.43.88.37.16.8-.02.96-.4l1.54-3.76H11.15l1.43 3.74.04.1c.18.32.56.47.91.33a.75.75 0 00.42-.97L8.39 6.48zm-3.74 9.8L7.8 8.76l2.95 7.54H4.65z" fill={primaryFill} /></svg>;
}

const LocalLanguageZi24Regular = wrapIcon(rawSvg({}), 'LocalLanguageZi24Regular');
export default LocalLanguageZi24Regular;
      