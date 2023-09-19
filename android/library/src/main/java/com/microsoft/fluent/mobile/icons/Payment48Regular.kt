package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Payment48: ImageVector
  get() {
    if (_payment48 != null) {
      return _payment48!!
    }
    _payment48 = fluentIcon(name = "Regular.Payment48", 48f) {
      materialPath {
          moveTo(4.0F, 15.25F)
          curveTo(4.0F, 11.798F, 6.798F, 9.0F, 10.25F, 9.0F)
          horizontalLineToRelative(27.5F)
          curveTo(41.202F, 9.0F, 44.0F, 11.798F, 44.0F, 15.25F)
          verticalLineToRelative(17.5F)
          curveToRelative(0.0F, 3.452F, -2.798F, 6.25F, -6.25F, 6.25F)
          horizontalLineToRelative(-27.5F)
          curveTo(6.798F, 39.0F, 4.0F, 36.202F, 4.0F, 32.75F)
          verticalLineToRelative(-17.5F)
          close()
          moveToRelative(6.25F, -3.75F)
          curveToRelative(-2.071F, 0.0F, -3.75F, 1.679F, -3.75F, 3.75F)
          verticalLineToRelative(3.25F)
          horizontalLineToRelative(35.0F)
          verticalLineToRelative(-3.25F)
          curveToRelative(0.0F, -2.071F, -1.679F, -3.75F, -3.75F, -3.75F)
          horizontalLineToRelative(-27.5F)
          close()
          moveTo(6.5F, 32.75F)
          curveToRelative(0.0F, 2.071F, 1.679F, 3.75F, 3.75F, 3.75F)
          horizontalLineToRelative(27.5F)
          curveToRelative(2.071F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          verticalLineTo(21.0F)
          horizontalLineToRelative(-35.0F)
          verticalLineToRelative(11.75F)
          close()
          moveToRelative(24.75F, -3.25F)
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
