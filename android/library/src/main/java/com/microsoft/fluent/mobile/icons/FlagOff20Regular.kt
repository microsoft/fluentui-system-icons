package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FlagOff20: ImageVector
  get() {
    if (_flagOff20 != null) {
      return _flagOff20!!
    }
    _flagOff20 = fluentIcon(name = "Regular.FlagOff20", 20f) {
      materialPath {
          moveTo(2.853F, 2.147F)
          curveToRelative(-0.195F, -0.196F, -0.511F, -0.196F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(3.5F, 4.207F)
          verticalLineTo(17.5F)
          curveTo(3.5F, 17.776F, 3.724F, 18.0F, 4.0F, 18.0F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(13.0F)
          horizontalLineToRelative(7.793F)
          lineToRelative(4.853F, 4.854F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(3.765F, 3.058F)
          lineTo(2.853F, 2.147F)
          close()
          moveTo(11.293F, 12.0F)
          horizontalLineTo(4.5F)
          verticalLineTo(5.207F)
          lineTo(11.293F, 12.0F)
          close()
          moveToRelative(3.273F, 0.0F)
          horizontalLineTo(14.12F)
          lineToRelative(1.0F, 1.0F)
          horizontalLineToRelative(0.38F)
          curveToRelative(0.4F, 0.0F, 0.637F, -0.445F, 0.416F, -0.777F)
          lineTo(13.101F, 8.0F)
          lineToRelative(2.815F, -4.223F)
          curveTo(16.137F, 3.445F, 15.899F, 3.0F, 15.5F, 3.0F)
          horizontalLineTo(5.121F)
          lineToRelative(1.0F, 1.0F)
          horizontalLineToRelative(8.445F)
          lineToRelative(-2.482F, 3.723F)
          curveToRelative(-0.112F, 0.168F, -0.112F, 0.386F, 0.0F, 0.554F)
          lineTo(14.566F, 12.0F)
          close()        
      }
    }
    return _flagOff20!!
  }

private var _flagOff20: ImageVector? = null
