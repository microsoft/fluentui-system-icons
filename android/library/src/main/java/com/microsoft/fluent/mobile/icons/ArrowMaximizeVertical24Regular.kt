package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowMaximizeVertical24: ImageVector
  get() {
    if (_arrowMaximizeVertical24 != null) {
      return _arrowMaximizeVertical24!!
    }
    _arrowMaximizeVertical24 = fluentIcon(name = "Regular.ArrowMaximizeVertical24", 24f) {
      materialPath {
          moveTo(13.72F, 5.78F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-2.5F, -2.5F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-2.5F, 2.5F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineTo(11.0F, 4.56F)
          verticalLineToRelative(4.19F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(4.56F)
          lineToRelative(1.22F, 1.22F)
          close()
          moveTo(4.0F, 11.75F)
          curveTo(4.0F, 11.336F, 4.336F, 11.0F, 4.75F, 11.0F)
          horizontalLineToRelative(14.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(4.75F)
          curveTo(4.336F, 12.5F, 4.0F, 12.164F, 4.0F, 11.75F)
          close()
          moveToRelative(8.5F, 3.0F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveTo(11.0F, 14.336F, 11.0F, 14.75F)
          verticalLineToRelative(4.69F)
          lineToRelative(-1.22F, -1.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(2.5F, 2.5F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(2.5F, -2.5F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-1.22F, 1.22F)
          verticalLineToRelative(-4.69F)
          close()        
      }
    }
    return _arrowMaximizeVertical24!!
  }

private var _arrowMaximizeVertical24: ImageVector? = null
