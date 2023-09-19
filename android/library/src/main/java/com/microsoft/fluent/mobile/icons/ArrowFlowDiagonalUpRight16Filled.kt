package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowFlowDiagonalUpRight16: ImageVector
  get() {
    if (_arrowFlowDiagonalUpRight16 != null) {
      return _arrowFlowDiagonalUpRight16!!
    }
    _arrowFlowDiagonalUpRight16 = fluentIcon(name = "Filled.ArrowFlowDiagonalUpRight16", 16f) {
      materialPath {
          moveTo(8.5F, 3.0F)
          curveTo(8.224F, 3.0F, 8.0F, 3.224F, 8.0F, 3.5F)
          reflectiveCurveTo(8.224F, 4.0F, 8.5F, 4.0F)
          horizontalLineToRelative(2.793F)
          lineTo(5.879F, 9.414F)
          curveTo(5.484F, 9.152F, 5.009F, 9.0F, 4.5F, 9.0F)
          curveTo(3.12F, 9.0F, 2.0F, 10.12F, 2.0F, 11.5F)
          reflectiveCurveTo(3.12F, 14.0F, 4.5F, 14.0F)
          reflectiveCurveTo(7.0F, 12.88F, 7.0F, 11.5F)
          curveToRelative(0.0F, -0.51F, -0.152F, -0.983F, -0.414F, -1.379F)
          lineTo(12.0F, 4.707F)
          verticalLineTo(7.5F)
          curveTo(12.0F, 7.776F, 12.224F, 8.0F, 12.5F, 8.0F)
          reflectiveCurveTo(13.0F, 7.776F, 13.0F, 7.5F)
          verticalLineToRelative(-4.0F)
          curveTo(13.0F, 3.224F, 12.776F, 3.0F, 12.5F, 3.0F)
          horizontalLineToRelative(-4.0F)
          close()        
      }
    }
    return _arrowFlowDiagonalUpRight16!!
  }

private var _arrowFlowDiagonalUpRight16: ImageVector? = null
