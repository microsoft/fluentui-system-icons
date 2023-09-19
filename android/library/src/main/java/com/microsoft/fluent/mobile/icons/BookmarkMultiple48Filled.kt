package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BookmarkMultiple48: ImageVector
  get() {
    if (_bookmarkMultiple48 != null) {
      return _bookmarkMultiple48!!
    }
    _bookmarkMultiple48 = fluentIcon(name = "Filled.BookmarkMultiple48", 48f) {
      materialPath {
          moveTo(14.668F, 6.5F)
          horizontalLineToRelative(14.081F)
          curveToRelative(4.28F, 0.0F, 7.75F, 3.47F, 7.75F, 7.75F)
          verticalLineToRelative(24.081F)
          curveTo(37.994F, 37.467F, 39.0F, 35.851F, 39.0F, 34.0F)
          verticalLineTo(14.25F)
          curveTo(39.0F, 8.59F, 34.41F, 4.0F, 28.75F, 4.0F)
          horizontalLineTo(19.0F)
          curveToRelative(-1.85F, 0.0F, -3.466F, 1.005F, -4.331F, 2.5F)
          close()
          moveTo(14.0F, 9.0F)
          curveToRelative(-2.761F, 0.0F, -5.0F, 2.239F, -5.0F, 5.0F)
          verticalLineToRelative(28.75F)
          curveToRelative(0.0F, 0.461F, 0.254F, 0.885F, 0.66F, 1.102F)
          curveToRelative(0.407F, 0.218F, 0.9F, 0.194F, 1.283F, -0.062F)
          lineTo(21.5F, 36.752F)
          lineToRelative(10.557F, 7.038F)
          curveToRelative(0.383F, 0.256F, 0.876F, 0.28F, 1.283F, 0.062F)
          curveToRelative(0.406F, -0.217F, 0.66F, -0.641F, 0.66F, -1.102F)
          verticalLineTo(14.0F)
          curveToRelative(0.0F, -2.761F, -2.239F, -5.0F, -5.0F, -5.0F)
          horizontalLineTo(14.0F)
          close()        
      }
    }
    return _bookmarkMultiple48!!
  }

private var _bookmarkMultiple48: ImageVector? = null
