package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowMaximize20: ImageVector
  get() {
    if (_arrowMaximize20 != null) {
      return _arrowMaximize20!!
    }
    _arrowMaximize20 = fluentIcon(name = "Filled.ArrowMaximize20", 20f) {
      materialPath {
          moveTo(16.0F, 3.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(5.25F)
          curveTo(17.0F, 9.664F, 16.664F, 10.0F, 16.25F, 10.0F)
          reflectiveCurveTo(15.5F, 9.664F, 15.5F, 9.25F)
          verticalLineTo(5.559F)
          lineTo(5.559F, 15.5F)
          horizontalLineTo(9.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(9.664F, 17.0F, 9.25F, 17.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineToRelative(-5.25F)
          curveTo(3.0F, 10.336F, 3.336F, 10.0F, 3.75F, 10.0F)
          reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(3.689F)
          lineTo(14.439F, 4.5F)
          horizontalLineTo(10.75F)
          curveTo(10.336F, 4.5F, 10.0F, 4.164F, 10.0F, 3.75F)
          reflectiveCurveTo(10.336F, 3.0F, 10.75F, 3.0F)
          horizontalLineTo(16.0F)
          close()        
      }
    }
    return _arrowMaximize20!!
  }

private var _arrowMaximize20: ImageVector? = null
