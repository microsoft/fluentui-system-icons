package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Cursor24: ImageVector
  get() {
    if (_cursor24 != null) {
      return _cursor24!!
    }
    _cursor24 = fluentIcon(name = "Filled.Cursor24", 24f) {
      materialPath {
          moveTo(7.921F, 2.3F)
          curveTo(6.936F, 1.532F, 5.5F, 2.234F, 5.5F, 3.482F)
          verticalLineToRelative(17.009F)
          curveToRelative(0.0F, 1.422F, 1.795F, 2.046F, 2.677F, 0.93F)
          lineToRelative(4.19F, -5.3F)
          curveToRelative(0.314F, -0.396F, 0.79F, -0.626F, 1.295F, -0.626F)
          horizontalLineToRelative(6.852F)
          curveToRelative(1.428F, 0.0F, 2.049F, -1.808F, 0.921F, -2.684F)
          lineTo(7.921F, 2.299F)
          close()        
      }
    }
    return _cursor24!!
  }

private var _cursor24: ImageVector? = null
