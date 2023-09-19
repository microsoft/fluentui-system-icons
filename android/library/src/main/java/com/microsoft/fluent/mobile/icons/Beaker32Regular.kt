package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Beaker32: ImageVector
  get() {
    if (_beaker32 != null) {
      return _beaker32!!
    }
    _beaker32 = fluentIcon(name = "Regular.Beaker32", 32f) {
      materialPath {
          moveTo(20.0F, 5.0F)
          verticalLineToRelative(8.438F)
          curveToRelative(0.0F, 0.814F, 0.248F, 1.608F, 0.71F, 2.277F)
          lineToRelative(5.71F, 8.248F)
          curveTo(27.896F, 26.092F, 26.372F, 29.0F, 23.783F, 29.0F)
          horizontalLineTo(8.217F)
          curveToRelative(-2.589F, 0.0F, -4.113F, -2.908F, -2.639F, -5.037F)
          lineToRelative(5.71F, -8.248F)
          curveTo(11.751F, 15.046F, 12.0F, 14.252F, 12.0F, 13.438F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(-1.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-1.0F)
          close()
          moveToRelative(-6.0F, 8.438F)
          curveToRelative(0.0F, 1.22F, -0.373F, 2.412F, -1.067F, 3.415F)
          lineTo(12.139F, 18.0F)
          horizontalLineToRelative(7.721F)
          lineToRelative(-0.794F, -1.147F)
          curveTo(18.372F, 15.85F, 18.0F, 14.658F, 18.0F, 13.438F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(-4.0F)
          verticalLineToRelative(8.438F)
          close()
          moveToRelative(-3.228F, 6.536F)
          lineToRelative(-3.55F, 5.127F)
          curveTo(6.668F, 25.904F, 7.243F, 27.0F, 8.218F, 27.0F)
          horizontalLineToRelative(15.565F)
          curveToRelative(0.976F, 0.0F, 1.55F, -1.096F, 0.994F, -1.899F)
          lineToRelative(-3.55F, -5.127F)
          curveTo(21.155F, 19.991F, 21.079F, 20.0F, 21.0F, 20.0F)
          horizontalLineTo(11.0F)
          curveToRelative(-0.078F, 0.0F, -0.155F, -0.009F, -0.228F, -0.026F)
          close()        
      }
    }
    return _beaker32!!
  }

private var _beaker32: ImageVector? = null
