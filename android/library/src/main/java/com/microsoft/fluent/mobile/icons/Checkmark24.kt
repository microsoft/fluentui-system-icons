package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Checkmark24: ImageVector
  get() {
    if (_checkmark24 != null) {
      return _checkmark24!!
    }
    _checkmark24 = fluentIcon(name = "Regular.Checkmark24", 24f) {
      materialPath {
          moveTo(4.53F, 12.97F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(4.5F, 4.5F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(11.0F, -11.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineTo(8.5F, 16.94F)
          lineToRelative(-3.97F, -3.97F)
          close()        
      }
    }
    return _checkmark24!!
  }

private var _checkmark24: ImageVector? = null
