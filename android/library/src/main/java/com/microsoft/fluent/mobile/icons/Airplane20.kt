package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Airplane20: ImageVector
  get() {
    if (_airplane20 != null) {
      return _airplane20!!
    }
    _airplane20 = fluentIcon(name = "Filled.Airplane20", 20f) {
      materialPath {
          moveTo(9.0F, 2.0F)
          curveToRelative(0.607F, 0.0F, 1.157F, 0.36F, 1.4F, 0.916F)
          lineToRelative(2.368F, 5.41F)
          lineToRelative(3.236F, -0.201F)
          curveToRelative(1.036F, -0.065F, 1.928F, 0.722F, 1.992F, 1.758F)
          lineTo(18.0F, 10.0F)
          curveToRelative(0.0F, 1.038F, -0.841F, 1.879F, -1.879F, 1.879F)
          lineToRelative(-0.117F, -0.004F)
          lineToRelative(-3.236F, -0.202F)
          lineToRelative(-2.367F, 5.41F)
          curveTo(10.157F, 17.64F, 9.608F, 18.0F, 9.0F, 18.0F)
          curveToRelative(-0.488F, 0.0F, -0.883F, -0.395F, -0.883F, -0.883F)
          lineToRelative(0.002F, -0.055F)
          lineToRelative(0.703F, -5.636F)
          lineToRelative(-2.458F, -0.154F)
          lineToRelative(-1.14F, 2.28F)
          curveTo(5.087F, 13.828F, 4.806F, 14.0F, 4.5F, 14.0F)
          curveTo(4.224F, 14.0F, 4.0F, 13.776F, 4.0F, 13.5F)
          verticalLineToRelative(-2.376F)
          lineToRelative(-1.062F, -0.065F)
          curveTo(2.41F, 11.026F, 2.0F, 10.589F, 2.0F, 10.06F)
          verticalLineTo(9.94F)
          curveToRelative(0.0F, -0.53F, 0.41F, -0.966F, 0.938F, -1.0F)
          lineTo(4.0F, 8.875F)
          verticalLineTo(6.5F)
          curveTo(4.0F, 6.224F, 4.224F, 6.0F, 4.5F, 6.0F)
          curveToRelative(0.306F, 0.0F, 0.587F, 0.173F, 0.724F, 0.447F)
          lineToRelative(1.139F, 2.28F)
          lineToRelative(2.459F, -0.154F)
          lineToRelative(-0.698F, -5.58F)
          curveTo(8.064F, 2.508F, 8.407F, 2.066F, 8.89F, 2.006F)
          curveTo(8.928F, 2.002F, 8.963F, 2.0F, 9.0F, 2.0F)
          close()        
      }
    }
    return _airplane20!!
  }

private var _airplane20: ImageVector? = null
