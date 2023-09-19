package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowMinimize20: ImageVector
  get() {
    if (_arrowMinimize20 != null) {
      return _arrowMinimize20!!
    }
    _arrowMinimize20 = fluentIcon(name = "Filled.ArrowMinimize20", 20f) {
      materialPath {
          moveTo(3.75F, 11.0F)
          horizontalLineToRelative(4.5F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineTo(9.0F, 11.75F)
          verticalLineToRelative(4.5F)
          curveTo(9.0F, 16.664F, 8.664F, 17.0F, 8.25F, 17.0F)
          curveToRelative(-0.38F, 0.0F, -0.694F, -0.282F, -0.743F, -0.648F)
          lineTo(7.5F, 16.25F)
          verticalLineToRelative(-2.69F)
          lineToRelative(-4.47F, 4.47F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.267F, -0.266F, -0.29F, -0.683F, -0.073F, -0.976F)
          lineTo(1.97F, 16.97F)
          lineToRelative(4.468F, -4.47F)
          horizontalLineTo(3.75F)
          curveToRelative(-0.38F, 0.0F, -0.693F, -0.282F, -0.743F, -0.648F)
          lineTo(3.0F, 11.75F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.694F, 0.648F, -0.743F)
          lineTo(3.75F, 11.0F)
          horizontalLineToRelative(4.5F)
          close()
          moveToRelative(14.28F, -9.03F)
          curveToRelative(0.267F, 0.266F, 0.29F, 0.683F, 0.073F, 0.976F)
          lineTo(18.03F, 3.03F)
          lineTo(13.06F, 8.0F)
          horizontalLineToRelative(3.19F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineTo(17.0F, 8.75F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.743F)
          lineTo(16.25F, 9.5F)
          horizontalLineToRelative(-5.0F)
          curveToRelative(-0.38F, 0.0F, -0.694F, -0.282F, -0.743F, -0.648F)
          lineTo(10.5F, 8.75F)
          verticalLineToRelative(-5.0F)
          curveTo(10.5F, 3.336F, 10.836F, 3.0F, 11.25F, 3.0F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineTo(12.0F, 3.75F)
          verticalLineToRelative(3.188F)
          lineToRelative(4.97F, -4.968F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          close()        
      }
    }
    return _arrowMinimize20!!
  }

private var _arrowMinimize20: ImageVector? = null
