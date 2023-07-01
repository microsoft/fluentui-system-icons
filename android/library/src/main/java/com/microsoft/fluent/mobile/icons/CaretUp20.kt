package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CaretUp20: ImageVector
  get() {
    if (_caretUp20 != null) {
      return _caretUp20!!
    }
    _caretUp20 = fluentIcon(name = "Regular.CaretUp20", 20f) {
      materialPath {
          moveTo(5.019F, 12.28F)
          curveToRelative(-0.528F, 0.654F, -0.063F, 1.628F, 0.778F, 1.628F)
          horizontalLineToRelative(8.407F)
          curveToRelative(0.84F, 0.0F, 1.306F, -0.974F, 0.778F, -1.628F)
          lineToRelative(-3.815F, -4.723F)
          curveToRelative(-0.6F, -0.743F, -1.733F, -0.743F, -2.334F, 0.0F)
          lineTo(5.02F, 12.28F)
          close()
          moveToRelative(9.185F, 0.628F)
          horizontalLineTo(5.797F)
          lineTo(9.61F, 8.185F)
          curveToRelative(0.2F, -0.247F, 0.578F, -0.247F, 0.778F, 0.0F)
          lineToRelative(3.815F, 4.723F)
          close()        
      }
    }
    return _caretUp20!!
  }

private var _caretUp20: ImageVector? = null
