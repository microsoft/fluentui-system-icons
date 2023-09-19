package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Maximize48: ImageVector
  get() {
    if (_maximize48 != null) {
      return _maximize48!!
    }
    _maximize48 = fluentIcon(name = "Filled.Maximize48", 48f) {
      materialPath {
          moveTo(6.0F, 11.5F)
          curveTo(6.0F, 8.462F, 8.462F, 6.0F, 11.5F, 6.0F)
          horizontalLineToRelative(25.0F)
          curveToRelative(3.038F, 0.0F, 5.5F, 2.462F, 5.5F, 5.5F)
          verticalLineToRelative(25.0F)
          curveToRelative(0.0F, 3.038F, -2.462F, 5.5F, -5.5F, 5.5F)
          horizontalLineToRelative(-25.0F)
          curveTo(8.462F, 42.0F, 6.0F, 39.538F, 6.0F, 36.5F)
          verticalLineToRelative(-25.0F)
          close()
          moveTo(11.5F, 9.0F)
          curveTo(10.12F, 9.0F, 9.0F, 10.12F, 9.0F, 11.5F)
          verticalLineToRelative(25.0F)
          curveToRelative(0.0F, 1.38F, 1.12F, 2.5F, 2.5F, 2.5F)
          horizontalLineToRelative(25.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-25.0F)
          curveToRelative(0.0F, -1.38F, -1.12F, -2.5F, -2.5F, -2.5F)
          horizontalLineToRelative(-25.0F)
          close()        
      }
    }
    return _maximize48!!
  }

private var _maximize48: ImageVector? = null
