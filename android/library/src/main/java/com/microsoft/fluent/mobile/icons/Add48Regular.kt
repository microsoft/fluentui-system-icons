package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Add48: ImageVector
  get() {
    if (_add48 != null) {
      return _add48!!
    }
    _add48 = fluentIcon(name = "Regular.Add48", 48f) {
      materialPath {
          moveTo(23.75F, 5.5F)
          curveTo(24.44F, 5.5F, 25.0F, 6.06F, 25.0F, 6.75F)
          verticalLineTo(22.5F)
          horizontalLineToRelative(15.75F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveTo(41.44F, 25.0F, 40.75F, 25.0F)
          horizontalLineTo(25.0F)
          verticalLineToRelative(15.75F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          reflectiveCurveToRelative(-1.25F, -0.56F, -1.25F, -1.25F)
          verticalLineTo(25.0F)
          horizontalLineTo(6.75F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          reflectiveCurveToRelative(0.56F, -1.25F, 1.25F, -1.25F)
          horizontalLineTo(22.5F)
          verticalLineTo(6.75F)
          curveToRelative(0.0F, -0.69F, 0.56F, -1.25F, 1.25F, -1.25F)
          close()        
      }
    }
    return _add48!!
  }

private var _add48: ImageVector? = null
