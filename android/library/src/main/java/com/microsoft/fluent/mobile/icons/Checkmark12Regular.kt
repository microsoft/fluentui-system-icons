package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Checkmark12: ImageVector
  get() {
    if (_checkmark12 != null) {
      return _checkmark12!!
    }
    _checkmark12 = fluentIcon(name = "Regular.Checkmark12", 12f) {
      materialPath {
          moveTo(9.854F, 3.147F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(-4.5F, 4.5F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineTo(5.0F, 7.293F)
          lineToRelative(4.146F, -4.146F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.707F, 0.0F)
          close()        
      }
    }
    return _checkmark12!!
  }

private var _checkmark12: ImageVector? = null
