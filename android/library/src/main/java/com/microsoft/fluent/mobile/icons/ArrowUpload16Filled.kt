package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowUpload16: ImageVector
  get() {
    if (_arrowUpload16 != null) {
      return _arrowUpload16!!
    }
    _arrowUpload16 = fluentIcon(name = "Filled.ArrowUpload16", 16f) {
      materialPath {
          moveTo(3.75F, 2.0F)
          curveTo(3.336F, 2.0F, 3.0F, 2.336F, 3.0F, 2.75F)
          reflectiveCurveTo(3.336F, 3.5F, 3.75F, 3.5F)
          horizontalLineToRelative(8.5F)
          curveTo(12.664F, 3.5F, 13.0F, 3.164F, 13.0F, 2.75F)
          reflectiveCurveTo(12.664F, 2.0F, 12.25F, 2.0F)
          horizontalLineToRelative(-8.5F)
          close()
          moveToRelative(4.78F, 2.72F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineTo(4.22F, 7.97F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(1.97F, -1.97F)
          verticalLineToRelative(6.19F)
          curveTo(7.25F, 13.664F, 7.586F, 14.0F, 8.0F, 14.0F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(7.06F)
          lineToRelative(1.97F, 1.97F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(8.53F, 4.72F)
          close()        
      }
    }
    return _arrowUpload16!!
  }

private var _arrowUpload16: ImageVector? = null
