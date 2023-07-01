package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.HighlightAccent16: ImageVector
  get() {
    if (_highlightAccent16 != null) {
      return _highlightAccent16!!
    }
    _highlightAccent16 = fluentIcon(name = "Filled.HighlightAccent16", 16f) {
      materialPath {
          moveTo(13.5F, 2.0F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineTo(3.0F)
          curveTo(2.724F, 5.5F, 2.5F, 5.276F, 2.5F, 5.0F)
          verticalLineTo(2.0F)
          horizontalLineToRelative(11.0F)
          close()
          moveToRelative(-8.0F, 6.5F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(1.867F)
          curveToRelative(0.0F, 0.703F, -0.369F, 1.354F, -0.971F, 1.716F)
          lineTo(5.5F, 14.5F)
          verticalLineToRelative(-6.0F)
          close()        
      }
    }
    return _highlightAccent16!!
  }

private var _highlightAccent16: ImageVector? = null
