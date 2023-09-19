package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CaretDown24: ImageVector
  get() {
    if (_caretDown24 != null) {
      return _caretDown24!!
    }
    _caretDown24 = fluentIcon(name = "Filled.CaretDown24", 24f) {
      materialPath {
          moveTo(6.102F, 8.0F)
          curveToRelative(-1.074F, 0.0F, -1.648F, 1.265F, -0.94F, 2.073F)
          lineToRelative(5.521F, 6.31F)
          curveToRelative(0.697F, 0.798F, 1.937F, 0.798F, 2.634F, 0.0F)
          lineToRelative(5.522F, -6.31F)
          curveTo(19.546F, 9.265F, 18.972F, 8.0F, 17.899F, 8.0F)
          horizontalLineTo(6.101F)
          close()        
      }
    }
    return _caretDown24!!
  }

private var _caretDown24: ImageVector? = null
