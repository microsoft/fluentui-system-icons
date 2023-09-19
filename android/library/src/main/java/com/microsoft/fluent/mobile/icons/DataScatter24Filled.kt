package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DataScatter24: ImageVector
  get() {
    if (_dataScatter24 != null) {
      return _dataScatter24!!
    }
    _dataScatter24 = fluentIcon(name = "Filled.DataScatter24", 24f) {
      materialPath {
          moveTo(3.0F, 3.75F)
          curveTo(3.0F, 3.336F, 3.336F, 3.0F, 3.75F, 3.0F)
          reflectiveCurveTo(4.5F, 3.336F, 4.5F, 3.75F)
          verticalLineTo(19.5F)
          horizontalLineToRelative(15.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(20.664F, 21.0F, 20.25F, 21.0F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 21.0F, 3.0F, 20.664F, 3.0F, 20.25F)
          verticalLineTo(3.75F)
          close()
          moveTo(14.0F, 7.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          reflectiveCurveToRelative(-1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.343F, -3.0F, -3.0F)
          close()
          moveTo(9.0F, 6.0F)
          curveTo(7.343F, 6.0F, 6.0F, 7.343F, 6.0F, 9.0F)
          reflectiveCurveToRelative(1.343F, 3.0F, 3.0F, 3.0F)
          reflectiveCurveToRelative(3.0F, -1.343F, 3.0F, -3.0F)
          reflectiveCurveToRelative(-1.343F, -3.0F, -3.0F, -3.0F)
          close()
          moveToRelative(6.0F, 6.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, 1.343F, -3.0F, 3.0F)
          reflectiveCurveToRelative(1.343F, 3.0F, 3.0F, 3.0F)
          reflectiveCurveToRelative(3.0F, -1.343F, 3.0F, -3.0F)
          reflectiveCurveToRelative(-1.343F, -3.0F, -3.0F, -3.0F)
          close()        
      }
    }
    return _dataScatter24!!
  }

private var _dataScatter24: ImageVector? = null
