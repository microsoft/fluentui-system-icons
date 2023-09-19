package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ClockAlarm32: ImageVector
  get() {
    if (_clockAlarm32 != null) {
      return _clockAlarm32!!
    }
    _clockAlarm32 = fluentIcon(name = "Regular.ClockAlarm32", 32f) {
      materialPath {
          moveTo(16.0F, 10.0F)
          verticalLineToRelative(6.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-5.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineToRelative(-7.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          close()
          moveTo(3.0F, 8.0F)
          curveToRelative(0.0F, 1.523F, 0.68F, 2.886F, 1.754F, 3.803F)
          curveTo(4.267F, 13.11F, 4.0F, 14.523F, 4.0F, 16.0F)
          curveToRelative(0.0F, 2.954F, 1.067F, 5.658F, 2.837F, 7.749F)
          lineToRelative(-2.544F, 2.544F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          lineToRelative(2.544F, -2.544F)
          curveTo(10.341F, 26.933F, 13.046F, 28.0F, 16.0F, 28.0F)
          curveToRelative(2.954F, 0.0F, 5.658F, -1.067F, 7.749F, -2.837F)
          lineToRelative(2.544F, 2.544F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(-2.544F, -2.544F)
          curveTo(26.933F, 21.659F, 28.0F, 18.954F, 28.0F, 16.0F)
          curveToRelative(0.0F, -1.476F, -0.267F, -2.89F, -0.754F, -4.197F)
          curveTo(28.319F, 10.886F, 29.0F, 9.523F, 29.0F, 8.0F)
          curveToRelative(0.0F, -2.761F, -2.239F, -5.0F, -5.0F, -5.0F)
          curveToRelative(-1.523F, 0.0F, -2.886F, 0.68F, -3.803F, 1.754F)
          curveTo(18.89F, 4.267F, 17.477F, 4.0F, 16.0F, 4.0F)
          curveToRelative(-1.476F, 0.0F, -2.89F, 0.267F, -4.197F, 0.754F)
          curveTo(10.886F, 3.681F, 9.523F, 3.0F, 8.0F, 3.0F)
          curveTo(5.239F, 3.0F, 3.0F, 5.239F, 3.0F, 8.0F)
          close()
          moveToRelative(2.0F, 0.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          curveToRelative(0.716F, 0.0F, 1.374F, 0.251F, 1.89F, 0.67F)
          curveTo(8.154F, 6.7F, 6.7F, 8.154F, 5.67F, 9.89F)
          curveTo(5.25F, 9.374F, 5.0F, 8.716F, 5.0F, 8.0F)
          close()
          moveToRelative(22.0F, 0.0F)
          curveToRelative(0.0F, 0.716F, -0.251F, 1.374F, -0.67F, 1.89F)
          curveToRelative(-1.03F, -1.736F, -2.484F, -3.19F, -4.22F, -4.22F)
          curveTo(22.626F, 5.25F, 23.284F, 5.0F, 24.0F, 5.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          close()
          moveTo(16.0F, 6.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, 4.477F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveTo(6.0F, 21.523F, 6.0F, 16.0F)
          reflectiveCurveTo(10.477F, 6.0F, 16.0F, 6.0F)
          close()        
      }
    }
    return _clockAlarm32!!
  }

private var _clockAlarm32: ImageVector? = null
