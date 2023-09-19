package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CaretDown20: ImageVector
  get() {
    if (_caretDown20 != null) {
      return _caretDown20!!
    }
    _caretDown20 = fluentIcon(name = "Regular.CaretDown20", 20f) {
      materialPath {
          moveTo(5.019F, 8.628F)
          curveTo(4.49F, 7.974F, 4.956F, 7.0F, 5.797F, 7.0F)
          horizontalLineToRelative(8.407F)
          curveToRelative(0.84F, 0.0F, 1.306F, 0.974F, 0.778F, 1.628F)
          lineToRelative(-3.815F, 4.723F)
          curveToRelative(-0.6F, 0.743F, -1.733F, 0.743F, -2.334F, 0.0F)
          lineTo(5.02F, 8.628F)
          close()
          moveTo(14.204F, 8.0F)
          horizontalLineTo(5.797F)
          lineToRelative(3.814F, 4.723F)
          curveToRelative(0.2F, 0.247F, 0.578F, 0.247F, 0.778F, 0.0F)
          lineTo(14.204F, 8.0F)
          close()        
      }
    }
    return _caretDown20!!
  }

private var _caretDown20: ImageVector? = null
