package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CaretDown24: ImageVector
  get() {
    if (_caretDown24 != null) {
      return _caretDown24!!
    }
    _caretDown24 = fluentIcon(name = "Regular.CaretDown24", 24f) {
      materialPath {
          moveTo(5.161F, 10.073F)
          curveTo(4.454F, 9.265F, 5.028F, 8.0F, 6.102F, 8.0F)
          horizontalLineToRelative(11.796F)
          curveToRelative(1.074F, 0.0F, 1.648F, 1.265F, 0.941F, 2.073F)
          lineToRelative(-5.522F, 6.31F)
          curveToRelative(-0.697F, 0.798F, -1.937F, 0.798F, -2.634F, 0.0F)
          lineToRelative(-5.522F, -6.31F)
          close()
          moveTo(6.653F, 9.5F)
          lineToRelative(5.159F, 5.896F)
          curveToRelative(0.1F, 0.114F, 0.277F, 0.114F, 0.376F, 0.0F)
          lineToRelative(5.16F, -5.896F)
          horizontalLineTo(6.652F)
          close()        
      }
    }
    return _caretDown24!!
  }

private var _caretDown24: ImageVector? = null
