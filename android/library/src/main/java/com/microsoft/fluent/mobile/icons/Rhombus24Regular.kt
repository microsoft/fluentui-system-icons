package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Rhombus24: ImageVector
  get() {
    if (_rhombus24 != null) {
      return _rhombus24!!
    }
    _rhombus24 = fluentIcon(name = "Regular.Rhombus24", 24f) {
      materialPath {
          moveTo(5.807F, 5.408F)
          curveTo(6.151F, 4.558F, 6.977F, 4.0F, 7.894F, 4.0F)
          horizontalLineToRelative(12.858F)
          curveToRelative(1.595F, 0.0F, 2.683F, 1.613F, 2.087F, 3.092F)
          lineToRelative(-4.642F, 11.5F)
          curveTo(17.854F, 19.442F, 17.028F, 20.0F, 16.111F, 20.0F)
          horizontalLineTo(3.252F)
          curveToRelative(-1.594F, 0.0F, -2.683F, -1.613F, -2.086F, -3.092F)
          lineToRelative(4.641F, -11.5F)
          close()
          moveTo(7.894F, 5.5F)
          curveToRelative(-0.306F, 0.0F, -0.581F, 0.186F, -0.696F, 0.47F)
          lineToRelative(-4.641F, 11.5F)
          curveToRelative(-0.2F, 0.492F, 0.164F, 1.03F, 0.695F, 1.03F)
          horizontalLineToRelative(12.859F)
          curveToRelative(0.305F, 0.0F, 0.58F, -0.186F, 0.695F, -0.47F)
          lineToRelative(4.642F, -11.5F)
          curveToRelative(0.198F, -0.492F, -0.164F, -1.03F, -0.696F, -1.03F)
          horizontalLineTo(7.894F)
          close()        
      }
    }
    return _rhombus24!!
  }

private var _rhombus24: ImageVector? = null
