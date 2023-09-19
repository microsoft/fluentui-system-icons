package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Dismiss12: ImageVector
  get() {
    if (_dismiss12 != null) {
      return _dismiss12!!
    }
    _dismiss12 = fluentIcon(name = "Regular.Dismiss12", 12f) {
      materialPath {
          moveTo(2.089F, 2.216F)
          lineToRelative(0.058F, -0.07F)
          curveTo(2.32F, 1.974F, 2.589F, 1.955F, 2.784F, 2.09F)
          lineToRelative(0.07F, 0.058F)
          lineTo(6.0F, 5.293F)
          lineToRelative(3.146F, -3.147F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          curveToRelative(0.196F, 0.196F, 0.196F, 0.512F, 0.0F, 0.708F)
          lineTo(6.708F, 6.0F)
          lineToRelative(3.147F, 3.146F)
          curveTo(10.027F, 9.32F, 10.046F, 9.59F, 9.91F, 9.784F)
          lineToRelative(-0.057F, 0.07F)
          curveTo(9.68F, 10.027F, 9.41F, 10.046F, 9.216F, 9.91F)
          lineToRelative(-0.07F, -0.057F)
          lineTo(6.0F, 6.707F)
          lineTo(2.853F, 9.854F)
          curveToRelative(-0.195F, 0.195F, -0.511F, 0.195F, -0.707F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.707F)
          lineTo(5.293F, 6.0F)
          lineTo(2.146F, 2.853F)
          curveTo(1.974F, 2.68F, 1.955F, 2.411F, 2.09F, 2.216F)
          lineToRelative(0.058F, -0.07F)
          lineToRelative(-0.058F, 0.07F)
          close()        
      }
    }
    return _dismiss12!!
  }

private var _dismiss12: ImageVector? = null
