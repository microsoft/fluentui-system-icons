package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Badge24: ImageVector
  get() {
    if (_badge24 != null) {
      return _badge24!!
    }
    _badge24 = fluentIcon(name = "Regular.Badge24", 24f) {
      materialPath {
          moveTo(16.338F, 3.0F)
          curveTo(16.122F, 3.454F, 16.0F, 3.963F, 16.0F, 4.5F)
          horizontalLineTo(5.75F)
          curveTo(5.06F, 4.5F, 4.5F, 5.06F, 4.5F, 5.75F)
          verticalLineToRelative(12.5F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(12.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineTo(8.002F)
          curveToRelative(0.537F, 0.0F, 1.046F, -0.121F, 1.501F, -0.337F)
          lineTo(21.0F, 18.25F)
          curveToRelative(0.0F, 1.52F, -1.231F, 2.75F, -2.75F, 2.75F)
          horizontalLineTo(5.75F)
          curveTo(4.231F, 21.0F, 3.0F, 19.77F, 3.0F, 18.25F)
          verticalLineTo(5.75F)
          curveTo(3.0F, 4.231F, 4.231F, 3.0F, 5.75F, 3.0F)
          horizontalLineToRelative(10.588F)
          close()
          moveTo(19.5F, 2.002F)
          curveToRelative(1.38F, 0.0F, 2.5F, 1.12F, 2.5F, 2.5F)
          reflectiveCurveToRelative(-1.12F, 2.5F, -2.5F, 2.5F)
          reflectiveCurveToRelative(-2.5F, -1.12F, -2.5F, -2.5F)
          reflectiveCurveToRelative(1.12F, -2.5F, 2.5F, -2.5F)
          close()        
      }
    }
    return _badge24!!
  }

private var _badge24: ImageVector? = null
