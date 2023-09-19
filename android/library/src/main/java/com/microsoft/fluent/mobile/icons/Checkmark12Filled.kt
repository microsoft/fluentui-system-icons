package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Checkmark12: ImageVector
  get() {
    if (_checkmark12 != null) {
      return _checkmark12!!
    }
    _checkmark12 = fluentIcon(name = "Filled.Checkmark12", 12f) {
      materialPath {
          moveTo(9.765F, 3.205F)
          curveToRelative(0.301F, 0.284F, 0.315F, 0.759F, 0.03F, 1.06F)
          lineToRelative(-4.25F, 4.5F)
          curveTo(5.406F, 8.912F, 5.213F, 8.997F, 5.011F, 9.0F)
          curveTo(4.808F, 9.003F, 4.613F, 8.924F, 4.47F, 8.78F)
          lineTo(2.22F, 6.53F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(1.705F, 1.704F)
          lineToRelative(3.72F, -3.939F)
          curveToRelative(0.284F, -0.301F, 0.759F, -0.315F, 1.06F, -0.03F)
          close()        
      }
    }
    return _checkmark12!!
  }

private var _checkmark12: ImageVector? = null
