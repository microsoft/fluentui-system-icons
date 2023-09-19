package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.IosChevronRight20: ImageVector
  get() {
    if (_iosChevronRight20 != null) {
      return _iosChevronRight20!!
    }
    _iosChevronRight20 = fluentIcon(name = "Filled.IosChevronRight20", 20f) {
      materialPath {
          moveTo(12.22F, 6.03F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(4.5F, 4.5F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-4.5F, 4.5F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(16.19F, 10.0F)
          lineToRelative(-3.97F, -3.97F)
          close()        
      }
    }
    return _iosChevronRight20!!
  }

private var _iosChevronRight20: ImageVector? = null
