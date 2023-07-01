package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowMaximize28: ImageVector
  get() {
    if (_arrowMaximize28 != null) {
      return _arrowMaximize28!!
    }
    _arrowMaximize28 = fluentIcon(name = "Regular.ArrowMaximize28", 28f) {
      materialPath {
          moveTo(16.25F, 3.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineTo(25.0F, 3.75F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          curveToRelative(-0.38F, 0.0F, -0.694F, -0.282F, -0.743F, -0.648F)
          lineTo(23.5F, 11.75F)
          verticalLineTo(5.56F)
          lineTo(5.56F, 23.5F)
          horizontalLineToRelative(6.19F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineTo(12.5F, 24.25F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.743F)
          lineTo(11.75F, 25.0F)
          horizontalLineToRelative(-8.0F)
          curveToRelative(-0.38F, 0.0F, -0.693F, -0.282F, -0.743F, -0.648F)
          lineTo(3.0F, 24.25F)
          verticalLineToRelative(-8.0F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineTo(4.5F, 16.25F)
          verticalLineToRelative(6.188F)
          lineTo(22.438F, 4.5F)
          horizontalLineTo(16.25F)
          curveToRelative(-0.38F, 0.0F, -0.694F, -0.282F, -0.743F, -0.648F)
          lineTo(15.5F, 3.75F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.693F, 0.648F, -0.743F)
          lineTo(16.25F, 3.0F)
          horizontalLineToRelative(8.0F)
          close()        
      }
    }
    return _arrowMaximize28!!
  }

private var _arrowMaximize28: ImageVector? = null
