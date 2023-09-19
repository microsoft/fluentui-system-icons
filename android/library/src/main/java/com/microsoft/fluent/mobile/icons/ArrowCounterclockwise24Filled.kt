package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCounterclockwise24: ImageVector
  get() {
    if (_arrowCounterclockwise24 != null) {
      return _arrowCounterclockwise24!!
    }
    _arrowCounterclockwise24 = fluentIcon(name = "Filled.ArrowCounterclockwise24", 24f) {
      materialPath {
          moveTo(12.0F, 4.75F)
          curveToRelative(4.004F, 0.0F, 7.25F, 3.246F, 7.25F, 7.25F)
          reflectiveCurveToRelative(-3.246F, 7.25F, -7.25F, 7.25F)
          reflectiveCurveTo(4.75F, 16.004F, 4.75F, 12.0F)
          curveToRelative(0.0F, -0.286F, 0.016F, -0.567F, 0.049F, -0.844F)
          curveTo(4.867F, 10.568F, 4.44F, 10.0F, 3.849F, 10.0F)
          curveToRelative(-0.515F, 0.0F, -0.968F, 0.358F, -1.03F, 0.87F)
          curveTo(2.772F, 11.24F, 2.75F, 11.617F, 2.75F, 12.0F)
          curveToRelative(0.0F, 5.109F, 4.141F, 9.25F, 9.25F, 9.25F)
          reflectiveCurveToRelative(9.25F, -4.141F, 9.25F, -9.25F)
          reflectiveCurveTo(17.109F, 2.75F, 12.0F, 2.75F)
          curveToRelative(-2.173F, 0.0F, -4.171F, 0.75F, -5.75F, 2.004F)
          verticalLineTo(4.25F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(2.698F)
          lineTo(4.216F, 7.0F)
          horizontalLineTo(4.25F)
          verticalLineToRelative(0.25F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(7.583F)
          curveToRelative(1.223F, -0.94F, 2.755F, -1.5F, 4.417F, -1.5F)
          close()        
      }
    }
    return _arrowCounterclockwise24!!
  }

private var _arrowCounterclockwise24: ImageVector? = null
