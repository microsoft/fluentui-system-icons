package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CaretLeft20: ImageVector
  get() {
    if (_caretLeft20 != null) {
      return _caretLeft20!!
    }
    _caretLeft20 = fluentIcon(name = "Filled.CaretLeft20", 20f) {
      materialPath {
          moveTo(13.0F, 14.204F)
          curveToRelative(0.0F, 0.84F, -0.974F, 1.306F, -1.628F, 0.778F)
          lineToRelative(-4.723F, -3.815F)
          curveToRelative(-0.743F, -0.6F, -0.743F, -1.733F, 0.0F, -2.334F)
          lineToRelative(4.723F, -3.814F)
          curveTo(12.026F, 4.49F, 13.0F, 4.956F, 13.0F, 5.797F)
          verticalLineToRelative(8.407F)
          close()        
      }
    }
    return _caretLeft20!!
  }

private var _caretLeft20: ImageVector? = null
