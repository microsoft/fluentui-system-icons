package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Desktop32: ImageVector
  get() {
    if (_desktop32 != null) {
      return _desktop32!!
    }
    _desktop32 = fluentIcon(name = "Filled.Desktop32", 32f) {
      materialPath {
          moveTo(2.0F, 6.25F)
          curveTo(2.0F, 4.455F, 3.455F, 3.0F, 5.25F, 3.0F)
          horizontalLineToRelative(21.5F)
          curveTo(28.545F, 3.0F, 30.0F, 4.455F, 30.0F, 6.25F)
          verticalLineToRelative(15.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineToRelative(-6.744F)
          verticalLineToRelative(2.001F)
          horizontalLineToRelative(2.998F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          curveToRelative(0.0F, 0.551F, -0.448F, 0.999F, -1.0F, 0.999F)
          horizontalLineTo(9.012F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.447F, -1.0F, -1.0F)
          curveToRelative(0.0F, -0.551F, 0.448F, -0.999F, 1.0F, -0.999F)
          horizontalLineToRelative(2.998F)
          verticalLineTo(25.0F)
          horizontalLineTo(5.25F)
          curveTo(3.455F, 25.0F, 2.0F, 23.545F, 2.0F, 21.75F)
          verticalLineTo(6.25F)
          close()
          moveTo(14.01F, 25.0F)
          verticalLineToRelative(2.001F)
          horizontalLineToRelative(3.996F)
          verticalLineTo(25.0F)
          horizontalLineTo(14.01F)
          close()        
      }
    }
    return _desktop32!!
  }

private var _desktop32: ImageVector? = null
