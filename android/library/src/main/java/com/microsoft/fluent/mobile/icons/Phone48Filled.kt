package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Phone48: ImageVector
  get() {
    if (_phone48 != null) {
      return _phone48!!
    }
    _phone48 = fluentIcon(name = "Filled.Phone48", 48f) {
      materialPath {
          moveTo(16.25F, 4.0F)
          curveTo(13.903F, 4.0F, 12.0F, 5.903F, 12.0F, 8.25F)
          verticalLineToRelative(31.5F)
          curveToRelative(0.0F, 2.347F, 1.903F, 4.25F, 4.25F, 4.25F)
          horizontalLineToRelative(15.5F)
          curveToRelative(2.347F, 0.0F, 4.25F, -1.903F, 4.25F, -4.25F)
          verticalLineTo(8.25F)
          curveTo(36.0F, 5.903F, 34.097F, 4.0F, 31.75F, 4.0F)
          horizontalLineToRelative(-15.5F)
          close()
          moveToRelative(5.0F, 31.5F)
          horizontalLineToRelative(5.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveTo(27.44F, 38.0F, 26.75F, 38.0F)
          horizontalLineToRelative(-5.5F)
          curveTo(20.56F, 38.0F, 20.0F, 37.44F, 20.0F, 36.75F)
          reflectiveCurveToRelative(0.56F, -1.25F, 1.25F, -1.25F)
          close()        
      }
    }
    return _phone48!!
  }

private var _phone48: ImageVector? = null
