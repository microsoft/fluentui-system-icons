package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentLandscapeSplit20: ImageVector
  get() {
    if (_documentLandscapeSplit20 != null) {
      return _documentLandscapeSplit20!!
    }
    _documentLandscapeSplit20 = fluentIcon(name = "Filled.DocumentLandscapeSplit20", 20f) {
      materialPath {
          moveTo(12.0F, 8.5F)
          verticalLineTo(4.0F)
          horizontalLineToRelative(-2.0F)
          verticalLineToRelative(12.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineToRelative(-4.0F)
          horizontalLineToRelative(-4.5F)
          curveTo(12.672F, 10.0F, 12.0F, 9.328F, 12.0F, 8.5F)
          close()
          moveTo(9.0F, 16.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(12.0F)
          close()
          moveToRelative(4.0F, -7.5F)
          verticalLineTo(4.058F)
          curveToRelative(0.242F, 0.07F, 0.465F, 0.2F, 0.646F, 0.381F)
          lineToRelative(3.915F, 3.915F)
          curveToRelative(0.181F, 0.18F, 0.311F, 0.404F, 0.38F, 0.646F)
          horizontalLineTo(13.5F)
          curveTo(13.224F, 9.0F, 13.0F, 8.776F, 13.0F, 8.5F)
          close()        
      }
    }
    return _documentLandscapeSplit20!!
  }

private var _documentLandscapeSplit20: ImageVector? = null
