package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowTrendingDown20: ImageVector
  get() {
    if (_arrowTrendingDown20 != null) {
      return _arrowTrendingDown20!!
    }
    _arrowTrendingDown20 = fluentIcon(name = "Regular.ArrowTrendingDown20", 20f) {
      materialPath {
          moveTo(17.962F, 14.691F)
          curveToRelative(-0.024F, 0.06F, -0.06F, 0.115F, -0.108F, 0.163F)
          reflectiveCurveToRelative(-0.104F, 0.084F, -0.163F, 0.108F)
          curveTo(17.632F, 14.986F, 17.568F, 15.0F, 17.5F, 15.0F)
          horizontalLineToRelative(-6.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          reflectiveCurveToRelative(0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(4.793F)
          lineTo(10.5F, 8.207F)
          lineToRelative(-2.146F, 2.147F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-5.5F, -5.5F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.195F, -0.195F, 0.511F, -0.195F, 0.707F, 0.0F)
          lineTo(8.0F, 9.293F)
          lineToRelative(2.146F, -2.146F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          lineTo(17.0F, 13.293F)
          verticalLineTo(8.5F)
          curveTo(17.0F, 8.224F, 17.224F, 8.0F, 17.5F, 8.0F)
          reflectiveCurveTo(18.0F, 8.224F, 18.0F, 8.5F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.068F, -0.014F, 0.132F, -0.038F, 0.191F)
          close()        
      }
    }
    return _arrowTrendingDown20!!
  }

private var _arrowTrendingDown20: ImageVector? = null
