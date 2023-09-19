package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MyLocation24: ImageVector
  get() {
    if (_myLocation24 != null) {
      return _myLocation24!!
    }
    _myLocation24 = fluentIcon(name = "Regular.MyLocation24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineTo(12.75F, 2.75F)
          verticalLineToRelative(1.788F)
          curveToRelative(3.543F, 0.35F, 6.362F, 3.17F, 6.713F, 6.714F)
          lineTo(19.5F, 11.25F)
          horizontalLineToRelative(1.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.743F)
          lineTo(21.25F, 12.75F)
          lineToRelative(-1.788F, -0.001F)
          curveToRelative(-0.35F, 3.544F, -3.17F, 6.363F, -6.714F, 6.714F)
          lineTo(12.75F, 19.5F)
          verticalLineToRelative(1.75F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          curveToRelative(-0.38F, 0.0F, -0.694F, -0.282F, -0.743F, -0.648F)
          lineTo(11.25F, 21.25F)
          lineToRelative(0.001F, -1.788F)
          curveToRelative(-3.544F, -0.35F, -6.363F, -3.17F, -6.714F, -6.714F)
          lineTo(4.5F, 12.75F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 12.75F, 2.0F, 12.414F, 2.0F, 12.0F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.694F, 0.648F, -0.743F)
          lineTo(2.75F, 11.25F)
          horizontalLineToRelative(1.788F)
          curveToRelative(0.35F, -3.543F, 3.17F, -6.362F, 6.714F, -6.713F)
          lineTo(11.25F, 4.5F)
          verticalLineTo(2.75F)
          curveTo(11.25F, 2.336F, 11.586F, 2.0F, 12.0F, 2.0F)
          close()
          moveToRelative(0.0F, 4.0F)
          curveToRelative(-3.314F, 0.0F, -6.0F, 2.686F, -6.0F, 6.0F)
          reflectiveCurveToRelative(2.686F, 6.0F, 6.0F, 6.0F)
          reflectiveCurveToRelative(6.0F, -2.686F, 6.0F, -6.0F)
          reflectiveCurveToRelative(-2.686F, -6.0F, -6.0F, -6.0F)
          close()
          moveToRelative(0.0F, 2.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, 1.79F, 4.0F, 4.0F)
          reflectiveCurveToRelative(-1.79F, 4.0F, -4.0F, 4.0F)
          reflectiveCurveToRelative(-4.0F, -1.79F, -4.0F, -4.0F)
          reflectiveCurveToRelative(1.79F, -4.0F, 4.0F, -4.0F)
          close()        
      }
    }
    return _myLocation24!!
  }

private var _myLocation24: ImageVector? = null
