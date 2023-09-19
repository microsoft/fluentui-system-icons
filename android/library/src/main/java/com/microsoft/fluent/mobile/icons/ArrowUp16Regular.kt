package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowUp16: ImageVector
  get() {
    if (_arrowUp16 != null) {
      return _arrowUp16!!
    }
    _arrowUp16 = fluentIcon(name = "Regular.ArrowUp16", 16f) {
      materialPath {
          moveTo(7.5F, 13.5F)
          curveTo(7.5F, 13.776F, 7.724F, 14.0F, 8.0F, 14.0F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(3.803F)
          lineToRelative(3.628F, 4.032F)
          curveToRelative(0.185F, 0.205F, 0.501F, 0.221F, 0.707F, 0.037F)
          curveToRelative(0.205F, -0.185F, 0.221F, -0.501F, 0.037F, -0.707F)
          lineToRelative(-4.5F, -5.0F)
          curveTo(8.277F, 2.06F, 8.142F, 2.0F, 8.0F, 2.0F)
          reflectiveCurveTo(7.723F, 2.06F, 7.628F, 2.166F)
          lineToRelative(-4.5F, 5.0F)
          curveTo(2.944F, 7.37F, 2.96F, 7.685F, 3.166F, 7.871F)
          curveTo(3.37F, 8.056F, 3.686F, 8.04F, 3.872F, 7.835F)
          lineTo(7.5F, 3.803F)
          verticalLineTo(13.5F)
          close()        
      }
    }
    return _arrowUp16!!
  }

private var _arrowUp16: ImageVector? = null
