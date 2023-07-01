package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowTrending20: ImageVector
  get() {
    if (_arrowTrending20 != null) {
      return _arrowTrending20!!
    }
    _arrowTrending20 = fluentIcon(name = "Regular.ArrowTrending20", 20f) {
      materialPath {
          moveTo(17.962F, 5.309F)
          curveToRelative(-0.024F, -0.06F, -0.06F, -0.115F, -0.108F, -0.163F)
          reflectiveCurveTo(17.75F, 5.063F, 17.69F, 5.038F)
          curveTo(17.632F, 5.013F, 17.568F, 5.0F, 17.5F, 5.0F)
          horizontalLineToRelative(-6.0F)
          curveTo(11.224F, 5.0F, 11.0F, 5.224F, 11.0F, 5.5F)
          reflectiveCurveTo(11.224F, 6.0F, 11.5F, 6.0F)
          horizontalLineToRelative(4.793F)
          lineTo(10.5F, 11.793F)
          lineTo(8.354F, 9.647F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.707F, 0.0F)
          lineToRelative(-5.5F, 5.5F)
          curveToRelative(-0.196F, 0.195F, -0.196F, 0.511F, 0.0F, 0.707F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineTo(8.0F, 10.707F)
          lineToRelative(2.146F, 2.147F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineTo(17.0F, 6.707F)
          verticalLineTo(11.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-6.0F)
          curveToRelative(0.0F, -0.068F, -0.014F, -0.132F, -0.038F, -0.191F)
          close()        
      }
    }
    return _arrowTrending20!!
  }

private var _arrowTrending20: ImageVector? = null
