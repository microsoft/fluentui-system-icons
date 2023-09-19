package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PhoneEdit20: ImageVector
  get() {
    if (_phoneEdit20 != null) {
      return _phoneEdit20!!
    }
    _phoneEdit20 = fluentIcon(name = "Regular.PhoneEdit20", 20f) {
      materialPath {
          moveTo(15.81F, 1.548F)
          lineToRelative(-4.83F, 4.83F)
          curveToRelative(-0.282F, 0.28F, -0.482F, 0.634F, -0.578F, 1.02F)
          lineToRelative(-0.375F, 1.498F)
          curveToRelative(-0.162F, 0.651F, 0.428F, 1.241F, 1.079F, 1.078F)
          lineTo(12.604F, 9.6F)
          curveToRelative(0.386F, -0.097F, 0.739F, -0.296F, 1.02F, -0.578F)
          lineToRelative(4.83F, -4.83F)
          curveToRelative(0.73F, -0.73F, 0.73F, -1.914F, 0.0F, -2.644F)
          curveToRelative(-0.73F, -0.73F, -1.915F, -0.73F, -2.645F, 0.0F)
          close()
          moveTo(12.942F, 3.0F)
          lineToRelative(0.84F, -0.84F)
          curveTo(13.543F, 2.056F, 13.278F, 2.0F, 13.0F, 2.0F)
          horizontalLineTo(7.0F)
          curveTo(5.895F, 2.0F, 5.0F, 2.895F, 5.0F, 4.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(9.06F)
          lineToRelative(-0.668F, 0.67F)
          curveToRelative(-0.105F, 0.103F, -0.215F, 0.2F, -0.332F, 0.288F)
          verticalLineTo(16.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(7.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(5.943F)
          close()
          moveTo(9.0F, 14.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveTo(8.724F, 15.0F, 9.0F, 15.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(11.276F, 14.0F, 11.0F, 14.0F)
          horizontalLineTo(9.0F)
          close()        
      }
    }
    return _phoneEdit20!!
  }

private var _phoneEdit20: ImageVector? = null
