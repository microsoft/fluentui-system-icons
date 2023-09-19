package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Phone32: ImageVector
  get() {
    if (_phone32 != null) {
      return _phone32!!
    }
    _phone32 = fluentIcon(name = "Filled.Phone32", 32f) {
      materialPath {
          moveTo(10.25F, 2.0F)
          curveTo(8.455F, 2.0F, 7.0F, 3.455F, 7.0F, 5.25F)
          verticalLineToRelative(21.5F)
          curveTo(7.0F, 28.545F, 8.455F, 30.0F, 10.25F, 30.0F)
          horizontalLineToRelative(11.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(5.25F)
          curveTo(25.0F, 3.455F, 23.545F, 2.0F, 21.75F, 2.0F)
          horizontalLineToRelative(-11.5F)
          close()
          moveTo(14.0F, 24.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-4.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          close()        
      }
    }
    return _phone32!!
  }

private var _phone32: ImageVector? = null
