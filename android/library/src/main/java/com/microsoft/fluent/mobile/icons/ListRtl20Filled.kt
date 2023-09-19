package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ListRtl20: ImageVector
  get() {
    if (_listRtl20 != null) {
      return _listRtl20!!
    }
    _listRtl20 = fluentIcon(name = "Filled.ListRtl20", 20f) {
      materialPath {
          moveTo(6.0F, 4.75F)
          curveTo(6.0F, 4.336F, 6.336F, 4.0F, 6.75F, 4.0F)
          horizontalLineToRelative(10.5F)
          curveTo(17.664F, 4.0F, 18.0F, 4.336F, 18.0F, 4.75F)
          reflectiveCurveTo(17.664F, 5.5F, 17.25F, 5.5F)
          horizontalLineTo(6.75F)
          curveTo(6.336F, 5.5F, 6.0F, 5.164F, 6.0F, 4.75F)
          close()
          moveToRelative(1.0F, 10.0F)
          curveTo(7.0F, 14.336F, 7.336F, 14.0F, 7.75F, 14.0F)
          horizontalLineToRelative(9.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-9.5F)
          curveTo(7.336F, 15.5F, 7.0F, 15.164F, 7.0F, 14.75F)
          close()
          moveTo(2.75F, 9.0F)
          curveTo(2.336F, 9.0F, 2.0F, 9.336F, 2.0F, 9.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(14.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(17.664F, 9.0F, 17.25F, 9.0F)
          horizontalLineTo(2.75F)
          close()        
      }
    }
    return _listRtl20!!
  }

private var _listRtl20: ImageVector? = null
