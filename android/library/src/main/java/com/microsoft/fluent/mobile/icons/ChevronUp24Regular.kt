package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronUp24: ImageVector
  get() {
    if (_chevronUp24 != null) {
      return _chevronUp24!!
    }
    _chevronUp24 = fluentIcon(name = "Regular.ChevronUp24", 24f) {
      materialPath {
          moveTo(4.22F, 15.53F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineTo(12.0F, 8.81F)
          lineToRelative(6.72F, 6.72F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-7.25F, -7.25F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-7.25F, 7.25F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          close()        
      }
    }
    return _chevronUp24!!
  }

private var _chevronUp24: ImageVector? = null
