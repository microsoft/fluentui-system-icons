package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronDown20: ImageVector
  get() {
    if (_chevronDown20 != null) {
      return _chevronDown20!!
    }
    _chevronDown20 = fluentIcon(name = "Regular.ChevronDown20", 20f) {
      materialPath {
          moveTo(15.854F, 7.646F)
          curveToRelative(0.195F, 0.195F, 0.196F, 0.511F, 0.001F, 0.707F)
          lineToRelative(-5.465F, 5.484F)
          curveToRelative(-0.215F, 0.216F, -0.564F, 0.216F, -0.78F, 0.0F)
          lineTo(4.147F, 8.353F)
          curveToRelative(-0.197F, -0.196F, -0.197F, -0.513F, 0.0F, -0.707F)
          curveTo(4.343F, 7.45F, 4.66F, 7.452F, 4.854F, 7.647F)
          lineTo(10.0F, 12.812F)
          lineToRelative(5.147F, -5.165F)
          curveToRelative(0.194F, -0.196F, 0.511F, -0.196F, 0.707F, -0.001F)
          close()        
      }
    }
    return _chevronDown20!!
  }

private var _chevronDown20: ImageVector? = null
