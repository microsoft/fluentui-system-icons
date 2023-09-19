package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowMaximize16: ImageVector
  get() {
    if (_arrowMaximize16 != null) {
      return _arrowMaximize16!!
    }
    _arrowMaximize16 = fluentIcon(name = "Filled.ArrowMaximize16", 16f) {
      materialPath {
          moveTo(8.477F, 2.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(8.063F, 3.5F, 8.477F, 3.5F)
          horizontalLineToRelative(2.962F)
          lineTo(3.5F, 11.44F)
          verticalLineTo(8.476F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveTo(2.0F, 8.063F, 2.0F, 8.477F)
          verticalLineToRelative(4.673F)
          curveTo(2.0F, 13.62F, 2.38F, 14.0F, 2.85F, 14.0F)
          horizontalLineToRelative(4.673F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(4.56F)
          lineToRelative(7.94F, -7.94F)
          verticalLineToRelative(2.963F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(14.0F, 7.937F, 14.0F, 7.523F)
          verticalLineTo(2.85F)
          curveTo(14.0F, 2.38F, 13.62F, 2.0F, 13.15F, 2.0F)
          horizontalLineTo(8.477F)
          close()        
      }
    }
    return _arrowMaximize16!!
  }

private var _arrowMaximize16: ImageVector? = null
