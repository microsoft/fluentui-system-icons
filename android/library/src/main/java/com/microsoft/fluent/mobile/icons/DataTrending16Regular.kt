package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DataTrending16: ImageVector
  get() {
    if (_dataTrending16 != null) {
      return _dataTrending16!!
    }
    _dataTrending16 = fluentIcon(name = "Regular.DataTrending16", 16f) {
      materialPath {
          moveTo(3.0F, 2.5F)
          curveTo(3.0F, 2.224F, 2.776F, 2.0F, 2.5F, 2.0F)
          reflectiveCurveTo(2.0F, 2.224F, 2.0F, 2.5F)
          verticalLineToRelative(9.0F)
          curveTo(2.0F, 12.88F, 3.12F, 14.0F, 4.5F, 14.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(13.776F, 13.0F, 13.5F, 13.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(3.672F, 13.0F, 3.0F, 12.328F, 3.0F, 11.5F)
          verticalLineToRelative(-9.0F)
          close()
          moveToRelative(7.0F, 2.0F)
          curveTo(10.0F, 4.776F, 10.224F, 5.0F, 10.5F, 5.0F)
          horizontalLineToRelative(1.793F)
          lineTo(9.0F, 8.293F)
          lineTo(7.354F, 6.647F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          lineToRelative(-2.5F, 2.5F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineTo(7.0F, 7.707F)
          lineToRelative(1.646F, 1.647F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.707F, 0.0F)
          lineTo(13.0F, 5.707F)
          verticalLineToRelative(1.87F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(4.5F)
          curveTo(14.0F, 4.224F, 13.776F, 4.0F, 13.5F, 4.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(10.224F, 4.0F, 10.0F, 4.224F, 10.0F, 4.5F)
          close()        
      }
    }
    return _dataTrending16!!
  }

private var _dataTrending16: ImageVector? = null
