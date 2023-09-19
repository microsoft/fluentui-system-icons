package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Payment48: ImageVector
  get() {
    if (_payment48 != null) {
      return _payment48!!
    }
    _payment48 = fluentIcon(name = "Filled.Payment48", 48f) {
      materialPath {
          moveTo(10.25F, 9.0F)
          curveTo(6.798F, 9.0F, 4.0F, 11.798F, 4.0F, 15.25F)
          verticalLineToRelative(3.25F)
          horizontalLineToRelative(40.0F)
          verticalLineToRelative(-3.25F)
          curveTo(44.0F, 11.798F, 41.202F, 9.0F, 37.75F, 9.0F)
          horizontalLineToRelative(-27.5F)
          close()
          moveTo(4.0F, 32.75F)
          verticalLineTo(21.0F)
          horizontalLineToRelative(40.0F)
          verticalLineToRelative(11.75F)
          curveToRelative(0.0F, 3.452F, -2.798F, 6.25F, -6.25F, 6.25F)
          horizontalLineToRelative(-27.5F)
          curveTo(6.798F, 39.0F, 4.0F, 36.202F, 4.0F, 32.75F)
          close()
          moveToRelative(27.25F, -3.25F)
          curveToRelative(-0.69F, 0.0F, -1.25F, 0.56F, -1.25F, 1.25F)
          reflectiveCurveTo(30.56F, 32.0F, 31.25F, 32.0F)
          horizontalLineToRelative(5.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveToRelative(-0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineToRelative(-5.5F)
          close()        
      }
    }
    return _payment48!!
  }

private var _payment48: ImageVector? = null
