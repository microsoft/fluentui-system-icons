package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowDown16: ImageVector
  get() {
    if (_arrowDown16 != null) {
      return _arrowDown16!!
    }
    _arrowDown16 = fluentIcon(name = "Regular.ArrowDown16", 16f) {
      materialPath {
          moveTo(8.5F, 2.5F)
          curveTo(8.5F, 2.224F, 8.276F, 2.0F, 8.0F, 2.0F)
          reflectiveCurveTo(7.5F, 2.224F, 7.5F, 2.5F)
          verticalLineToRelative(9.697F)
          lineTo(3.872F, 8.166F)
          curveTo(3.687F, 7.96F, 3.37F, 7.943F, 3.166F, 8.127F)
          curveTo(2.96F, 8.313F, 2.944F, 8.63F, 3.128F, 8.835F)
          lineToRelative(4.5F, 5.0F)
          curveTo(7.723F, 13.94F, 7.858F, 14.0F, 8.0F, 14.0F)
          reflectiveCurveToRelative(0.277F, -0.06F, 0.372F, -0.165F)
          lineToRelative(4.5F, -5.0F)
          curveToRelative(0.184F, -0.206F, 0.168F, -0.522F, -0.037F, -0.707F)
          curveToRelative(-0.206F, -0.184F, -0.522F, -0.168F, -0.707F, 0.037F)
          lineTo(8.5F, 12.197F)
          verticalLineTo(2.5F)
          close()        
      }
    }
    return _arrowDown16!!
  }

private var _arrowDown16: ImageVector? = null
