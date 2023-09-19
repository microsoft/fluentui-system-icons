package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Power28: ImageVector
  get() {
    if (_power28 != null) {
      return _power28!!
    }
    _power28 = fluentIcon(name = "Filled.Power28", 28f) {
      materialPath {
          moveTo(15.0F, 3.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(3.0F)
          close()
          moveToRelative(-4.6F, 3.748F)
          curveToRelative(0.506F, -0.22F, 0.737F, -0.81F, 0.516F, -1.316F)
          curveToRelative(-0.22F, -0.506F, -0.81F, -0.737F, -1.316F, -0.516F)
          curveTo(5.717F, 6.612F, 3.0F, 10.488F, 3.0F, 15.0F)
          curveToRelative(0.0F, 6.075F, 4.925F, 11.0F, 11.0F, 11.0F)
          reflectiveCurveToRelative(11.0F, -4.925F, 11.0F, -11.0F)
          curveToRelative(0.0F, -4.512F, -2.717F, -8.388F, -6.6F, -10.084F)
          curveToRelative(-0.506F, -0.221F, -1.095F, 0.01F, -1.316F, 0.516F)
          curveToRelative(-0.221F, 0.506F, 0.01F, 1.095F, 0.516F, 1.316F)
          curveTo(20.78F, 8.138F, 23.0F, 11.311F, 23.0F, 15.0F)
          curveToRelative(0.0F, 4.97F, -4.03F, 9.0F, -9.0F, 9.0F)
          reflectiveCurveToRelative(-9.0F, -4.03F, -9.0F, -9.0F)
          curveToRelative(0.0F, -3.689F, 2.22F, -6.862F, 5.4F, -8.252F)
          close()        
      }
    }
    return _power28!!
  }

private var _power28: ImageVector? = null
