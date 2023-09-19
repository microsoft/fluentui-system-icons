package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Sim16: ImageVector
  get() {
    if (_sim16 != null) {
      return _sim16!!
    }
    _sim16 = fluentIcon(name = "Regular.Sim16", 16f) {
      materialPath {
          moveTo(5.0F, 9.5F)
          curveTo(5.0F, 8.672F, 5.672F, 8.0F, 6.5F, 8.0F)
          horizontalLineToRelative(3.0F)
          curveTo(10.328F, 8.0F, 11.0F, 8.672F, 11.0F, 9.5F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-3.0F)
          curveTo(5.672F, 13.0F, 5.0F, 12.328F, 5.0F, 11.5F)
          verticalLineToRelative(-2.0F)
          close()
          moveTo(6.5F, 9.0F)
          curveTo(6.224F, 9.0F, 6.0F, 9.224F, 6.0F, 9.5F)
          verticalLineToRelative(2.0F)
          curveTo(6.0F, 11.776F, 6.224F, 12.0F, 6.5F, 12.0F)
          horizontalLineTo(8.0F)
          verticalLineTo(9.0F)
          horizontalLineTo(6.5F)
          close()
          moveTo(9.0F, 9.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(0.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-2.0F)
          curveTo(10.0F, 9.224F, 9.776F, 9.0F, 9.5F, 9.0F)
          horizontalLineTo(9.0F)
          close()
          moveTo(3.0F, 3.5F)
          curveTo(3.0F, 2.12F, 4.12F, 1.0F, 5.5F, 1.0F)
          horizontalLineToRelative(3.172F)
          curveToRelative(0.663F, 0.0F, 1.298F, 0.263F, 1.767F, 0.732F)
          lineToRelative(1.829F, 1.829F)
          curveTo(12.737F, 4.029F, 13.0F, 4.665F, 13.0F, 5.328F)
          verticalLineTo(12.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-5.0F)
          curveTo(4.12F, 15.0F, 3.0F, 13.88F, 3.0F, 12.5F)
          verticalLineToRelative(-9.0F)
          close()
          moveTo(5.5F, 2.0F)
          curveTo(4.672F, 2.0F, 4.0F, 2.672F, 4.0F, 3.5F)
          verticalLineToRelative(9.0F)
          curveTo(4.0F, 13.328F, 4.672F, 14.0F, 5.5F, 14.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(5.328F)
          curveToRelative(0.0F, -0.397F, -0.158F, -0.779F, -0.44F, -1.06F)
          lineTo(9.733F, 2.439F)
          curveTo(9.451F, 2.158F, 9.07F, 2.0F, 8.672F, 2.0F)
          horizontalLineTo(5.5F)
          close()        
      }
    }
    return _sim16!!
  }

private var _sim16: ImageVector? = null
