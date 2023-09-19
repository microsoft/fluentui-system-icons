package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowNext20: ImageVector
  get() {
    if (_arrowNext20 != null) {
      return _arrowNext20!!
    }
    _arrowNext20 = fluentIcon(name = "Filled.ArrowNext20", 20f) {
      materialPath {
          moveTo(13.75F, 4.75F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineTo(14.5F, 5.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          curveToRelative(-0.38F, 0.0F, -0.694F, -0.282F, -0.743F, -0.648F)
          lineTo(13.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          close()
          moveTo(5.47F, 4.97F)
          curveToRelative(0.266F, -0.267F, 0.683F, -0.29F, 0.976F, -0.073F)
          lineTo(6.53F, 4.97F)
          lineToRelative(4.5F, 4.5F)
          curveToRelative(0.267F, 0.266F, 0.29F, 0.683F, 0.073F, 0.976F)
          lineTo(11.03F, 10.53F)
          lineToRelative(-4.5F, 4.5F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.267F, -0.266F, -0.29F, -0.683F, -0.073F, -0.976F)
          lineTo(5.47F, 13.97F)
          lineTo(9.44F, 10.0F)
          lineTo(5.47F, 6.03F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          close()        
      }
    }
    return _arrowNext20!!
  }

private var _arrowNext20: ImageVector? = null
