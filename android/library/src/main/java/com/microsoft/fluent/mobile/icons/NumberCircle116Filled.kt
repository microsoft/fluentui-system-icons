package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.NumberCircle116: ImageVector
  get() {
    if (_numberCircle116 != null) {
      return _numberCircle116!!
    }
    _numberCircle116 = fluentIcon(name = "Filled.NumberCircle116", 116f) {
      materialPath {
          moveTo(8.0F, 14.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, -2.686F, 6.0F, -6.0F)
          reflectiveCurveToRelative(-2.686F, -6.0F, -6.0F, -6.0F)
          reflectiveCurveToRelative(-6.0F, 2.686F, -6.0F, 6.0F)
          reflectiveCurveToRelative(2.686F, 6.0F, 6.0F, 6.0F)
          close()
          moveToRelative(1.0F, -8.5F)
          verticalLineToRelative(5.0F)
          curveTo(9.0F, 10.776F, 8.776F, 11.0F, 8.5F, 11.0F)
          reflectiveCurveTo(8.0F, 10.776F, 8.0F, 10.5F)
          verticalLineTo(7.41F)
          curveTo(7.812F, 7.564F, 7.612F, 7.696F, 7.419F, 7.823F)
          lineTo(7.277F, 7.916F)
          curveToRelative(-0.23F, 0.153F, -0.54F, 0.091F, -0.693F, -0.139F)
          curveToRelative(-0.153F, -0.23F, -0.091F, -0.54F, 0.139F, -0.693F)
          lineTo(6.879F, 6.98F)
          curveToRelative(0.314F, -0.207F, 0.516F, -0.34F, 0.685F, -0.53F)
          curveToRelative(0.175F, -0.198F, 0.333F, -0.483F, 0.446F, -1.048F)
          curveToRelative(0.05F, -0.252F, 0.284F, -0.425F, 0.54F, -0.4F)
          curveTo(8.804F, 5.029F, 9.0F, 5.244F, 9.0F, 5.5F)
          close()        
      }
    }
    return _numberCircle116!!
  }

private var _numberCircle116: ImageVector? = null
