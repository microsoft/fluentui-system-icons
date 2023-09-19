package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowSort16: ImageVector
  get() {
    if (_arrowSort16 != null) {
      return _arrowSort16!!
    }
    _arrowSort16 = fluentIcon(name = "Filled.ArrowSort16", 16f) {
      materialPath {
          moveTo(10.73F, 13.79F)
          curveToRelative(0.29F, 0.28F, 0.75F, 0.28F, 1.04F, 0.0F)
          lineToRelative(2.75F, -2.65F)
          curveToRelative(0.299F, -0.288F, 0.308F, -0.762F, 0.02F, -1.06F)
          curveToRelative(-0.287F, -0.299F, -0.762F, -0.308F, -1.06F, -0.02F)
          lineTo(12.0F, 11.486F)
          verticalLineTo(2.75F)
          curveTo(12.0F, 2.336F, 11.664F, 2.0F, 11.25F, 2.0F)
          reflectiveCurveTo(10.5F, 2.336F, 10.5F, 2.75F)
          verticalLineToRelative(8.736F)
          lineTo(9.02F, 10.06F)
          curveToRelative(-0.298F, -0.288F, -0.773F, -0.28F, -1.06F, 0.02F)
          curveToRelative(-0.287F, 0.298F, -0.279F, 0.772F, 0.02F, 1.06F)
          lineToRelative(2.75F, 2.65F)
          close()
          moveTo(5.28F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineTo(1.47F, 4.97F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineTo(4.0F, 4.56F)
          verticalLineToRelative(8.69F)
          curveTo(4.0F, 13.664F, 4.336F, 14.0F, 4.75F, 14.0F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(4.56F)
          lineToRelative(1.47F, 1.47F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(5.28F, 2.22F)
          close()        
      }
    }
    return _arrowSort16!!
  }

private var _arrowSort16: ImageVector? = null
