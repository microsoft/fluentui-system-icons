package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Rhombus48: ImageVector
  get() {
    if (_rhombus48 != null) {
      return _rhombus48!!
    }
    _rhombus48 = fluentIcon(name = "Regular.Rhombus48", 48f) {
      materialPath {
          moveTo(12.007F, 11.042F)
          curveToRelative(0.707F, -1.832F, 2.468F, -3.04F, 4.432F, -3.04F)
          horizontalLineToRelative(23.807F)
          curveToRelative(3.336F, 0.0F, 5.632F, 3.348F, 4.431F, 6.46F)
          lineToRelative(-8.684F, 22.5F)
          curveTo(35.286F, 38.791F, 33.525F, 40.0F, 31.562F, 40.0F)
          horizontalLineTo(7.754F)
          curveToRelative(-3.335F, 0.0F, -5.632F, -3.348F, -4.43F, -6.46F)
          lineToRelative(8.683F, -22.5F)
          close()
          moveToRelative(4.432F, -0.54F)
          curveToRelative(-0.93F, 0.0F, -1.765F, 0.572F, -2.1F, 1.44F)
          lineTo(5.655F, 34.44F)
          curveToRelative(-0.569F, 1.474F, 0.52F, 3.06F, 2.1F, 3.06F)
          horizontalLineToRelative(23.807F)
          curveToRelative(0.93F, 0.0F, 1.764F, -0.572F, 2.1F, -1.44F)
          lineToRelative(8.683F, -22.499F)
          curveToRelative(0.569F, -1.474F, -0.519F, -3.06F, -2.1F, -3.06F)
          horizontalLineTo(16.44F)
          close()        
      }
    }
    return _rhombus48!!
  }

private var _rhombus48: ImageVector? = null
