package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.RoadCone32: ImageVector
  get() {
    if (_roadCone32 != null) {
      return _roadCone32!!
    }
    _roadCone32 = fluentIcon(name = "Filled.RoadCone32", 32f) {
      materialPath {
          moveTo(14.77F, 2.0F)
          curveToRelative(-0.66F, 0.0F, -1.242F, 0.432F, -1.434F, 1.064F)
          lineTo(9.404F, 16.0F)
          horizontalLineTo(17.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(8.797F)
          lineToRelative(-0.81F, 2.667F)
          horizontalLineTo(18.5F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.447F, 1.0F, 1.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-11.0F)
          curveToRelative(-0.04F, 0.0F, -0.08F, -0.003F, -0.119F, -0.007F)
          lineTo(5.76F, 28.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(26.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-2.759F)
          lineTo(18.665F, 3.064F)
          curveTo(18.473F, 2.432F, 17.89F, 2.0F, 17.229F, 2.0F)
          horizontalLineToRelative(-2.458F)
          close()        
      }
    }
    return _roadCone32!!
  }

private var _roadCone32: ImageVector? = null
