package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CaretLeft16: ImageVector
  get() {
    if (_caretLeft16 != null) {
      return _caretLeft16!!
    }
    _caretLeft16 = fluentIcon(name = "Filled.CaretLeft16", 16f) {
      materialPath {
          moveTo(9.428F, 11.84F)
          curveToRelative(0.663F, 0.458F, 1.571F, -0.013F, 1.571F, -0.816F)
          verticalLineTo(4.975F)
          curveToRelative(0.0F, -0.803F, -0.908F, -1.274F, -1.571F, -0.816F)
          lineTo(5.643F, 6.776F)
          curveToRelative(-0.857F, 0.593F, -0.857F, 1.854F, 0.0F, 2.447F)
          lineToRelative(3.785F, 2.617F)
          close()        
      }
    }
    return _caretLeft16!!
  }

private var _caretLeft16: ImageVector? = null
