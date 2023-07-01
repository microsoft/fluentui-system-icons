package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DeviceEq20: ImageVector
  get() {
    if (_deviceEq20 != null) {
      return _deviceEq20!!
    }
    _deviceEq20 = fluentIcon(name = "Filled.DeviceEq20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(14.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(2.75F)
          curveTo(9.25F, 2.336F, 9.586F, 2.0F, 10.0F, 2.0F)
          close()
          moveToRelative(3.75F, 3.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(8.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(13.0F, 14.664F, 13.0F, 14.25F)
          verticalLineToRelative(-8.5F)
          curveTo(13.0F, 5.336F, 13.336F, 5.0F, 13.75F, 5.0F)
          close()
          moveTo(7.0F, 5.75F)
          curveTo(7.0F, 5.336F, 6.664F, 5.0F, 6.25F, 5.0F)
          reflectiveCurveTo(5.5F, 5.336F, 5.5F, 5.75F)
          verticalLineToRelative(8.5F)
          curveTo(5.5F, 14.664F, 5.836F, 15.0F, 6.25F, 15.0F)
          reflectiveCurveTo(7.0F, 14.664F, 7.0F, 14.25F)
          verticalLineToRelative(-8.5F)
          close()
          moveTo(17.25F, 8.0F)
          curveTo(17.664F, 8.0F, 18.0F, 8.336F, 18.0F, 8.75F)
          verticalLineToRelative(2.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-2.5F)
          curveTo(16.5F, 8.336F, 16.836F, 8.0F, 17.25F, 8.0F)
          close()
          moveTo(3.5F, 8.75F)
          curveTo(3.5F, 8.336F, 3.164F, 8.0F, 2.75F, 8.0F)
          reflectiveCurveTo(2.0F, 8.336F, 2.0F, 8.75F)
          verticalLineToRelative(2.5F)
          curveTo(2.0F, 11.664F, 2.336F, 12.0F, 2.75F, 12.0F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-2.5F)
          close()        
      }
    }
    return _deviceEq20!!
  }

private var _deviceEq20: ImageVector? = null
