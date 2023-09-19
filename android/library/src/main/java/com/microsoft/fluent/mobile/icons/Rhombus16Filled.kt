package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Rhombus16: ImageVector
  get() {
    if (_rhombus16 != null) {
      return _rhombus16!!
    }
    _rhombus16 = fluentIcon(name = "Filled.Rhombus16", 16f) {
      materialPath {
          moveTo(3.892F, 4.069F)
          curveTo(4.165F, 3.42F, 4.8F, 3.0F, 5.504F, 3.0F)
          horizontalLineToRelative(7.748F)
          curveToRelative(1.252F, 0.0F, 2.1F, 1.277F, 1.611F, 2.431F)
          lineToRelative(-2.747F, 6.502F)
          curveToRelative(-0.274F, 0.648F, -0.909F, 1.069F, -1.612F, 1.069F)
          horizontalLineTo(2.756F)
          curveToRelative(-1.253F, 0.0F, -2.1F, -1.278F, -1.612F, -2.432F)
          lineToRelative(2.748F, -6.5F)
          close()        
      }
    }
    return _rhombus16!!
  }

private var _rhombus16: ImageVector? = null
