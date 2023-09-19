package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowLeft16: ImageVector
  get() {
    if (_arrowLeft16 != null) {
      return _arrowLeft16!!
    }
    _arrowLeft16 = fluentIcon(name = "Regular.ArrowLeft16", 16f) {
      materialPath {
          moveTo(13.5F, 8.5F)
          curveTo(13.776F, 8.5F, 14.0F, 8.276F, 14.0F, 8.0F)
          reflectiveCurveToRelative(-0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineTo(3.803F)
          lineToRelative(4.032F, -3.628F)
          curveTo(8.04F, 3.687F, 8.056F, 3.37F, 7.872F, 3.166F)
          curveTo(7.687F, 2.96F, 7.37F, 2.944F, 7.165F, 3.128F)
          lineToRelative(-5.0F, 4.5F)
          curveTo(2.06F, 7.723F, 2.0F, 7.858F, 2.0F, 8.0F)
          reflectiveCurveToRelative(0.06F, 0.277F, 0.166F, 0.372F)
          lineToRelative(5.0F, 4.5F)
          curveToRelative(0.205F, 0.184F, 0.52F, 0.168F, 0.706F, -0.037F)
          curveToRelative(0.184F, -0.206F, 0.168F, -0.522F, -0.037F, -0.707F)
          lineTo(3.803F, 8.5F)
          horizontalLineTo(13.5F)
          close()        
      }
    }
    return _arrowLeft16!!
  }

private var _arrowLeft16: ImageVector? = null
