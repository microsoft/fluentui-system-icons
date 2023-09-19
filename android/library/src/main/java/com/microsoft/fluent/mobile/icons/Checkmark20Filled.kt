package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Checkmark20: ImageVector
  get() {
    if (_checkmark20 != null) {
      return _checkmark20!!
    }
    _checkmark20 = fluentIcon(name = "Filled.Checkmark20", 20f) {
      materialPath {
          moveTo(7.032F, 13.907F)
          lineToRelative(-3.471F, -3.905F)
          curveTo(3.285F, 9.692F, 2.81F, 9.664F, 2.5F, 9.939F)
          curveTo(2.193F, 10.215F, 2.165F, 10.69F, 2.44F, 11.0F)
          lineToRelative(4.0F, 4.5F)
          curveToRelative(0.287F, 0.322F, 0.786F, 0.336F, 1.091F, 0.031F)
          lineToRelative(10.5F, -10.5F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-9.938F, 9.937F)
          close()        
      }
    }
    return _checkmark20!!
  }

private var _checkmark20: ImageVector? = null
