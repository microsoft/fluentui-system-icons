package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowPrevious20: ImageVector
  get() {
    if (_arrowPrevious20 != null) {
      return _arrowPrevious20!!
    }
    _arrowPrevious20 = fluentIcon(name = "Filled.ArrowPrevious20", 20f) {
      materialPath {
          moveTo(6.0F, 4.75F)
          curveToRelative(-0.38F, 0.0F, -0.694F, 0.282F, -0.743F, 0.648F)
          lineTo(5.25F, 5.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          curveToRelative(0.38F, 0.0F, 0.694F, -0.282F, 0.743F, -0.648F)
          lineTo(6.75F, 14.5F)
          verticalLineToRelative(-9.0F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          close()
          moveToRelative(8.28F, 0.22F)
          curveToRelative(-0.266F, -0.267F, -0.683F, -0.29F, -0.976F, -0.073F)
          lineTo(13.22F, 4.97F)
          lineToRelative(-4.5F, 4.5F)
          curveToRelative(-0.267F, 0.266F, -0.29F, 0.683F, -0.073F, 0.976F)
          lineTo(8.72F, 10.53F)
          lineToRelative(4.5F, 4.5F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.267F, -0.266F, 0.29F, -0.683F, 0.073F, -0.976F)
          lineTo(14.28F, 13.97F)
          lineTo(10.31F, 10.0F)
          lineToRelative(3.97F, -3.97F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          close()        
      }
    }
    return _arrowPrevious20!!
  }

private var _arrowPrevious20: ImageVector? = null
