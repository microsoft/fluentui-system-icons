package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowSort16: ImageVector
  get() {
    if (_arrowSort16 != null) {
      return _arrowSort16!!
    }
    _arrowSort16 = fluentIcon(name = "Regular.ArrowSort16", 16f) {
      materialPath {
          moveTo(4.854F, 2.147F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          lineToRelative(-3.0F, 3.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineTo(4.0F, 3.707F)
          verticalLineTo(13.5F)
          curveTo(4.0F, 13.776F, 4.224F, 14.0F, 4.5F, 14.0F)
          reflectiveCurveTo(5.0F, 13.776F, 5.0F, 13.5F)
          verticalLineTo(3.707F)
          lineToRelative(2.146F, 2.147F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-3.0F, -3.0F)
          close()
          moveToRelative(6.298F, 11.713F)
          curveToRelative(0.194F, 0.187F, 0.502F, 0.187F, 0.696F, 0.0F)
          lineToRelative(3.0F, -2.9F)
          curveToRelative(0.198F, -0.193F, 0.203F, -0.51F, 0.011F, -0.708F)
          curveToRelative(-0.191F, -0.198F, -0.508F, -0.204F, -0.707F, -0.012F)
          lineTo(12.0F, 12.321F)
          verticalLineToRelative(-9.82F)
          curveTo(12.0F, 2.223F, 11.776F, 2.0F, 11.5F, 2.0F)
          reflectiveCurveTo(11.0F, 2.223F, 11.0F, 2.5F)
          verticalLineToRelative(9.82F)
          lineToRelative(-2.152F, -2.08F)
          curveToRelative(-0.199F, -0.192F, -0.516F, -0.187F, -0.708F, 0.011F)
          curveToRelative(-0.191F, 0.199F, -0.186F, 0.515F, 0.012F, 0.707F)
          lineToRelative(3.0F, 2.9F)
          close()        
      }
    }
    return _arrowSort16!!
  }

private var _arrowSort16: ImageVector? = null
