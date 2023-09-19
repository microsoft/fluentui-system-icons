package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Window32: ImageVector
  get() {
    if (_window32 != null) {
      return _window32!!
    }
    _window32 = fluentIcon(name = "Regular.Window32", 32f) {
      materialPath {
          moveTo(7.5F, 3.0F)
          curveTo(5.015F, 3.0F, 3.0F, 5.015F, 3.0F, 7.5F)
          verticalLineToRelative(17.0F)
          curveTo(3.0F, 26.985F, 5.015F, 29.0F, 7.5F, 29.0F)
          horizontalLineToRelative(17.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          verticalLineToRelative(-17.0F)
          curveTo(29.0F, 5.015F, 26.985F, 3.0F, 24.5F, 3.0F)
          horizontalLineToRelative(-17.0F)
          close()
          moveTo(5.0F, 7.5F)
          curveTo(5.0F, 6.12F, 6.12F, 5.0F, 7.5F, 5.0F)
          horizontalLineToRelative(17.0F)
          curveTo(25.88F, 5.0F, 27.0F, 6.12F, 27.0F, 7.5F)
          verticalLineTo(9.0F)
          horizontalLineTo(5.0F)
          verticalLineTo(7.5F)
          close()
          moveTo(5.0F, 11.0F)
          horizontalLineToRelative(22.0F)
          verticalLineToRelative(13.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-17.0F)
          curveTo(6.12F, 27.0F, 5.0F, 25.88F, 5.0F, 24.5F)
          verticalLineTo(11.0F)
          close()        
      }
    }
    return _window32!!
  }

private var _window32: ImageVector? = null
