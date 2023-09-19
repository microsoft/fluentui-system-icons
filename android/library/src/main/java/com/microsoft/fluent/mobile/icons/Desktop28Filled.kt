package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Desktop28: ImageVector
  get() {
    if (_desktop28 != null) {
      return _desktop28!!
    }
    _desktop28 = fluentIcon(name = "Filled.Desktop28", 28f) {
      materialPath {
          moveTo(23.749F, 3.0F)
          curveToRelative(1.242F, 0.0F, 2.25F, 1.007F, 2.25F, 2.25F)
          verticalLineToRelative(13.502F)
          curveToRelative(0.0F, 1.243F, -1.008F, 2.25F, -2.25F, 2.25F)
          horizontalLineToRelative(-5.751F)
          verticalLineTo(23.5F)
          horizontalLineToRelative(1.752F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.283F, 0.743F, 0.649F)
          lineTo(20.5F, 24.25F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.744F)
          lineTo(19.75F, 25.0F)
          horizontalLineTo(8.25F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.335F, -0.75F, -0.75F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.693F, 0.648F, -0.743F)
          lineTo(8.25F, 23.5F)
          horizontalLineTo(10.0F)
          verticalLineToRelative(-2.498F)
          horizontalLineTo(4.25F)
          curveToRelative(-1.243F, 0.0F, -2.25F, -1.007F, -2.25F, -2.25F)
          verticalLineTo(5.25F)
          curveTo(2.0F, 4.007F, 3.007F, 3.0F, 4.25F, 3.0F)
          horizontalLineToRelative(19.499F)
          close()
          moveToRelative(-7.251F, 18.002F)
          horizontalLineTo(11.5F)
          verticalLineTo(23.5F)
          horizontalLineToRelative(4.999F)
          lineToRelative(-0.001F, -2.498F)
          close()        
      }
    }
    return _desktop28!!
  }

private var _desktop28: ImageVector? = null
