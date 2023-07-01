package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CaretDown16: ImageVector
  get() {
    if (_caretDown16 != null) {
      return _caretDown16!!
    }
    _caretDown16 = fluentIcon(name = "Regular.CaretDown16", 16f) {
      materialPath {
          moveTo(4.136F, 6.571F)
          curveTo(3.675F, 5.908F, 4.149F, 5.0F, 4.956F, 5.0F)
          horizontalLineToRelative(6.087F)
          curveToRelative(0.808F, 0.0F, 1.282F, 0.908F, 0.82F, 1.571F)
          lineToRelative(-2.632F, 3.784F)
          curveToRelative(-0.597F, 0.858F, -1.866F, 0.858F, -2.462F, 0.0F)
          lineTo(4.136F, 6.571F)
          close()
          moveTo(4.956F, 6.0F)
          lineTo(7.59F, 9.784F)
          curveToRelative(0.2F, 0.286F, 0.622F, 0.286F, 0.821F, 0.0F)
          lineTo(11.043F, 6.0F)
          horizontalLineTo(4.957F)
          close()        
      }
    }
    return _caretDown16!!
  }

private var _caretDown16: ImageVector? = null
