package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TriangleDown16: ImageVector
  get() {
    if (_triangleDown16 != null) {
      return _triangleDown16!!
    }
    _triangleDown16 = fluentIcon(name = "Regular.TriangleDown16", 16f) {
      materialPath {
          moveTo(9.312F, 14.223F)
          curveToRelative(-0.57F, 1.036F, -2.059F, 1.036F, -2.629F, 0.0F)
          lineToRelative(-5.5F, -10.0F)
          curveTo(0.635F, 3.225F, 1.358F, 2.002F, 2.499F, 2.002F)
          horizontalLineToRelative(10.999F)
          curveToRelative(1.14F, 0.0F, 1.864F, 1.223F, 1.314F, 2.223F)
          lineToRelative(-5.5F, 9.999F)
          close()
          moveTo(7.559F, 13.74F)
          curveToRelative(0.19F, 0.345F, 0.687F, 0.345F, 0.876F, 0.0F)
          lineToRelative(5.5F, -10.0F)
          curveTo(14.118F, 3.408F, 13.877F, 3.0F, 13.497F, 3.0F)
          horizontalLineTo(2.498F)
          curveTo(2.118F, 3.0F, 1.877F, 3.408F, 2.06F, 3.74F)
          lineToRelative(5.5F, 10.0F)
          close()        
      }
    }
    return _triangleDown16!!
  }

private var _triangleDown16: ImageVector? = null
