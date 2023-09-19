package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CaretRight20: ImageVector
  get() {
    if (_caretRight20 != null) {
      return _caretRight20!!
    }
    _caretRight20 = fluentIcon(name = "Regular.CaretRight20", 20f) {
      materialPath {
          moveTo(8.628F, 14.982F)
          curveTo(7.974F, 15.51F, 7.0F, 15.044F, 7.0F, 14.204F)
          verticalLineTo(5.797F)
          curveToRelative(0.0F, -0.84F, 0.974F, -1.306F, 1.628F, -0.778F)
          lineToRelative(4.723F, 3.814F)
          curveToRelative(0.743F, 0.6F, 0.743F, 1.734F, 0.0F, 2.334F)
          lineToRelative(-4.723F, 3.815F)
          close()
          moveTo(8.0F, 5.797F)
          verticalLineToRelative(8.407F)
          lineToRelative(4.723F, -3.815F)
          curveToRelative(0.247F, -0.2F, 0.247F, -0.578F, 0.0F, -0.778F)
          lineTo(8.0F, 5.797F)
          close()        
      }
    }
    return _caretRight20!!
  }

private var _caretRight20: ImageVector? = null
