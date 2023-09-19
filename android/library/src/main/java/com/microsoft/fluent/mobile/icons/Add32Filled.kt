package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Add32: ImageVector
  get() {
    if (_add32 != null) {
      return _add32!!
    }
    _add32 = fluentIcon(name = "Filled.Add32", 32f) {
      materialPath {
          moveTo(16.25F, 3.0F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          verticalLineTo(15.0F)
          horizontalLineToRelative(10.75F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveToRelative(-0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineTo(17.5F)
          verticalLineToRelative(10.75F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          reflectiveCurveTo(15.0F, 28.94F, 15.0F, 28.25F)
          verticalLineTo(17.5F)
          horizontalLineTo(4.25F)
          curveTo(3.56F, 17.5F, 3.0F, 16.94F, 3.0F, 16.25F)
          reflectiveCurveTo(3.56F, 15.0F, 4.25F, 15.0F)
          horizontalLineTo(15.0F)
          verticalLineTo(4.25F)
          curveTo(15.0F, 3.56F, 15.56F, 3.0F, 16.25F, 3.0F)
          close()        
      }
    }
    return _add32!!
  }

private var _add32: ImageVector? = null
