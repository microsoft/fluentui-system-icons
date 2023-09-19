package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.EqualOff16: ImageVector
  get() {
    if (_equalOff16 != null) {
      return _equalOff16!!
    }
    _equalOff16 = fluentIcon(name = "Regular.EqualOff16", 16f) {
      materialPath {
          moveTo(10.293F, 11.0F)
          lineToRelative(3.853F, 3.854F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-13.0F, -13.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(4.293F, 5.0F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 5.0F, 2.0F, 5.224F, 2.0F, 5.5F)
          reflectiveCurveTo(2.224F, 6.0F, 2.5F, 6.0F)
          horizontalLineToRelative(2.793F)
          lineToRelative(4.0F, 4.0F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 10.0F, 2.0F, 10.224F, 2.0F, 10.5F)
          reflectiveCurveTo(2.224F, 11.0F, 2.5F, 11.0F)
          horizontalLineToRelative(7.793F)
          close()
          moveToRelative(1.828F, -1.0F)
          lineToRelative(1.0F, 1.0F)
          horizontalLineTo(13.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(13.776F, 10.0F, 13.5F, 10.0F)
          horizontalLineToRelative(-1.379F)
          close()
          moveToRelative(-5.0F, -5.0F)
          lineToRelative(1.0F, 1.0F)
          horizontalLineTo(13.5F)
          curveTo(13.776F, 6.0F, 14.0F, 5.776F, 14.0F, 5.5F)
          reflectiveCurveTo(13.776F, 5.0F, 13.5F, 5.0F)
          horizontalLineTo(7.121F)
          close()        
      }
    }
    return _equalOff16!!
  }

private var _equalOff16: ImageVector? = null
