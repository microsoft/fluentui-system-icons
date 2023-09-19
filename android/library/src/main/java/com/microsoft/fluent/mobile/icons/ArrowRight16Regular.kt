package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowRight16: ImageVector
  get() {
    if (_arrowRight16 != null) {
      return _arrowRight16!!
    }
    _arrowRight16 = fluentIcon(name = "Regular.ArrowRight16", 16f) {
      materialPath {
          moveTo(2.5F, 7.5F)
          curveTo(2.224F, 7.5F, 2.0F, 7.724F, 2.0F, 8.0F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(9.697F)
          lineToRelative(-4.031F, 3.628F)
          curveToRelative(-0.206F, 0.185F, -0.222F, 0.501F, -0.038F, 0.707F)
          curveToRelative(0.185F, 0.205F, 0.501F, 0.221F, 0.707F, 0.037F)
          lineToRelative(5.0F, -4.5F)
          curveTo(13.94F, 8.277F, 14.0F, 8.142F, 14.0F, 8.0F)
          reflectiveCurveToRelative(-0.06F, -0.277F, -0.165F, -0.372F)
          lineToRelative(-5.0F, -4.5F)
          curveTo(8.629F, 2.944F, 8.313F, 2.96F, 8.127F, 3.166F)
          curveTo(7.944F, 3.37F, 7.96F, 3.686F, 8.165F, 3.872F)
          lineTo(12.197F, 7.5F)
          horizontalLineTo(2.5F)
          close()        
      }
    }
    return _arrowRight16!!
  }

private var _arrowRight16: ImageVector? = null
