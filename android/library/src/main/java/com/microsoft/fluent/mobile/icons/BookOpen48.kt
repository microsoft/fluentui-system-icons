package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BookOpen48: ImageVector
  get() {
    if (_bookOpen48 != null) {
      return _bookOpen48!!
    }
    _bookOpen48 = fluentIcon(name = "Filled.BookOpen48", 48f) {
      materialPath {
          moveTo(20.0F, 8.0F)
          curveToRelative(1.576F, 0.0F, 2.997F, 0.663F, 4.0F, 1.725F)
          curveTo(25.003F, 8.663F, 26.424F, 8.0F, 28.0F, 8.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(26.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(28.0F)
          curveToRelative(-1.576F, 0.0F, -2.997F, -0.663F, -4.0F, -1.725F)
          curveTo(22.997F, 39.337F, 21.576F, 40.0F, 20.0F, 40.0F)
          horizontalLineTo(7.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(13.0F)
          close()
          moveToRelative(2.5F, 26.5F)
          verticalLineToRelative(-21.0F)
          curveToRelative(0.0F, -1.38F, -1.12F, -2.5F, -2.5F, -2.5F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(26.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          close()
          moveToRelative(3.0F, -21.0F)
          verticalLineToRelative(21.0F)
          curveToRelative(0.0F, 1.38F, 1.12F, 2.5F, 2.5F, 2.5F)
          horizontalLineToRelative(13.0F)
          verticalLineTo(11.0F)
          horizontalLineTo(28.0F)
          curveToRelative(-1.38F, 0.0F, -2.5F, 1.12F, -2.5F, 2.5F)
          close()        
      }
    }
    return _bookOpen48!!
  }

private var _bookOpen48: ImageVector? = null
