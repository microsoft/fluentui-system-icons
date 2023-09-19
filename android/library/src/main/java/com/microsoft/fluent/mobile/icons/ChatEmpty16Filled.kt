package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChatEmpty16: ImageVector
  get() {
    if (_chatEmpty16 != null) {
      return _chatEmpty16!!
    }
    _chatEmpty16 = fluentIcon(name = "Filled.ChatEmpty16", 16f) {
      materialPath {
          moveTo(2.0F, 8.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          curveToRelative(-1.094F, 0.0F, -2.12F, -0.293F, -3.004F, -0.805F)
          lineToRelative(-2.338F, 0.78F)
          curveToRelative(-0.176F, 0.058F, -0.37F, 0.014F, -0.504F, -0.114F)
          reflectiveCurveToRelative(-0.186F, -0.32F, -0.135F, -0.498F)
          lineToRelative(0.712F, -2.491F)
          curveTo(2.265F, 10.019F, 2.0F, 9.04F, 2.0F, 8.0F)
          close()        
      }
    }
    return _chatEmpty16!!
  }

private var _chatEmpty16: ImageVector? = null
