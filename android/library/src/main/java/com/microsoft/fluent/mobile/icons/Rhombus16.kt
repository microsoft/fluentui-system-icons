package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Rhombus16: ImageVector
  get() {
    if (_rhombus16 != null) {
      return _rhombus16!!
    }
    _rhombus16 = fluentIcon(name = "Regular.Rhombus16", 16f) {
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
          moveTo(5.504F, 4.0F)
          curveTo(5.202F, 4.0F, 4.93F, 4.18F, 4.813F, 4.458F)
          lineTo(2.065F, 10.96F)
          curveToRelative(-0.21F, 0.494F, 0.154F, 1.042F, 0.69F, 1.042F)
          horizontalLineToRelative(7.749F)
          curveToRelative(0.301F, 0.0F, 0.573F, -0.18F, 0.69F, -0.458F)
          lineToRelative(2.748F, -6.502F)
          curveTo(14.152F, 4.548F, 13.788F, 4.0F, 13.252F, 4.0F)
          horizontalLineTo(5.503F)
          close()        
      }
    }
    return _rhombus16!!
  }

private var _rhombus16: ImageVector? = null
