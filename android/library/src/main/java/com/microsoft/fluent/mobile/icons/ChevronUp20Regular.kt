package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronUp20: ImageVector
  get() {
    if (_chevronUp20 != null) {
      return _chevronUp20!!
    }
    _chevronUp20 = fluentIcon(name = "Regular.ChevronUp20", 20f) {
      materialPath {
          moveTo(4.147F, 12.353F)
          curveToRelative(-0.196F, -0.194F, -0.196F, -0.511F, -0.001F, -0.707F)
          lineTo(9.61F, 6.162F)
          curveToRelative(0.215F, -0.216F, 0.564F, -0.216F, 0.779F, 0.0F)
          lineToRelative(5.465F, 5.484F)
          curveToRelative(0.195F, 0.196F, 0.194F, 0.512F, -0.001F, 0.707F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineTo(10.0F, 7.187F)
          lineToRelative(-5.146F, 5.164F)
          curveToRelative(-0.195F, 0.196F, -0.511F, 0.196F, -0.707F, 0.001F)
          close()        
      }
    }
    return _chevronUp20!!
  }

private var _chevronUp20: ImageVector? = null
