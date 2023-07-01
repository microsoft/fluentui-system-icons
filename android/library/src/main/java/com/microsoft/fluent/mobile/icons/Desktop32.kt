package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Desktop32: ImageVector
  get() {
    if (_desktop32 != null) {
      return _desktop32!!
    }
    _desktop32 = fluentIcon(name = "Regular.Desktop32", 32f) {
      materialPath {
          moveTo(5.25F, 3.0F)
          curveTo(3.455F, 3.0F, 2.0F, 4.455F, 2.0F, 6.25F)
          verticalLineToRelative(15.5F)
          curveTo(2.0F, 23.545F, 3.455F, 25.0F, 5.25F, 25.0F)
          horizontalLineToRelative(6.76F)
          verticalLineToRelative(2.001F)
          horizontalLineTo(9.012F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveTo(8.46F, 29.0F, 9.012F, 29.0F)
          horizontalLineToRelative(13.992F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          curveToRelative(0.0F, -0.551F, -0.448F, -0.999F, -1.0F, -0.999F)
          horizontalLineToRelative(-2.998F)
          verticalLineTo(25.0F)
          horizontalLineToRelative(6.744F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(6.25F)
          curveTo(30.0F, 4.455F, 28.545F, 3.0F, 26.75F, 3.0F)
          horizontalLineTo(5.25F)
          close()
          moveToRelative(12.756F, 22.0F)
          verticalLineToRelative(2.001F)
          horizontalLineTo(14.01F)
          verticalLineTo(25.0F)
          horizontalLineToRelative(3.996F)
          close()
          moveTo(4.0F, 6.25F)
          curveTo(4.0F, 5.56F, 4.56F, 5.0F, 5.25F, 5.0F)
          horizontalLineToRelative(21.5F)
          curveTo(27.44F, 5.0F, 28.0F, 5.56F, 28.0F, 6.25F)
          verticalLineToRelative(15.5F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineTo(5.25F)
          curveTo(4.56F, 23.0F, 4.0F, 22.44F, 4.0F, 21.75F)
          verticalLineTo(6.25F)
          close()        
      }
    }
    return _desktop32!!
  }

private var _desktop32: ImageVector? = null
