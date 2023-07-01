package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Document16: ImageVector
  get() {
    if (_document16 != null) {
      return _document16!!
    }
    _document16 = fluentIcon(name = "Filled.Document16", 16f) {
      materialPath {
          moveTo(8.0F, 1.0F)
          verticalLineToRelative(3.5F)
          curveTo(8.0F, 5.328F, 8.672F, 6.0F, 9.5F, 6.0F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.672F, 15.0F, 3.0F, 14.328F, 3.0F, 13.5F)
          verticalLineToRelative(-11.0F)
          curveTo(3.0F, 1.672F, 3.672F, 1.0F, 4.5F, 1.0F)
          horizontalLineTo(8.0F)
          close()
          moveToRelative(1.0F, 0.25F)
          verticalLineTo(4.5F)
          curveTo(9.0F, 4.776F, 9.224F, 5.0F, 9.5F, 5.0F)
          horizontalLineToRelative(3.25F)
          lineTo(9.0F, 1.25F)
          close()        
      }
    }
    return _document16!!
  }

private var _document16: ImageVector? = null
