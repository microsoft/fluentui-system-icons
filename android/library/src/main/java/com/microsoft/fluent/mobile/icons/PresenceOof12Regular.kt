package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceOof12: ImageVector
  get() {
    if (_presenceOof12 != null) {
      return _presenceOof12!!
    }
    _presenceOof12 = fluentIcon(name = "Regular.PresenceOof12", 12f) {
      materialPath {
          moveTo(6.281F, 4.528F)
          curveToRelative(0.293F, -0.292F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.768F, -0.293F, -1.06F, 0.0F)
          lineTo(3.219F, 5.47F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.768F, 0.0F, 1.06F)
          lineTo(5.22F, 8.533F)
          curveToRelative(0.292F, 0.292F, 0.767F, 0.292F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.768F, 0.0F, -1.061F)
          lineTo(5.56F, 6.75F)
          horizontalLineToRelative(2.69F)
          curveTo(8.665F, 6.75F, 9.0F, 6.414F, 9.0F, 6.0F)
          reflectiveCurveTo(8.665F, 5.25F, 8.25F, 5.25F)
          horizontalLineTo(5.56F)
          lineToRelative(0.722F, -0.722F)
          close()
          moveTo(6.0F, 0.0F)
          curveTo(2.686F, 0.0F, 0.0F, 2.686F, 0.0F, 6.0F)
          reflectiveCurveToRelative(2.686F, 6.0F, 6.0F, 6.0F)
          reflectiveCurveToRelative(6.0F, -2.686F, 6.0F, -6.0F)
          reflectiveCurveToRelative(-2.686F, -6.0F, -6.0F, -6.0F)
          close()
          moveTo(1.5F, 6.0F)
          curveToRelative(0.0F, -2.485F, 2.015F, -4.5F, 4.5F, -4.5F)
          reflectiveCurveToRelative(4.5F, 2.015F, 4.5F, 4.5F)
          reflectiveCurveToRelative(-2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(1.5F, 8.485F, 1.5F, 6.0F)
          close()        
      }
    }
    return _presenceOof12!!
  }

private var _presenceOof12: ImageVector? = null
