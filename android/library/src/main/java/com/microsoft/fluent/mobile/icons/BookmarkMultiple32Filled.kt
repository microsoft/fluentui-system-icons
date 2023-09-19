package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BookmarkMultiple32: ImageVector
  get() {
    if (_bookmarkMultiple32 != null) {
      return _bookmarkMultiple32!!
    }
    _bookmarkMultiple32 = fluentIcon(name = "Filled.BookmarkMultiple32", 32f) {
      materialPath {
          moveTo(9.309F, 4.0F)
          horizontalLineTo(19.5F)
          curveTo(22.538F, 4.0F, 25.0F, 6.462F, 25.0F, 9.5F)
          verticalLineToRelative(16.66F)
          curveToRelative(1.185F, -0.59F, 2.0F, -1.813F, 2.0F, -3.227F)
          verticalLineTo(9.5F)
          curveTo(27.0F, 5.358F, 23.643F, 2.0F, 19.5F, 2.0F)
          horizontalLineToRelative(-6.967F)
          curveTo(11.121F, 2.0F, 9.898F, 2.815F, 9.31F, 4.0F)
          close()
          moveTo(8.75F, 6.0F)
          curveTo(6.679F, 6.0F, 5.0F, 7.679F, 5.0F, 9.75F)
          verticalLineTo(29.0F)
          curveToRelative(0.0F, 0.377F, 0.212F, 0.722F, 0.548F, 0.892F)
          curveToRelative(0.336F, 0.17F, 0.74F, 0.137F, 1.043F, -0.086F)
          lineToRelative(6.945F, -5.092F)
          lineToRelative(7.92F, 5.126F)
          curveToRelative(0.308F, 0.199F, 0.7F, 0.213F, 1.022F, 0.038F)
          curveTo(22.8F, 29.703F, 23.0F, 29.366F, 23.0F, 29.0F)
          verticalLineTo(9.75F)
          curveTo(23.0F, 7.679F, 21.321F, 6.0F, 19.25F, 6.0F)
          horizontalLineTo(8.75F)
          close()        
      }
    }
    return _bookmarkMultiple32!!
  }

private var _bookmarkMultiple32: ImageVector? = null
