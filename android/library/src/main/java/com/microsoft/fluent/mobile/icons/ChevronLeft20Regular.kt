package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronLeft20: ImageVector
  get() {
    if (_chevronLeft20 != null) {
      return _chevronLeft20!!
    }
    _chevronLeft20 = fluentIcon(name = "Regular.ChevronLeft20", 20f) {
      materialPath {
          moveTo(12.353F, 15.854F)
          curveToRelative(-0.194F, 0.195F, -0.511F, 0.196F, -0.707F, 0.001F)
          lineTo(6.162F, 10.39F)
          curveToRelative(-0.216F, -0.215F, -0.216F, -0.564F, 0.0F, -0.78F)
          lineToRelative(5.484F, -5.464F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.707F, 0.001F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.707F)
          lineTo(7.187F, 10.0F)
          lineToRelative(5.164F, 5.147F)
          curveToRelative(0.196F, 0.194F, 0.196F, 0.511F, 0.001F, 0.707F)
          close()        
      }
    }
    return _chevronLeft20!!
  }

private var _chevronLeft20: ImageVector? = null
