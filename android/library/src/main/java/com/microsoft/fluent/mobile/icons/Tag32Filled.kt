package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Tag32: ImageVector
  get() {
    if (_tag32 != null) {
      return _tag32!!
    }
    _tag32 = fluentIcon(name = "Filled.Tag32", 32f) {
      materialPath {
          moveTo(15.952F, 4.079F)
          curveTo(16.692F, 3.386F, 17.669F, 3.0F, 18.684F, 3.0F)
          horizontalLineTo(25.5F)
          curveTo(27.433F, 3.0F, 29.0F, 4.567F, 29.0F, 6.5F)
          verticalLineToRelative(6.757F)
          curveToRelative(0.0F, 1.061F, -0.422F, 2.079F, -1.172F, 2.829F)
          lineTo(16.005F, 27.909F)
          curveToRelative(-1.66F, 1.66F, -4.35F, 1.66F, -6.01F, 0.0F)
          lineToRelative(-6.326F, -6.326F)
          curveToRelative(-1.7F, -1.699F, -1.653F, -4.467F, 0.101F, -6.109F)
          lineTo(15.952F, 4.08F)
          close()
          moveTo(22.5F, 12.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          reflectiveCurveTo(23.88F, 7.0F, 22.5F, 7.0F)
          curveTo(21.119F, 7.0F, 20.0F, 8.12F, 20.0F, 9.5F)
          reflectiveCurveToRelative(1.119F, 2.5F, 2.5F, 2.5F)
          close()        
      }
    }
    return _tag32!!
  }

private var _tag32: ImageVector? = null
