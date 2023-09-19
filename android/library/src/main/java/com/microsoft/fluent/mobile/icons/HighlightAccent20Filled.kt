package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.HighlightAccent20: ImageVector
  get() {
    if (_highlightAccent20 != null) {
      return _highlightAccent20!!
    }
    _highlightAccent20 = fluentIcon(name = "Filled.HighlightAccent20", 20f) {
      materialPath {
          moveTo(16.5F, 3.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineTo(4.0F)
          curveTo(3.724F, 7.5F, 3.5F, 7.276F, 3.5F, 7.0F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(13.0F)
          close()
          moveToRelative(-10.0F, 7.5F)
          verticalLineToRelative(7.0F)
          lineToRelative(6.447F, -3.106F)
          curveTo(13.286F, 14.225F, 13.5F, 13.88F, 13.5F, 13.5F)
          verticalLineToRelative(-3.0F)
          horizontalLineToRelative(-7.0F)
          close()        
      }
    }
    return _highlightAccent20!!
  }

private var _highlightAccent20: ImageVector? = null
