package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CaretDown20: ImageVector
  get() {
    if (_caretDown20 != null) {
      return _caretDown20!!
    }
    _caretDown20 = fluentIcon(name = "Filled.CaretDown20", 20f) {
      materialPath {
          moveTo(5.797F, 7.0F)
          curveTo(4.957F, 7.0F, 4.49F, 7.974F, 5.019F, 8.628F)
          lineToRelative(3.814F, 4.723F)
          curveToRelative(0.6F, 0.743F, 1.734F, 0.743F, 2.334F, 0.0F)
          lineToRelative(3.815F, -4.723F)
          curveTo(15.51F, 7.974F, 15.044F, 7.0F, 14.204F, 7.0F)
          horizontalLineTo(5.797F)
          close()        
      }
    }
    return _caretDown20!!
  }

private var _caretDown20: ImageVector? = null
