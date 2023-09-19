package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentLandscape20: ImageVector
  get() {
    if (_documentLandscape20 != null) {
      return _documentLandscape20!!
    }
    _documentLandscape20 = fluentIcon(name = "Filled.DocumentLandscape20", 20f) {
      materialPath {
          moveTo(18.0F, 10.0F)
          horizontalLineToRelative(-4.5F)
          curveTo(12.672F, 10.0F, 12.0F, 9.328F, 12.0F, 8.5F)
          verticalLineTo(4.0F)
          horizontalLineTo(3.5F)
          curveTo(2.672F, 4.0F, 2.0F, 4.672F, 2.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveTo(2.0F, 15.328F, 2.672F, 16.0F, 3.5F, 16.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(10.0F)
          close()
          moveToRelative(-0.25F, -1.0F)
          horizontalLineTo(13.5F)
          curveTo(13.224F, 9.0F, 13.0F, 8.776F, 13.0F, 8.5F)
          verticalLineTo(4.25F)
          lineTo(17.75F, 9.0F)
          close()        
      }
    }
    return _documentLandscape20!!
  }

private var _documentLandscape20: ImageVector? = null
