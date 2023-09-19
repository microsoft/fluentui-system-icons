package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceDnd12: ImageVector
  get() {
    if (_presenceDnd12 != null) {
      return _presenceDnd12!!
    }
    _presenceDnd12 = fluentIcon(name = "Regular.PresenceDnd12", 12f) {
      materialPath {
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
          moveTo(3.0F, 6.0F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(4.5F)
          curveTo(8.664F, 5.25F, 9.0F, 5.586F, 9.0F, 6.0F)
          reflectiveCurveTo(8.664F, 6.75F, 8.25F, 6.75F)
          horizontalLineToRelative(-4.5F)
          curveTo(3.336F, 6.75F, 3.0F, 6.414F, 3.0F, 6.0F)
          close()        
      }
    }
    return _presenceDnd12!!
  }

private var _presenceDnd12: ImageVector? = null
