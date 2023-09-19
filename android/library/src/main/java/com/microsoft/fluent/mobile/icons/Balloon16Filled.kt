package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Balloon16: ImageVector
  get() {
    if (_balloon16 != null) {
      return _balloon16!!
    }
    _balloon16 = fluentIcon(name = "Filled.Balloon16", 16f) {
      materialPath {
          moveTo(8.0F, 1.0F)
          curveTo(5.184F, 1.0F, 3.5F, 3.266F, 3.5F, 5.5F)
          curveToRelative(0.0F, 1.37F, 0.548F, 2.728F, 1.36F, 3.744F)
          curveToRelative(0.691F, 0.867F, 1.624F, 1.542F, 2.64F, 1.714F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineTo(11.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(0.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(14.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(9.5F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineToRelative(-0.042F)
          curveToRelative(1.016F, -0.172F, 1.949F, -0.847F, 2.64F, -1.714F)
          curveTo(11.953F, 8.228F, 12.5F, 6.87F, 12.5F, 5.5F)
          curveTo(12.5F, 3.266F, 10.816F, 1.0F, 8.0F, 1.0F)
          close()
          moveToRelative(0.0F, 2.0F)
          curveToRelative(0.663F, 0.0F, 1.283F, 0.326F, 1.729F, 0.772F)
          curveTo(10.174F, 4.216F, 10.5F, 4.837F, 10.5F, 5.5F)
          curveTo(10.5F, 5.776F, 10.276F, 6.0F, 10.0F, 6.0F)
          reflectiveCurveTo(9.5F, 5.776F, 9.5F, 5.5F)
          curveToRelative(0.0F, -0.337F, -0.174F, -0.717F, -0.479F, -1.021F)
          curveTo(8.717F, 4.174F, 8.338F, 4.0F, 8.0F, 4.0F)
          curveTo(7.724F, 4.0F, 7.5F, 3.776F, 7.5F, 3.5F)
          reflectiveCurveTo(7.724F, 3.0F, 8.0F, 3.0F)
          close()        
      }
    }
    return _balloon16!!
  }

private var _balloon16: ImageVector? = null
