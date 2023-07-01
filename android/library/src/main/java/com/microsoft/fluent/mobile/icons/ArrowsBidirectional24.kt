package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowsBidirectional24: ImageVector
  get() {
    if (_arrowsBidirectional24 != null) {
      return _arrowsBidirectional24!!
    }
    _arrowsBidirectional24 = fluentIcon(name = "Filled.ArrowsBidirectional24", 24f) {
      materialPath {
          moveTo(15.002F, 8.999F)
          horizontalLineTo(9.005F)
          verticalLineToRelative(-2.25F)
          curveToRelative(0.0F, -0.66F, -0.79F, -0.997F, -1.267F, -0.542F)
          lineToRelative(-5.504F, 5.25F)
          curveToRelative(-0.31F, 0.296F, -0.31F, 0.79F, 0.0F, 1.086F)
          lineToRelative(5.504F, 5.25F)
          lineToRelative(0.082F, 0.068F)
          curveToRelative(0.48F, 0.348F, 1.186F, 0.012F, 1.186F, -0.611F)
          lineTo(9.005F, 15.0F)
          horizontalLineToRelative(5.997F)
          verticalLineToRelative(2.25F)
          curveToRelative(0.0F, 0.66F, 0.791F, 0.998F, 1.268F, 0.542F)
          lineToRelative(5.497F, -5.25F)
          curveToRelative(0.31F, -0.295F, 0.31F, -0.79F, 0.0F, -1.085F)
          lineToRelative(-5.497F, -5.25F)
          curveToRelative(-0.477F, -0.456F, -1.268F, -0.117F, -1.268F, 0.543F)
          verticalLineToRelative(2.249F)
          close()        
      }
    }
    return _arrowsBidirectional24!!
  }

private var _arrowsBidirectional24: ImageVector? = null
