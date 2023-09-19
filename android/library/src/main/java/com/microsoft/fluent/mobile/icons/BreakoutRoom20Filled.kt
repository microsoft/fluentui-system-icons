package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BreakoutRoom20: ImageVector
  get() {
    if (_breakoutRoom20 != null) {
      return _breakoutRoom20!!
    }
    _breakoutRoom20 = fluentIcon(name = "Filled.BreakoutRoom20", 20f) {
      materialPath {
          moveTo(3.0F, 6.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineToRelative(-3.354F)
          curveTo(11.476F, 16.267F, 12.0F, 15.195F, 12.0F, 14.0F)
          verticalLineToRelative(-2.0F)
          curveToRelative(0.0F, -2.21F, -1.79F, -4.0F, -4.0F, -4.0F)
          horizontalLineTo(6.0F)
          curveTo(4.805F, 8.0F, 3.733F, 8.524F, 3.0F, 9.354F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(3.0F, 3.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, 1.343F, -3.0F, 3.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineToRelative(-2.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(6.0F)
          close()        
      }
    }
    return _breakoutRoom20!!
  }

private var _breakoutRoom20: ImageVector? = null
