package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.EqualOff20: ImageVector
  get() {
    if (_equalOff20 != null) {
      return _equalOff20!!
    }
    _equalOff20 = fluentIcon(name = "Regular.EqualOff20", 20f) {
      materialPath {
          moveTo(2.853F, 2.147F)
          curveToRelative(-0.195F, -0.196F, -0.511F, -0.196F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(6.293F, 7.0F)
          horizontalLineTo(3.5F)
          curveTo(3.224F, 7.0F, 3.0F, 7.224F, 3.0F, 7.5F)
          reflectiveCurveTo(3.224F, 8.0F, 3.5F, 8.0F)
          horizontalLineToRelative(3.793F)
          lineToRelative(4.0F, 4.0F)
          horizontalLineTo(3.5F)
          curveTo(3.224F, 12.0F, 3.0F, 12.224F, 3.0F, 12.5F)
          reflectiveCurveTo(3.224F, 13.0F, 3.5F, 13.0F)
          horizontalLineToRelative(8.793F)
          lineToRelative(4.853F, 4.854F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-15.0F, -15.0F)
          close()
          moveTo(14.122F, 12.0F)
          lineToRelative(1.0F, 1.0F)
          horizontalLineTo(16.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(16.776F, 12.0F, 16.5F, 12.0F)
          horizontalLineToRelative(-2.379F)
          close()
          moveToRelative(-5.0F, -5.0F)
          lineToRelative(1.0F, 1.0F)
          horizontalLineTo(16.5F)
          curveTo(16.776F, 8.0F, 17.0F, 7.776F, 17.0F, 7.5F)
          reflectiveCurveTo(16.776F, 7.0F, 16.5F, 7.0F)
          horizontalLineTo(9.121F)
          close()        
      }
    }
    return _equalOff20!!
  }

private var _equalOff20: ImageVector? = null
