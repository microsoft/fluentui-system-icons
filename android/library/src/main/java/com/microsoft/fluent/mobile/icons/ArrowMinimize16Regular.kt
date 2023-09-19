package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowMinimize16: ImageVector
  get() {
    if (_arrowMinimize16 != null) {
      return _arrowMinimize16!!
    }
    _arrowMinimize16 = fluentIcon(name = "Regular.ArrowMinimize16", 16f) {
      materialPath {
          moveTo(13.854F, 2.853F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.511F, 0.0F, -0.707F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineTo(10.0F, 5.293F)
          verticalLineTo(3.5F)
          curveTo(10.0F, 3.224F, 9.776F, 3.0F, 9.5F, 3.0F)
          reflectiveCurveTo(9.0F, 3.224F, 9.0F, 3.5F)
          verticalLineToRelative(2.9F)
          curveTo(9.0F, 6.731F, 9.269F, 7.0F, 9.6F, 7.0F)
          horizontalLineToRelative(2.9F)
          curveTo(12.776F, 7.0F, 13.0F, 6.776F, 13.0F, 6.5F)
          reflectiveCurveTo(12.776F, 6.0F, 12.5F, 6.0F)
          horizontalLineToRelative(-1.793F)
          lineToRelative(3.147F, -3.147F)
          close()
          moveTo(6.5F, 13.0F)
          curveTo(6.224F, 13.0F, 6.0F, 12.776F, 6.0F, 12.5F)
          verticalLineToRelative(-1.793F)
          lineToRelative(-3.147F, 3.147F)
          curveToRelative(-0.195F, 0.195F, -0.511F, 0.195F, -0.707F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(5.293F, 10.0F)
          horizontalLineTo(3.5F)
          curveTo(3.224F, 10.0F, 3.0F, 9.776F, 3.0F, 9.5F)
          reflectiveCurveTo(3.224F, 9.0F, 3.5F, 9.0F)
          horizontalLineToRelative(2.9F)
          curveTo(6.731F, 9.0F, 7.0F, 9.269F, 7.0F, 9.6F)
          verticalLineToRelative(2.9F)
          curveTo(7.0F, 12.776F, 6.776F, 13.0F, 6.5F, 13.0F)
          close()        
      }
    }
    return _arrowMinimize16!!
  }

private var _arrowMinimize16: ImageVector? = null
