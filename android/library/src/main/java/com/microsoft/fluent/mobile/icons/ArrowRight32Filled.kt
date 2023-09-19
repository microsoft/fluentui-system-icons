package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowRight32: ImageVector
  get() {
    if (_arrowRight32 != null) {
      return _arrowRight32!!
    }
    _arrowRight32 = fluentIcon(name = "Filled.ArrowRight32", 32f) {
      materialPath {
          moveTo(3.0F, 16.0F)
          curveToRelative(0.0F, -0.69F, 0.56F, -1.25F, 1.25F, -1.25F)
          horizontalLineToRelative(20.537F)
          lineToRelative(-7.432F, -7.628F)
          curveToRelative(-0.482F, -0.494F, -0.472F, -1.285F, 0.023F, -1.767F)
          curveToRelative(0.494F, -0.482F, 1.285F, -0.472F, 1.767F, 0.023F)
          lineToRelative(9.497F, 9.747F)
          curveTo(28.88F, 15.367F, 29.0F, 15.683F, 29.0F, 16.0F)
          curveToRelative(0.0F, 0.317F, -0.12F, 0.633F, -0.358F, 0.875F)
          lineToRelative(-9.497F, 9.747F)
          curveToRelative(-0.482F, 0.495F, -1.273F, 0.505F, -1.767F, 0.023F)
          curveToRelative(-0.495F, -0.482F, -0.505F, -1.273F, -0.023F, -1.767F)
          lineToRelative(7.432F, -7.628F)
          horizontalLineTo(4.25F)
          curveTo(3.56F, 17.25F, 3.0F, 16.69F, 3.0F, 16.0F)
          close()        
      }
    }
    return _arrowRight32!!
  }

private var _arrowRight32: ImageVector? = null
