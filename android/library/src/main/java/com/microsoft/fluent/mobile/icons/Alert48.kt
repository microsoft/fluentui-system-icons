package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Alert48: ImageVector
  get() {
    if (_alert48 != null) {
      return _alert48!!
    }
    _alert48 = fluentIcon(name = "Regular.Alert48", 48f) {
      materialPath {
          moveTo(11.5F, 19.0F)
          verticalLineToRelative(8.75F)
          curveToRelative(0.0F, 0.174F, -0.036F, 0.346F, -0.107F, 0.505F)
          lineTo(8.639F, 34.5F)
          horizontalLineToRelative(30.724F)
          lineToRelative(-2.756F, -6.245F)
          curveToRelative(-0.07F, -0.16F, -0.106F, -0.331F, -0.106F, -0.505F)
          verticalLineTo(19.0F)
          curveToRelative(0.0F, -6.904F, -5.596F, -12.5F, -12.5F, -12.5F)
          reflectiveCurveTo(11.5F, 12.096F, 11.5F, 19.0F)
          close()
          moveTo(18.0F, 37.0F)
          horizontalLineTo(8.254F)
          curveToRelative(-1.625F, 0.0F, -2.714F, -1.671F, -2.058F, -3.158F)
          lineTo(9.0F, 27.487F)
          verticalLineTo(19.0F)
          curveToRelative(0.0F, -8.284F, 6.716F, -15.0F, 15.0F, -15.0F)
          curveToRelative(8.284F, 0.0F, 15.0F, 6.716F, 15.0F, 15.0F)
          verticalLineToRelative(8.486F)
          lineToRelative(2.804F, 6.356F)
          curveTo(42.461F, 35.329F, 41.371F, 37.0F, 39.746F, 37.0F)
          horizontalLineTo(30.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 3.314F, -2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          verticalLineToRelative(-1.0F)
          close()
          moveToRelative(9.5F, 0.0F)
          horizontalLineToRelative(-7.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 1.933F, 1.567F, 3.5F, 3.5F, 3.5F)
          reflectiveCurveToRelative(3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineToRelative(-1.0F)
          close()        
      }
    }
    return _alert48!!
  }

private var _alert48: ImageVector? = null
