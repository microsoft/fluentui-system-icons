package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PresenceDnd12: ImageVector
  get() {
    if (_presenceDnd12 != null) {
      return _presenceDnd12!!
    }
    _presenceDnd12 = fluentIcon(name = "Filled.PresenceDnd12", 12f) {
      materialPath {
          moveTo(6.0F, 12.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, -2.686F, 6.0F, -6.0F)
          reflectiveCurveTo(9.314F, 0.0F, 6.0F, 0.0F)
          reflectiveCurveTo(0.0F, 2.686F, 0.0F, 6.0F)
          reflectiveCurveToRelative(2.686F, 6.0F, 6.0F, 6.0F)
          close()
          moveTo(3.75F, 5.25F)
          horizontalLineToRelative(4.5F)
          curveTo(8.664F, 5.25F, 9.0F, 5.586F, 9.0F, 6.0F)
          reflectiveCurveTo(8.664F, 6.75F, 8.25F, 6.75F)
          horizontalLineToRelative(-4.5F)
          curveTo(3.336F, 6.75F, 3.0F, 6.414F, 3.0F, 6.0F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          close()        
      }
    }
    return _presenceDnd12!!
  }

private var _presenceDnd12: ImageVector? = null
