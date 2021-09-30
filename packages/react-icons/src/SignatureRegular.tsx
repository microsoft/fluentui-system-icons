import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.02 2.77a2.44 2.44 0 113.46 3.46L14.2 7.5l.08.09a2 2 0 010 2.82l-1.44 1.44a.5.5 0 01-.7-.7l1.44-1.44a1 1 0 000-1.42l-.09-.08-6.65 6.64a.5.5 0 01-.23.14l-4 1a.5.5 0 01-.6-.65l1.26-3.75a.5.5 0 01.12-.2l8.62-8.62zm2.75.7a1.44 1.44 0 00-2.04 0l-8.54 8.55-.93 2.77 2.98-.74 8.53-8.53c.57-.56.57-1.48 0-2.04z" fill={primaryFill} /><path d="M3.22 16.87l.05.03C4 17.44 5.1 18 6.5 18c.74 0 1.42-.26 2.03-.6.6-.35 1.16-.8 1.66-1.2l.12-.1c.46-.37.86-.7 1.23-.91.4-.24.64-.27.8-.22.27.1.42.3.68 1.17.09.3.24.61.47.87.23.26.57.49 1.01.49.47 0 .94-.23 1.3-.44a12.61 12.61 0 00.97-.64 4.6 4.6 0 01.82-.42l.04-.02h.01a.5.5 0 00-.28-.96h-.01l-.02.01a2.35 2.35 0 00-.31.12c-.2.09-.47.22-.8.43l-.33.23c-.19.13-.38.26-.6.39-.33.2-.6.3-.79.3-.06 0-.15-.03-.26-.15-.11-.13-.2-.31-.26-.5-.24-.8-.5-1.55-1.32-1.82-.59-.2-1.16.02-1.63.3-.44.25-.9.63-1.34.99l-.13.1c-.5.41-1 .8-1.53 1.1-.52.3-1.02.48-1.53.48-.75 0-1.4-.2-1.93-.47l-1.35.34zM17.5 15.5l-.14-.48.14.48z" fill={primaryFill} /></svg>;
}

const SignatureRegular = wrapIcon(rawSvg({}), 'SignatureRegular');
export default SignatureRegular;
      