package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.BookOpen32: ImageVector
  get() {
    if (_bookOpen32 != null) {
      return _bookOpen32!!
    }
    _bookOpen32 = fluentIcon(name = "Regular.BookOpen32", 32f) {
      materialPath {
          moveTo(16.0F, 26.329F)
          curveTo(15.175F, 27.349F, 13.914F, 28.0F, 12.5F, 28.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(8.5F)
          curveToRelative(1.414F, 0.0F, 2.675F, 0.652F, 3.5F, 1.671F)
          curveTo(16.825F, 4.651F, 18.086F, 4.0F, 19.5F, 4.0F)
          horizontalLineTo(28.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(20.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineToRelative(-8.5F)
          curveToRelative(-1.414F, 0.0F, -2.675F, -0.652F, -3.5F, -1.671F)
          close()
          moveTo(17.0F, 8.5F)
          verticalLineToRelative(15.0F)
          curveToRelative(0.0F, 1.38F, 1.12F, 2.5F, 2.5F, 2.5F)
          horizontalLineTo(28.0F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(-8.5F)
          curveTo(18.12F, 6.0F, 17.0F, 7.12F, 17.0F, 8.5F)
          close()
          moveToRelative(-2.0F, 0.0F)
          curveTo(15.0F, 7.12F, 13.88F, 6.0F, 12.5F, 6.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(20.0F)
          horizontalLineToRelative(8.5F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-15.0F)
          close()        
      }
    }
    return _bookOpen32!!
  }

private var _bookOpen32: ImageVector? = null
