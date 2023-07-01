package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowTrending12: ImageVector
  get() {
    if (_arrowTrending12 != null) {
      return _arrowTrending12!!
    }
    _arrowTrending12 = fluentIcon(name = "Regular.ArrowTrending12", 12f) {
      materialPath {
          moveTo(10.962F, 2.309F)
          curveToRelative(-0.024F, -0.06F, -0.06F, -0.115F, -0.108F, -0.163F)
          curveTo(10.806F, 2.1F, 10.75F, 2.063F, 10.69F, 2.038F)
          curveTo(10.632F, 2.014F, 10.568F, 2.0F, 10.5F, 2.0F)
          horizontalLineToRelative(-4.0F)
          curveTo(6.224F, 2.0F, 6.0F, 2.224F, 6.0F, 2.5F)
          reflectiveCurveTo(6.224F, 3.0F, 6.5F, 3.0F)
          horizontalLineToRelative(2.793F)
          lineTo(6.0F, 6.293F)
          lineTo(4.854F, 5.146F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineToRelative(-3.0F, 3.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.707F)
          curveToRelative(0.196F, 0.196F, 0.512F, 0.196F, 0.708F, 0.0F)
          lineTo(4.5F, 6.208F)
          lineToRelative(1.146F, 1.147F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineTo(10.0F, 3.707F)
          verticalLineTo(6.5F)
          curveTo(10.0F, 6.776F, 10.224F, 7.0F, 10.5F, 7.0F)
          reflectiveCurveTo(11.0F, 6.776F, 11.0F, 6.5F)
          verticalLineTo(2.497F)
          curveToRelative(0.0F, -0.067F, -0.014F, -0.13F, -0.038F, -0.188F)
          close()        
      }
    }
    return _arrowTrending12!!
  }

private var _arrowTrending12: ImageVector? = null
