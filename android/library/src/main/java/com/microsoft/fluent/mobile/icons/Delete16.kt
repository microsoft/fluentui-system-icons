package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Delete16: ImageVector
  get() {
    if (_delete16 != null) {
      return _delete16!!
    }
    _delete16 = fluentIcon(name = "Regular.Delete16", 16f) {
      materialPath {
          moveTo(7.0F, 3.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveTo(7.0F, 2.448F, 7.0F, 3.0F)
          close()
          moveTo(6.0F, 3.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(14.276F, 4.0F, 14.0F, 4.0F)
          horizontalLineToRelative(-0.564F)
          lineToRelative(-1.205F, 8.838F)
          curveTo(12.062F, 14.077F, 11.004F, 15.0F, 9.754F, 15.0F)
          horizontalLineTo(6.246F)
          curveToRelative(-1.25F, 0.0F, -2.308F, -0.924F, -2.477F, -2.162F)
          lineTo(2.563F, 4.0F)
          horizontalLineTo(2.0F)
          curveTo(1.724F, 4.0F, 1.5F, 3.776F, 1.5F, 3.5F)
          reflectiveCurveTo(1.724F, 3.0F, 2.0F, 3.0F)
          horizontalLineToRelative(4.0F)
          close()
          moveToRelative(1.0F, 3.5F)
          curveTo(7.0F, 6.224F, 6.776F, 6.0F, 6.5F, 6.0F)
          reflectiveCurveTo(6.0F, 6.224F, 6.0F, 6.5F)
          verticalLineToRelative(5.0F)
          curveTo(6.0F, 11.776F, 6.224F, 12.0F, 6.5F, 12.0F)
          reflectiveCurveTo(7.0F, 11.776F, 7.0F, 11.5F)
          verticalLineToRelative(-5.0F)
          close()
          moveTo(9.5F, 6.0F)
          curveTo(9.776F, 6.0F, 10.0F, 6.224F, 10.0F, 6.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(9.0F, 11.776F, 9.0F, 11.5F)
          verticalLineToRelative(-5.0F)
          curveTo(9.0F, 6.224F, 9.224F, 6.0F, 9.5F, 6.0F)
          close()
          moveToRelative(-4.74F, 6.703F)
          curveTo(4.86F, 13.446F, 5.495F, 14.0F, 6.245F, 14.0F)
          horizontalLineToRelative(3.508F)
          curveToRelative(0.75F, 0.0F, 1.385F, -0.554F, 1.487F, -1.297F)
          lineTo(12.427F, 4.0F)
          horizontalLineTo(3.573F)
          lineToRelative(1.187F, 8.703F)
          close()        
      }
    }
    return _delete16!!
  }

private var _delete16: ImageVector? = null
