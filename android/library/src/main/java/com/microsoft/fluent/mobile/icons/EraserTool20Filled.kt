package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.EraserTool20: ImageVector
  get() {
    if (_eraserTool20 != null) {
      return _eraserTool20!!
    }
    _eraserTool20 = fluentIcon(name = "Filled.EraserTool20", 20f) {
      materialPath {
          moveTo(4.0F, 2.5F)
          curveTo(4.0F, 2.224F, 3.776F, 2.0F, 3.5F, 2.0F)
          reflectiveCurveTo(3.0F, 2.224F, 3.0F, 2.5F)
          verticalLineToRelative(12.0F)
          curveTo(3.0F, 16.433F, 4.567F, 18.0F, 6.5F, 18.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineToRelative(-12.0F)
          curveTo(17.0F, 2.224F, 16.776F, 2.0F, 16.5F, 2.0F)
          reflectiveCurveTo(16.0F, 2.224F, 16.0F, 2.5F)
          verticalLineTo(6.0F)
          horizontalLineTo(4.0F)
          verticalLineTo(2.5F)
          close()
          moveTo(4.0F, 10.0F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(12.0F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(4.0F)
          close()        
      }
    }
    return _eraserTool20!!
  }

private var _eraserTool20: ImageVector? = null
