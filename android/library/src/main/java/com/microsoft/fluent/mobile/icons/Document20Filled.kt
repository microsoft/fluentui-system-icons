package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Document20: ImageVector
  get() {
    if (_document20 != null) {
      return _document20!!
    }
    _document20 = fluentIcon(name = "Filled.Document20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          verticalLineToRelative(4.5F)
          curveTo(10.0F, 7.328F, 10.672F, 8.0F, 11.5F, 8.0F)
          horizontalLineTo(16.0F)
          verticalLineToRelative(8.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.672F, 18.0F, 4.0F, 17.328F, 4.0F, 16.5F)
          verticalLineToRelative(-13.0F)
          curveTo(4.0F, 2.672F, 4.672F, 2.0F, 5.5F, 2.0F)
          horizontalLineTo(10.0F)
          close()
          moveToRelative(1.0F, 0.25F)
          verticalLineTo(6.5F)
          curveTo(11.0F, 6.776F, 11.224F, 7.0F, 11.5F, 7.0F)
          horizontalLineToRelative(4.25F)
          lineTo(11.0F, 2.25F)
          close()        
      }
    }
    return _document20!!
  }

private var _document20: ImageVector? = null
