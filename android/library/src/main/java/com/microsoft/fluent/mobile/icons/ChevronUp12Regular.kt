package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronUp12: ImageVector
  get() {
    if (_chevronUp12 != null) {
      return _chevronUp12!!
    }
    _chevronUp12 = fluentIcon(name = "Regular.ChevronUp12", 12f) {
      materialPath {
          moveTo(2.147F, 7.354F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineTo(6.0F, 4.207F)
          lineToRelative(3.146F, 3.147F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.707F, 0.0F)
          curveToRelative(0.196F, -0.196F, 0.196F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-3.5F, -3.5F)
          curveToRelative(-0.195F, -0.195F, -0.511F, -0.195F, -0.707F, 0.0F)
          lineToRelative(-3.5F, 3.5F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          close()        
      }
    }
    return _chevronUp12!!
  }

private var _chevronUp12: ImageVector? = null
