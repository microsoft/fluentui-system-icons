package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Warning28: ImageVector
  get() {
    if (_warning28 != null) {
      return _warning28!!
    }
    _warning28 = fluentIcon(name = "Regular.Warning28", 28f) {
      materialPath {
          moveTo(15.0F, 20.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          close()
          moveToRelative(-1.75F, -3.25F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-6.5F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveToRelative(-0.75F, 0.336F, -0.75F, 0.75F)
          verticalLineToRelative(6.5F)
          close()
          moveTo(11.592F, 4.17F)
          curveToRelative(1.046F, -1.894F, 3.77F, -1.895F, 4.816F, 0.0F)
          lineToRelative(9.25F, 16.75F)
          curveTo(26.67F, 22.753F, 25.344F, 25.0F, 23.251F, 25.0F)
          horizontalLineTo(4.757F)
          curveToRelative(-2.093F, 0.0F, -3.42F, -2.246F, -2.408F, -4.079F)
          lineToRelative(9.243F, -16.75F)
          close()
          moveToRelative(3.502F, 0.725F)
          curveToRelative(-0.475F, -0.861F, -1.713F, -0.861F, -2.188F, 0.0F)
          lineTo(3.662F, 21.646F)
          curveTo(3.202F, 22.479F, 3.805F, 23.5F, 4.757F, 23.5F)
          horizontalLineTo(23.25F)
          curveToRelative(0.951F, 0.0F, 1.554F, -1.021F, 1.094F, -1.854F)
          lineToRelative(-9.25F, -16.751F)
          close()        
      }
    }
    return _warning28!!
  }

private var _warning28: ImageVector? = null
