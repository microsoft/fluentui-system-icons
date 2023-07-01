package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Power28: ImageVector
  get() {
    if (_power28 != null) {
      return _power28!!
    }
    _power28 = fluentIcon(name = "Regular.Power28", 28f) {
      materialPath {
          moveTo(10.69F, 5.267F)
          curveToRelative(0.162F, 0.381F, -0.016F, 0.821F, -0.397F, 0.983F)
          curveTo(6.887F, 7.695F, 4.5F, 11.07F, 4.5F, 15.0F)
          curveToRelative(0.0F, 5.247F, 4.253F, 9.5F, 9.5F, 9.5F)
          reflectiveCurveToRelative(9.5F, -4.253F, 9.5F, -9.5F)
          curveToRelative(0.0F, -3.93F, -2.387F, -7.305F, -5.793F, -8.75F)
          curveToRelative(-0.381F, -0.162F, -0.56F, -0.602F, -0.397F, -0.983F)
          curveToRelative(0.161F, -0.381F, 0.602F, -0.56F, 0.983F, -0.398F)
          curveTo(22.233F, 6.541F, 25.0F, 10.447F, 25.0F, 15.0F)
          curveToRelative(0.0F, 6.075F, -4.925F, 11.0F, -11.0F, 11.0F)
          reflectiveCurveTo(3.0F, 21.075F, 3.0F, 15.0F)
          curveToRelative(0.0F, -4.553F, 2.766F, -8.459F, 6.707F, -10.13F)
          curveToRelative(0.381F, -0.162F, 0.822F, 0.016F, 0.983F, 0.397F)
          close()
          moveTo(14.0F, 2.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(9.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-9.5F)
          curveTo(13.25F, 2.336F, 13.586F, 2.0F, 14.0F, 2.0F)
          close()        
      }
    }
    return _power28!!
  }

private var _power28: ImageVector? = null
