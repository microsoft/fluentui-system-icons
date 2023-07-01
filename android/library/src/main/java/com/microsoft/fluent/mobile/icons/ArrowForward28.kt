package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowForward28: ImageVector
  get() {
    if (_arrowForward28 != null) {
      return _arrowForward28!!
    }
    _arrowForward28 = fluentIcon(name = "Regular.ArrowForward28", 28f) {
      materialPath {
          moveTo(17.97F, 6.53F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(5.75F, 5.75F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-5.75F, 5.75F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(4.47F, -4.47F)
          horizontalLineToRelative(-8.69F)
          curveToRelative(-5.109F, 0.0F, -9.25F, 4.141F, -9.25F, 9.25F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(3.0F, 22.164F, 3.0F, 21.75F)
          curveTo(3.0F, 15.813F, 7.813F, 11.0F, 13.75F, 11.0F)
          horizontalLineToRelative(8.69F)
          lineToRelative(-4.47F, -4.47F)
          close()        
      }
    }
    return _arrowForward28!!
  }

private var _arrowForward28: ImageVector? = null
