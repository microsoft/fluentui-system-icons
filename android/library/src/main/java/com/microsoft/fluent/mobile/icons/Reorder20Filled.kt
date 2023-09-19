package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ReOrder20: ImageVector
  get() {
    if (_reOrder20 != null) {
      return _reOrder20!!
    }
    _reOrder20 = fluentIcon(name = "Filled.ReOrder20", 20f) {
      materialPath {
          moveTo(2.75F, 7.75F)
          curveTo(2.336F, 7.75F, 2.0F, 8.086F, 2.0F, 8.5F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(14.5F)
          curveTo(17.664F, 9.25F, 18.0F, 8.914F, 18.0F, 8.5F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(2.75F)
          close()
          moveToRelative(0.0F, 3.0F)
          curveTo(2.336F, 10.75F, 2.0F, 11.086F, 2.0F, 11.5F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(14.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(2.75F)
          close()        
      }
    }
    return _reOrder20!!
  }

private var _reOrder20: ImageVector? = null
