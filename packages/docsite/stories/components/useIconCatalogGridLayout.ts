import * as React from 'react';
import { useIsomorphicLayoutEffect, useScrollbarWidth } from '@fluentui/react-components';
import { FixedSizeGrid } from 'react-window';

type IconCatalogGridLayoutOptions = {
  items: readonly unknown[];
  cellWidth: number;
  rowHeight: number;
};

export function useIconCatalogGridLayout({ items, cellWidth, rowHeight }: IconCatalogGridLayoutOptions) {
  const scrollbarWidth = useScrollbarWidth({ targetDocument: document }) ?? 0;
  const [width, setWidth] = React.useState(1000);
  const areaRef = React.useRef<HTMLDivElement>(null);
  const gridRef = React.useRef<FixedSizeGrid>(null);

  useIsomorphicLayoutEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const nextWidth = entries[0].contentRect.width;
      if (nextWidth > 0) setWidth(nextWidth);
    });
    if (!areaRef.current) return;
    observer.observe(areaRef.current);
    return () => observer.disconnect();
  }, []);

  useIsomorphicLayoutEffect(() => {
    gridRef.current?.scrollTo({ scrollLeft: 0, scrollTop: 0 });
  }, [items]);

  const columnCount = Math.max(1, Math.floor(width / cellWidth));
  const rowCount = Math.ceil(items.length / columnCount);

  return {
    areaRef,
    gridRef,
    gridProps: {
      columnCount,
      columnWidth: (width - scrollbarWidth) / columnCount,
      rowCount,
      rowHeight,
      height: Math.min(rowCount * rowHeight + 10, 1000),
      width,
    },
  };
}
