package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Eye24: ImageVector
  get() {
    if (_eye24 != null) {
      return _eye24!!
    }
    _eye24 = fluentIcon(name = "Filled.Eye24", 24f) {
      materialPath {
          moveTo(12.0F, 9.005F)
          curveToRelative(2.209F, 0.0F, 4.0F, 1.79F, 4.0F, 4.0F)
          curveToRelative(0.0F, 2.209F, -1.791F, 4.0F, -4.0F, 4.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, -1.791F, -4.0F, -4.0F)
          curveToRelative(0.0F, -2.21F, 1.79F, -4.0F, 4.0F, -4.0F)
          close()
          moveTo(12.0F, 5.5F)
          curveToRelative(4.613F, 0.0F, 8.596F, 3.15F, 9.701F, 7.564F)
          curveToRelative(0.1F, 0.402F, -0.144F, 0.81F, -0.545F, 0.91F)
          curveToRelative(-0.402F, 0.1F, -0.81F, -0.143F, -0.91F, -0.545F)
          curveTo(19.307F, 9.678F, 15.92F, 7.0F, 12.0F, 7.0F)
          curveToRelative(-3.923F, 0.0F, -7.31F, 2.68F, -8.247F, 6.433F)
          curveToRelative(-0.1F, 0.402F, -0.508F, 0.646F, -0.91F, 0.546F)
          curveToRelative(-0.401F, -0.1F, -0.646F, -0.507F, -0.546F, -0.91F)
          curveTo(3.4F, 8.654F, 7.384F, 5.5F, 12.0F, 5.5F)
          close()        
      }
    }
    return _eye24!!
  }

private var _eye24: ImageVector? = null
