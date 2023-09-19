package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DataPie24: ImageVector
  get() {
    if (_dataPie24 != null) {
      return _dataPie24!!
    }
    _dataPie24 = fluentIcon(name = "Regular.DataPie24", 24f) {
      materialPath {
          moveTo(10.25F, 4.25F)
          curveTo(10.664F, 4.25F, 11.0F, 4.586F, 11.0F, 5.0F)
          verticalLineToRelative(8.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineToRelative(0.007F, 0.102F)
          curveToRelative(0.0F, 4.97F, -4.03F, 8.5F, -9.0F, 8.5F)
          reflectiveCurveToRelative(-9.0F, -4.03F, -9.0F, -9.0F)
          reflectiveCurveToRelative(3.53F, -9.0F, 8.5F, -9.0F)
          close()
          moveTo(9.5F, 5.787F)
          lineTo(9.291F, 5.811F)
          curveTo(5.601F, 6.28F, 3.25F, 9.433F, 3.25F, 13.25F)
          curveToRelative(0.0F, 4.142F, 3.358F, 7.5F, 7.5F, 7.5F)
          curveToRelative(3.817F, 0.0F, 6.968F, -2.352F, 7.44F, -6.041F)
          lineToRelative(0.022F, -0.209F)
          horizontalLineTo(10.25F)
          curveToRelative(-0.38F, 0.0F, -0.694F, -0.282F, -0.743F, -0.648F)
          lineTo(9.5F, 13.75F)
          verticalLineTo(5.787F)
          close()
          moveToRelative(3.75F, -4.037F)
          curveToRelative(4.97F, 0.0F, 9.0F, 4.03F, 9.0F, 9.0F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-8.25F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(2.5F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          close()
          moveTo(14.0F, 3.287F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(6.712F)
          lineToRelative(-0.023F, -0.209F)
          curveToRelative(-0.43F, -3.375F, -3.105F, -6.05F, -6.48F, -6.48F)
          lineTo(14.0F, 3.287F)
          close()        
      }
    }
    return _dataPie24!!
  }

private var _dataPie24: ImageVector? = null
