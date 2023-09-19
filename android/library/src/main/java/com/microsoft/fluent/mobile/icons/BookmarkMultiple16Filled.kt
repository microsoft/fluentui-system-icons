package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BookmarkMultiple16: ImageVector
  get() {
    if (_bookmarkMultiple16 != null) {
      return _bookmarkMultiple16!!
    }
    _bookmarkMultiple16 = fluentIcon(name = "Filled.BookmarkMultiple16", 16f) {
      materialPath {
          moveTo(4.654F, 2.0F)
          horizontalLineTo(10.9F)
          curveTo(12.06F, 2.0F, 13.0F, 2.94F, 13.0F, 4.1F)
          verticalLineToRelative(8.98F)
          curveToRelative(0.593F, -0.295F, 1.0F, -0.907F, 1.0F, -1.613F)
          verticalLineTo(4.1F)
          curveTo(14.0F, 2.388F, 12.613F, 1.0F, 10.9F, 1.0F)
          horizontalLineTo(6.267F)
          curveTo(5.56F, 1.0F, 4.95F, 1.407F, 4.654F, 2.0F)
          close()
          moveTo(4.8F, 3.0F)
          curveTo(3.806F, 3.0F, 3.0F, 3.806F, 3.0F, 4.8F)
          verticalLineToRelative(9.7F)
          curveToRelative(0.0F, 0.172F, 0.09F, 0.333F, 0.237F, 0.424F)
          curveToRelative(0.147F, 0.091F, 0.331F, 0.1F, 0.486F, 0.022F)
          lineTo(7.5F, 13.06F)
          lineToRelative(3.777F, 1.887F)
          curveToRelative(0.155F, 0.078F, 0.339F, 0.07F, 0.486F, -0.022F)
          curveTo(11.91F, 14.834F, 12.0F, 14.672F, 12.0F, 14.5F)
          verticalLineTo(4.8F)
          curveTo(12.0F, 3.806F, 11.194F, 3.0F, 10.2F, 3.0F)
          horizontalLineTo(4.8F)
          close()        
      }
    }
    return _bookmarkMultiple16!!
  }

private var _bookmarkMultiple16: ImageVector? = null
