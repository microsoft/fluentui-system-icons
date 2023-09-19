package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Important12: ImageVector
  get() {
    if (_important12 != null) {
      return _important12!!
    }
    _important12 = fluentIcon(name = "Filled.Important12", 12f) {
      materialPath {
          moveTo(4.283F, 2.98F)
          curveTo(4.133F, 1.935F, 4.944F, 1.0F, 6.0F, 1.0F)
          reflectiveCurveToRelative(1.867F, 0.935F, 1.717F, 1.98F)
          lineTo(7.142F, 7.01F)
          curveTo(7.06F, 7.578F, 6.574F, 8.0F, 6.0F, 8.0F)
          reflectiveCurveTo(4.94F, 7.578F, 4.86F, 7.01F)
          lineTo(4.283F, 2.98F)
          close()
          moveTo(7.0F, 10.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          close()        
      }
    }
    return _important12!!
  }

private var _important12: ImageVector? = null
