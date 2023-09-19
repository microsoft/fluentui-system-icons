package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Person24: ImageVector
  get() {
    if (_person24 != null) {
      return _person24!!
    }
    _person24 = fluentIcon(name = "Filled.Person24", 24f) {
      materialPath {
          moveTo(17.755F, 14.0F)
          curveToRelative(1.242F, 0.0F, 2.248F, 1.007F, 2.248F, 2.25F)
          verticalLineToRelative(0.918F)
          curveToRelative(0.0F, 0.573F, -0.179F, 1.132F, -0.512F, 1.598F)
          curveToRelative(-1.546F, 2.164F, -4.07F, 3.235F, -7.49F, 3.235F)
          curveToRelative(-3.422F, 0.0F, -5.945F, -1.072F, -7.487F, -3.236F)
          curveToRelative(-0.332F, -0.466F, -0.51F, -1.024F, -0.51F, -1.596F)
          verticalLineToRelative(-0.92F)
          curveTo(4.004F, 15.007F, 5.01F, 14.0F, 6.253F, 14.0F)
          horizontalLineToRelative(11.502F)
          close()
          moveTo(12.0F, 2.005F)
          curveToRelative(2.762F, 0.0F, 5.0F, 2.239F, 5.0F, 5.0F)
          reflectiveCurveToRelative(-2.238F, 5.0F, -5.0F, 5.0F)
          curveToRelative(-2.761F, 0.0F, -5.0F, -2.239F, -5.0F, -5.0F)
          reflectiveCurveToRelative(2.239F, -5.0F, 5.0F, -5.0F)
          close()        
      }
    }
    return _person24!!
  }

private var _person24: ImageVector? = null
