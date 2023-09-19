package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LockClosed24: ImageVector
  get() {
    if (_lockClosed24 != null) {
      return _lockClosed24!!
    }
    _lockClosed24 = fluentIcon(name = "Filled.LockClosed24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, 1.79F, 4.0F, 4.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(2.5F)
          curveTo(19.328F, 8.0F, 20.0F, 8.672F, 20.0F, 9.5F)
          verticalLineToRelative(11.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-13.0F)
          curveTo(4.672F, 22.0F, 4.0F, 21.328F, 4.0F, 20.5F)
          verticalLineToRelative(-11.0F)
          curveTo(4.0F, 8.672F, 4.672F, 8.0F, 5.5F, 8.0F)
          horizontalLineTo(8.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -2.21F, 1.79F, -4.0F, 4.0F, -4.0F)
          close()
          moveToRelative(0.0F, 11.5F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          reflectiveCurveToRelative(0.672F, 1.5F, 1.5F, 1.5F)
          curveToRelative(0.829F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveToRelative(-0.671F, -1.5F, -1.5F, -1.5F)
          close()
          moveTo(12.0F, 4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(4.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          close()        
      }
    }
    return _lockClosed24!!
  }

private var _lockClosed24: ImageVector? = null
