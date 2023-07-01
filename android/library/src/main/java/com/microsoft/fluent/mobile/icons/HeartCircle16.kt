package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.HeartCircle16: ImageVector
  get() {
    if (_heartCircle16 != null) {
      return _heartCircle16!!
    }
    _heartCircle16 = fluentIcon(name = "Regular.HeartCircle16", 16f) {
      materialPath {
          moveTo(8.0F, 7.0F)
          lineTo(7.58F, 6.508F)
          curveTo(7.006F, 5.84F, 5.977F, 5.824F, 5.384F, 6.475F)
          curveTo(4.86F, 7.05F, 4.877F, 7.935F, 5.422F, 8.489F)
          lineToRelative(2.4F, 2.44F)
          curveToRelative(0.098F, 0.1F, 0.259F, 0.1F, 0.357F, 0.0F)
          lineToRelative(2.4F, -2.44F)
          curveToRelative(0.545F, -0.555F, 0.562F, -1.44F, 0.038F, -2.014F)
          curveToRelative(-0.593F, -0.65F, -1.622F, -0.635F, -2.195F, 0.033F)
          lineTo(8.0F, 7.0F)
          close()
          moveTo(2.0F, 8.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          close()
          moveToRelative(6.0F, -5.0F)
          curveTo(5.239F, 3.0F, 3.0F, 5.239F, 3.0F, 8.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveToRelative(-2.239F, -5.0F, -5.0F, -5.0F)
          close()        
      }
    }
    return _heartCircle16!!
  }

private var _heartCircle16: ImageVector? = null
