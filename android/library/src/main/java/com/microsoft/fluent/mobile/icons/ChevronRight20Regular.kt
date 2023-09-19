package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronRight20: ImageVector
  get() {
    if (_chevronRight20 != null) {
      return _chevronRight20!!
    }
    _chevronRight20 = fluentIcon(name = "Regular.ChevronRight20", 20f) {
      materialPath {
          moveTo(7.646F, 4.147F)
          curveTo(7.84F, 3.951F, 8.157F, 3.951F, 8.353F, 4.146F)
          lineToRelative(5.484F, 5.465F)
          curveToRelative(0.216F, 0.215F, 0.216F, 0.564F, 0.0F, 0.779F)
          lineToRelative(-5.484F, 5.465F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.194F, -0.707F, -0.001F)
          curveToRelative(-0.195F, -0.196F, -0.194F, -0.512F, 0.001F, -0.707F)
          lineTo(12.812F, 10.0F)
          lineTo(7.647F, 4.854F)
          curveTo(7.451F, 4.66F, 7.451F, 4.343F, 7.646F, 4.147F)
          close()        
      }
    }
    return _chevronRight20!!
  }

private var _chevronRight20: ImageVector? = null
