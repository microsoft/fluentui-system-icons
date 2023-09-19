package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CaretDown16: ImageVector
  get() {
    if (_caretDown16 != null) {
      return _caretDown16!!
    }
    _caretDown16 = fluentIcon(name = "Filled.CaretDown16", 16f) {
      materialPath {
          moveTo(4.957F, 5.0F)
          curveTo(4.149F, 5.0F, 3.675F, 5.908F, 4.136F, 6.571F)
          lineToRelative(2.633F, 3.784F)
          curveToRelative(0.596F, 0.858F, 1.865F, 0.858F, 2.462F, 0.0F)
          lineToRelative(2.633F, -3.784F)
          curveTo(12.325F, 5.908F, 11.85F, 5.0F, 11.043F, 5.0F)
          horizontalLineTo(4.957F)
          close()        
      }
    }
    return _caretDown16!!
  }

private var _caretDown16: ImageVector? = null
