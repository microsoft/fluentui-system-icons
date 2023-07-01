package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ScreenPerson20: ImageVector
  get() {
    if (_screenPerson20 != null) {
      return _screenPerson20!!
    }
    _screenPerson20 = fluentIcon(name = "Regular.ScreenPerson20", 20f) {
      materialPath {
          moveTo(4.75F, 4.0F)
          curveTo(3.231F, 4.0F, 2.0F, 5.231F, 2.0F, 6.75F)
          verticalLineToRelative(6.5F)
          curveTo(2.0F, 14.769F, 3.231F, 16.0F, 4.75F, 16.0F)
          horizontalLineToRelative(6.3F)
          curveToRelative(0.075F, -0.37F, 0.231F, -0.71F, 0.45F, -1.0F)
          horizontalLineTo(4.75F)
          curveTo(3.784F, 15.0F, 3.0F, 14.216F, 3.0F, 13.25F)
          verticalLineToRelative(-6.5F)
          curveTo(3.0F, 5.784F, 3.784F, 5.0F, 4.75F, 5.0F)
          horizontalLineToRelative(10.5F)
          curveTo(16.216F, 5.0F, 17.0F, 5.784F, 17.0F, 6.75F)
          verticalLineToRelative(2.651F)
          curveToRelative(0.401F, 0.232F, 0.744F, 0.555F, 1.0F, 0.94F)
          verticalLineTo(6.75F)
          curveTo(18.0F, 5.231F, 16.769F, 4.0F, 15.25F, 4.0F)
          horizontalLineTo(4.75F)
          close()
          moveToRelative(12.75F, 8.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          close()
          moveToRelative(1.5F, 4.5F)
          curveToRelative(0.0F, 1.245F, -1.0F, 2.5F, -3.5F, 2.5F)
          reflectiveCurveTo(12.0F, 17.75F, 12.0F, 16.5F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          close()        
      }
    }
    return _screenPerson20!!
  }

private var _screenPerson20: ImageVector? = null
