package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Tablet32: ImageVector
  get() {
    if (_tablet32 != null) {
      return _tablet32!!
    }
    _tablet32 = fluentIcon(name = "Filled.Tablet32", 32f) {
      materialPath {
          moveTo(2.0F, 8.25F)
          curveTo(2.0F, 6.455F, 3.455F, 5.0F, 5.25F, 5.0F)
          horizontalLineToRelative(21.5F)
          curveTo(28.545F, 5.0F, 30.0F, 6.455F, 30.0F, 8.25F)
          verticalLineToRelative(15.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(5.25F)
          curveTo(3.455F, 27.0F, 2.0F, 25.545F, 2.0F, 23.75F)
          verticalLineTo(8.25F)
          close()
          moveTo(13.0F, 21.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-6.0F)
          close()        
      }
    }
    return _tablet32!!
  }

private var _tablet32: ImageVector? = null
