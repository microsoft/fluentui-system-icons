package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Phone48: ImageVector
  get() {
    if (_phone48 != null) {
      return _phone48!!
    }
    _phone48 = fluentIcon(name = "Regular.Phone48", 48f) {
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
          moveTo(14.5F, 8.25F)
          curveToRelative(0.0F, -0.966F, 0.784F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(15.5F)
          curveToRelative(0.967F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          verticalLineToRelative(31.5F)
          curveToRelative(0.0F, 0.967F, -0.783F, 1.75F, -1.75F, 1.75F)
          horizontalLineToRelative(-15.5F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.783F, -1.75F, -1.75F)
          verticalLineTo(8.25F)
          close()
          moveToRelative(6.75F, 27.25F)
          curveToRelative(-0.69F, 0.0F, -1.25F, 0.56F, -1.25F, 1.25F)
          reflectiveCurveTo(20.56F, 38.0F, 21.25F, 38.0F)
          horizontalLineToRelative(5.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveToRelative(-0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineToRelative(-5.5F)
          close()        
      }
    }
    return _phone48!!
  }

private var _phone48: ImageVector? = null
