package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DataHistogram20: ImageVector
  get() {
    if (_dataHistogram20 != null) {
      return _dataHistogram20!!
    }
    _dataHistogram20 = fluentIcon(name = "Filled.DataHistogram20", 20f) {
      materialPath {
          moveTo(12.0F, 4.5F)
          curveTo(12.0F, 3.672F, 11.328F, 3.0F, 10.5F, 3.0F)
          horizontalLineToRelative(-1.0F)
          curveTo(8.672F, 3.0F, 8.0F, 3.672F, 8.0F, 4.5F)
          verticalLineTo(17.0F)
          horizontalLineToRelative(4.0F)
          verticalLineTo(4.5F)
          close()
          moveTo(13.0F, 6.0F)
          verticalLineToRelative(11.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineToRelative(-2.0F)
          close()
          moveTo(5.0F, 9.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(8.0F)
          horizontalLineTo(3.5F)
          curveTo(3.224F, 17.0F, 3.0F, 16.776F, 3.0F, 16.5F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          close()        
      }
    }
    return _dataHistogram20!!
  }

private var _dataHistogram20: ImageVector? = null
