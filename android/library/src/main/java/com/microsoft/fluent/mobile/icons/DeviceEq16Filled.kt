package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DeviceEq16: ImageVector
  get() {
    if (_deviceEq16 != null) {
      return _deviceEq16!!
    }
    _deviceEq16 = fluentIcon(name = "Filled.DeviceEq16", 16f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(10.5F)
          curveTo(8.75F, 13.664F, 8.414F, 14.0F, 8.0F, 14.0F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(2.75F)
          curveTo(7.25F, 2.336F, 7.586F, 2.0F, 8.0F, 2.0F)
          close()
          moveToRelative(2.75F, 2.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(10.0F, 11.664F, 10.0F, 11.25F)
          verticalLineToRelative(-6.5F)
          curveTo(10.0F, 4.336F, 10.336F, 4.0F, 10.75F, 4.0F)
          close()
          moveTo(6.0F, 4.75F)
          curveTo(6.0F, 4.336F, 5.664F, 4.0F, 5.25F, 4.0F)
          reflectiveCurveTo(4.5F, 4.336F, 4.5F, 4.75F)
          verticalLineToRelative(6.5F)
          curveTo(4.5F, 11.664F, 4.836F, 12.0F, 5.25F, 12.0F)
          reflectiveCurveTo(6.0F, 11.664F, 6.0F, 11.25F)
          verticalLineToRelative(-6.5F)
          close()
          moveTo(13.75F, 6.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(2.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(13.0F, 9.664F, 13.0F, 9.25F)
          verticalLineToRelative(-2.5F)
          curveTo(13.0F, 6.336F, 13.336F, 6.0F, 13.75F, 6.0F)
          close()
          moveTo(3.0F, 6.75F)
          curveTo(3.0F, 6.336F, 2.664F, 6.0F, 2.25F, 6.0F)
          reflectiveCurveTo(1.5F, 6.336F, 1.5F, 6.75F)
          verticalLineToRelative(2.5F)
          curveTo(1.5F, 9.664F, 1.836F, 10.0F, 2.25F, 10.0F)
          reflectiveCurveTo(3.0F, 9.664F, 3.0F, 9.25F)
          verticalLineToRelative(-2.5F)
          close()        
      }
    }
    return _deviceEq16!!
  }

private var _deviceEq16: ImageVector? = null
