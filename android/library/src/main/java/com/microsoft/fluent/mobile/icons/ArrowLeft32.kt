package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowLeft32: ImageVector
  get() {
    if (_arrowLeft32 != null) {
      return _arrowLeft32!!
    }
    _arrowLeft32 = fluentIcon(name = "Filled.ArrowLeft32", 32f) {
      materialPath {
          moveTo(29.0F, 16.0F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineTo(7.213F)
          lineToRelative(7.432F, 7.628F)
          curveToRelative(0.482F, 0.494F, 0.472F, 1.285F, -0.023F, 1.767F)
          curveToRelative(-0.494F, 0.482F, -1.286F, 0.472F, -1.767F, -0.023F)
          lineToRelative(-9.497F, -9.747F)
          curveTo(3.12F, 16.633F, 3.0F, 16.317F, 3.0F, 16.0F)
          curveToRelative(0.0F, -0.317F, 0.12F, -0.633F, 0.358F, -0.876F)
          lineToRelative(9.497F, -9.746F)
          curveToRelative(0.481F, -0.495F, 1.273F, -0.505F, 1.767F, -0.023F)
          curveToRelative(0.495F, 0.481F, 0.505F, 1.273F, 0.023F, 1.767F)
          lineTo(7.213F, 14.75F)
          horizontalLineTo(27.75F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          close()        
      }
    }
    return _arrowLeft32!!
  }

private var _arrowLeft32: ImageVector? = null
