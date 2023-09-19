package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowUp32: ImageVector
  get() {
    if (_arrowUp32 != null) {
      return _arrowUp32!!
    }
    _arrowUp32 = fluentIcon(name = "Filled.ArrowUp32", 32f) {
      materialPath {
          moveTo(16.0F, 29.0F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          verticalLineTo(7.213F)
          lineToRelative(-7.628F, 7.432F)
          curveToRelative(-0.494F, 0.482F, -1.285F, 0.472F, -1.767F, -0.023F)
          curveToRelative(-0.482F, -0.494F, -0.472F, -1.286F, 0.023F, -1.767F)
          lineToRelative(9.747F, -9.497F)
          curveTo(15.367F, 3.12F, 15.683F, 3.0F, 16.0F, 3.0F)
          curveToRelative(0.317F, 0.0F, 0.633F, 0.12F, 0.875F, 0.358F)
          lineToRelative(9.747F, 9.497F)
          curveToRelative(0.495F, 0.481F, 0.505F, 1.273F, 0.023F, 1.767F)
          curveToRelative(-0.482F, 0.495F, -1.273F, 0.505F, -1.767F, 0.023F)
          lineTo(17.25F, 7.213F)
          verticalLineTo(27.75F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          close()        
      }
    }
    return _arrowUp32!!
  }

private var _arrowUp32: ImageVector? = null
