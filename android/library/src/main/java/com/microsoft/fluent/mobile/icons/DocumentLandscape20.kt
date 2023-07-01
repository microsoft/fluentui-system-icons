package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DocumentLandscape20: ImageVector
  get() {
    if (_documentLandscape20 != null) {
      return _documentLandscape20!!
    }
    _documentLandscape20 = fluentIcon(name = "Regular.DocumentLandscape20", 20f) {
      materialPath {
          moveTo(18.0F, 14.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(8.586F)
          curveToRelative(0.398F, 0.0F, 0.78F, 0.158F, 1.06F, 0.44F)
          lineToRelative(3.915F, 3.913F)
          curveTo(17.842F, 8.636F, 18.0F, 9.017F, 18.0F, 9.415F)
          verticalLineTo(14.0F)
          close()
          moveToRelative(-2.0F, 1.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineToRelative(-4.0F)
          horizontalLineToRelative(-3.5F)
          curveTo(12.672F, 10.0F, 12.0F, 9.328F, 12.0F, 8.5F)
          verticalLineTo(5.0F)
          horizontalLineTo(4.0F)
          curveTo(3.448F, 5.0F, 3.0F, 5.448F, 3.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(12.0F)
          close()
          moveToRelative(-3.0F, -9.793F)
          verticalLineTo(8.5F)
          curveTo(13.0F, 8.776F, 13.224F, 9.0F, 13.5F, 9.0F)
          horizontalLineToRelative(3.293F)
          lineTo(13.0F, 5.207F)
          close()        
      }
    }
    return _documentLandscape20!!
  }

private var _documentLandscape20: ImageVector? = null
