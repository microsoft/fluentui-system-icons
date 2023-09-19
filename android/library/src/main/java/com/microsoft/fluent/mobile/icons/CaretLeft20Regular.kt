package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CaretLeft20: ImageVector
  get() {
    if (_caretLeft20 != null) {
      return _caretLeft20!!
    }
    _caretLeft20 = fluentIcon(name = "Regular.CaretLeft20", 20f) {
      materialPath {
          moveTo(11.372F, 14.982F)
          curveTo(12.026F, 15.51F, 13.0F, 15.044F, 13.0F, 14.204F)
          verticalLineTo(5.797F)
          curveToRelative(0.0F, -0.84F, -0.974F, -1.306F, -1.628F, -0.778F)
          lineTo(6.649F, 8.833F)
          curveToRelative(-0.743F, 0.6F, -0.743F, 1.734F, 0.0F, 2.334F)
          lineToRelative(4.723F, 3.815F)
          close()
          moveTo(12.0F, 5.797F)
          verticalLineToRelative(8.407F)
          lineToRelative(-4.722F, -3.815F)
          curveToRelative(-0.248F, -0.2F, -0.248F, -0.578F, 0.0F, -0.778F)
          lineTo(12.0F, 5.797F)
          close()        
      }
    }
    return _caretLeft20!!
  }

private var _caretLeft20: ImageVector? = null
