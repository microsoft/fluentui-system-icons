package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Temperature32: ImageVector
  get() {
    if (_temperature32 != null) {
      return _temperature32!!
    }
    _temperature32 = fluentIcon(name = "Regular.Temperature32", 32f) {
      materialPath {
          moveTo(16.0F, 5.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, 1.343F, -3.0F, 3.0F)
          verticalLineToRelative(9.975F)
          lineToRelative(-0.333F, 0.298F)
          curveTo(11.642F, 19.19F, 11.0F, 20.519F, 11.0F, 22.0F)
          curveToRelative(0.0F, 2.761F, 2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          curveToRelative(0.0F, -1.48F, -0.642F, -2.81F, -1.667F, -3.727F)
          lineTo(19.0F, 17.975F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          close()
          moveToRelative(-5.0F, 3.0F)
          curveToRelative(0.0F, -2.761F, 2.239F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.239F, 5.0F, 5.0F)
          verticalLineToRelative(9.101F)
          curveToRelative(1.236F, 1.262F, 2.0F, 2.992F, 2.0F, 4.899F)
          curveToRelative(0.0F, 3.866F, -3.134F, 7.0F, -7.0F, 7.0F)
          reflectiveCurveToRelative(-7.0F, -3.134F, -7.0F, -7.0F)
          curveToRelative(0.0F, -1.907F, 0.764F, -3.637F, 2.0F, -4.899F)
          verticalLineTo(8.0F)
          close()
          moveToRelative(4.0F, 4.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(7.17F)
          curveToRelative(1.165F, 0.412F, 2.0F, 1.524F, 2.0F, 2.83F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.343F, -3.0F, -3.0F)
          curveToRelative(0.0F, -1.306F, 0.835F, -2.418F, 2.0F, -2.83F)
          verticalLineTo(12.0F)
          close()        
      }
    }
    return _temperature32!!
  }

private var _temperature32: ImageVector? = null
