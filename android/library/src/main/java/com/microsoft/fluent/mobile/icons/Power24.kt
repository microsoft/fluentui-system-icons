package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Power24: ImageVector
  get() {
    if (_power24 != null) {
      return _power24!!
    }
    _power24 = fluentIcon(name = "Filled.Power24", 24f) {
      materialPath {
          moveTo(8.205F, 4.843F)
          curveToRelative(0.5F, -0.233F, 1.096F, -0.016F, 1.329F, 0.485F)
          curveToRelative(0.233F, 0.5F, 0.016F, 1.095F, -0.485F, 1.328F)
          curveTo(6.6F, 7.796F, 5.0F, 10.255F, 5.0F, 13.003F)
          curveTo(5.0F, 16.867F, 8.134F, 20.0F, 12.0F, 20.0F)
          reflectiveCurveToRelative(7.0F, -3.133F, 7.0F, -6.997F)
          curveToRelative(0.0F, -2.743F, -1.593F, -5.197F, -4.035F, -6.34F)
          curveToRelative(-0.5F, -0.234F, -0.716F, -0.83F, -0.481F, -1.33F)
          curveToRelative(0.234F, -0.5F, 0.83F, -0.715F, 1.33F, -0.481F)
          curveTo(18.951F, 6.322F, 21.0F, 9.477F, 21.0F, 13.003F)
          curveTo(21.0F, 17.972F, 16.97F, 22.0F, 12.0F, 22.0F)
          reflectiveCurveToRelative(-9.0F, -4.028F, -9.0F, -8.997F)
          curveToRelative(0.0F, -3.533F, 2.057F, -6.695F, 5.205F, -8.16F)
          close()
          moveTo(12.0F, 2.0F)
          curveToRelative(0.513F, 0.0F, 0.935F, 0.386F, 0.993F, 0.883F)
          lineTo(13.0F, 3.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.553F, -0.448F, 1.0F, -1.0F, 1.0F)
          curveToRelative(-0.513F, 0.0F, -0.935F, -0.386F, -0.993F, -0.883F)
          lineTo(11.0F, 10.0F)
          verticalLineTo(3.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          close()        
      }
    }
    return _power24!!
  }

private var _power24: ImageVector? = null
