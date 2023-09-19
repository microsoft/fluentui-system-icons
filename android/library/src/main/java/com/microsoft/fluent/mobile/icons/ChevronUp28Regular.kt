package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronUp28: ImageVector
  get() {
    if (_chevronUp28 != null) {
      return _chevronUp28!!
    }
    _chevronUp28 = fluentIcon(name = "Regular.ChevronUp28", 28f) {
      materialPath {
          moveTo(23.78F, 18.53F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineTo(14.0F, 9.81F)
          lineToRelative(-8.72F, 8.72F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(9.25F, -9.25F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(9.25F, 9.25F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          close()        
      }
    }
    return _chevronUp28!!
  }

private var _chevronUp28: ImageVector? = null
