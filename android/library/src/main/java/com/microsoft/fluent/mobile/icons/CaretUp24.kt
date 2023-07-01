package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CaretUp24: ImageVector
  get() {
    if (_caretUp24 != null) {
      return _caretUp24!!
    }
    _caretUp24 = fluentIcon(name = "Filled.CaretUp24", 24f) {
      materialPath {
          moveTo(6.102F, 16.98F)
          curveToRelative(-1.074F, 0.0F, -1.648F, -1.264F, -0.94F, -2.073F)
          lineToRelative(5.521F, -6.31F)
          curveToRelative(0.697F, -0.797F, 1.937F, -0.797F, 2.634F, 0.0F)
          lineToRelative(5.522F, 6.31F)
          curveToRelative(0.707F, 0.809F, 0.133F, 2.073F, -0.94F, 2.073F)
          horizontalLineTo(6.101F)
          close()        
      }
    }
    return _caretUp24!!
  }

private var _caretUp24: ImageVector? = null
