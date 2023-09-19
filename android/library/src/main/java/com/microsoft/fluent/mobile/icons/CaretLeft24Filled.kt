package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CaretLeft24: ImageVector
  get() {
    if (_caretLeft24 != null) {
      return _caretLeft24!!
    }
    _caretLeft24 = fluentIcon(name = "Filled.CaretLeft24", 24f) {
      materialPath {
          moveTo(15.0F, 17.898F)
          curveToRelative(0.0F, 1.074F, -1.265F, 1.648F, -2.073F, 0.941F)
          lineToRelative(-6.31F, -5.522F)
          curveToRelative(-0.798F, -0.697F, -0.798F, -1.937F, 0.0F, -2.634F)
          lineToRelative(6.31F, -5.522F)
          curveTo(13.735F, 4.454F, 15.0F, 5.028F, 15.0F, 6.102F)
          verticalLineToRelative(11.796F)
          close()        
      }
    }
    return _caretLeft24!!
  }

private var _caretLeft24: ImageVector? = null
