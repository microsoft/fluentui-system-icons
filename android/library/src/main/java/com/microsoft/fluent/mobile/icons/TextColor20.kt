package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextColor20: ImageVector
  get() {
    if (_textColor20 != null) {
      return _textColor20!!
    }
    _textColor20 = fluentIcon(name = "Filled.TextColor20", 20f) {
      materialPath {
          moveTo(10.464F, 2.314F)
          curveTo(10.388F, 2.124F, 10.204F, 2.0F, 10.0F, 2.0F)
          curveTo(9.796F, 2.0F, 9.612F, 2.124F, 9.536F, 2.314F)
          lineToRelative(-3.0F, 7.5F)
          curveToRelative(-0.103F, 0.257F, 0.022F, 0.548F, 0.278F, 0.65F)
          curveToRelative(0.257F, 0.103F, 0.548F, -0.022F, 0.65F, -0.278F)
          lineToRelative(1.073F, -2.682F)
          horizontalLineToRelative(2.926F)
          lineToRelative(1.073F, 2.682F)
          curveToRelative(0.102F, 0.256F, 0.393F, 0.38F, 0.65F, 0.278F)
          curveToRelative(0.256F, -0.102F, 0.38F, -0.393F, 0.278F, -0.65F)
          lineToRelative(-3.0F, -7.5F)
          close()
          moveTo(10.0F, 3.846F)
          lineToRelative(1.063F, 2.658F)
          horizontalLineTo(8.937F)
          lineTo(10.0F, 3.846F)
          close()
          moveTo(4.5F, 12.0F)
          curveTo(3.672F, 12.0F, 3.0F, 12.672F, 3.0F, 13.5F)
          verticalLineToRelative(3.0F)
          curveTo(3.0F, 17.328F, 3.672F, 18.0F, 4.5F, 18.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-11.0F)
          close()        
      }
    }
    return _textColor20!!
  }

private var _textColor20: ImageVector? = null
