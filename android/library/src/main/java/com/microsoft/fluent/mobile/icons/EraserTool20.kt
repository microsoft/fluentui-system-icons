package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.EraserTool20: ImageVector
  get() {
    if (_eraserTool20 != null) {
      return _eraserTool20!!
    }
    _eraserTool20 = fluentIcon(name = "Regular.EraserTool20", 20f) {
      materialPath {
          moveTo(3.5F, 2.0F)
          curveTo(3.776F, 2.0F, 4.0F, 2.224F, 4.0F, 2.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(12.0F)
          verticalLineTo(2.5F)
          curveTo(16.0F, 2.224F, 16.224F, 2.0F, 16.5F, 2.0F)
          reflectiveCurveTo(17.0F, 2.224F, 17.0F, 2.5F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 1.933F, -1.567F, 3.5F, -3.5F, 3.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(4.567F, 18.0F, 3.0F, 16.433F, 3.0F, 14.5F)
          verticalLineToRelative(-12.0F)
          curveTo(3.0F, 2.224F, 3.224F, 2.0F, 3.5F, 2.0F)
          close()
          moveTo(4.0F, 11.0F)
          verticalLineToRelative(3.5F)
          curveTo(4.0F, 15.88F, 5.12F, 17.0F, 6.5F, 17.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(11.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(12.0F, -1.0F)
          verticalLineTo(7.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(12.0F)
          close()        
      }
    }
    return _eraserTool20!!
  }

private var _eraserTool20: ImageVector? = null
