import * as React from 'react';

import { AlbumRegular,AlbumFilled } from '@fluentui/react-icons/svg-sprite/album';

export const SvgSpritesApiExamples2: React.FC = () => {
  return (
    <section style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', padding: '20px' }}>
      <h3>SVG Sprites API PAGE 2</h3>
      <AlbumRegular />
      <AlbumFilled />
    </section>
  );
};
