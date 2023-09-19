package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Rhombus28: ImageVector
  get() {
    if (_rhombus28 != null) {
      return _rhombus28!!
    }
    _rhombus28 = fluentIcon(name = "Regular.Rhombus28", 28f) {
      materialPath {
          moveTo(6.555F, 5.928F)
          curveTo(6.999F, 4.767F, 8.113F, 4.0F, 9.357F, 4.0F)
          horizontalLineToRelative(14.638F)
          curveToRelative(2.103F, 0.0F, 3.553F, 2.107F, 2.802F, 4.072F)
          lineToRelative(-5.354F, 14.0F)
          curveTo(21.0F, 23.233F, 19.884F, 24.0F, 18.641F, 24.0F)
          horizontalLineTo(4.003F)
          curveTo(1.9F, 24.0F, 0.449F, 21.893F, 1.2F, 19.928F)
          lineToRelative(5.354F, -14.0F)
          close()
          moveTo(9.357F, 5.5F)
          curveToRelative(-0.622F, 0.0F, -1.18F, 0.383F, -1.401F, 0.964F)
          lineToRelative(-5.354F, 14.0F)
          curveToRelative(-0.376F, 0.982F, 0.35F, 2.036F, 1.4F, 2.036F)
          horizontalLineToRelative(14.64F)
          curveToRelative(0.62F, 0.0F, 1.178F, -0.384F, 1.4F, -0.964F)
          lineToRelative(5.354F, -14.0F)
          curveToRelative(0.376F, -0.982F, -0.35F, -2.036F, -1.4F, -2.036F)
          horizontalLineTo(9.355F)
          close()        
      }
    }
    return _rhombus28!!
  }

private var _rhombus28: ImageVector? = null
