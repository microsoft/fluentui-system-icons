package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowForward24: ImageVector
  get() {
    if (_arrowForward24 != null) {
      return _arrowForward24!!
    }
    _arrowForward24 = fluentIcon(name = "Regular.ArrowForward24", 24f) {
      materialPath {
          moveTo(14.723F, 16.221F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.768F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.294F, 0.768F, 0.293F, 1.061F, 0.0F)
          lineToRelative(4.997F, -5.003F)
          curveToRelative(0.292F, -0.293F, 0.292F, -0.768F, 0.0F, -1.06F)
          lineTo(15.783F, 6.22F)
          curveToRelative(-0.293F, -0.293F, -0.768F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.294F, 0.293F, -0.294F, 0.767F, -0.001F, 1.06F)
          lineToRelative(3.72F, 3.72F)
          horizontalLineTo(10.6F)
          curveToRelative(-1.595F, 0.0F, -2.81F, 0.242F, -3.889F, 0.764F)
          lineTo(6.466F, 11.89F)
          curveToRelative(-1.109F, 0.593F, -1.983F, 1.467F, -2.576F, 2.576F)
          curveTo(3.28F, 15.606F, 3.0F, 16.884F, 3.0F, 18.6F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(4.5F, 19.014F, 4.5F, 18.6F)
          curveToRelative(0.0F, -1.484F, 0.228F, -2.52F, 0.713F, -3.428F)
          curveToRelative(0.453F, -0.847F, 1.113F, -1.507F, 1.96F, -1.96F)
          curveToRelative(0.838F, -0.448F, 1.786F, -0.676F, 3.094F, -0.709F)
          lineTo(10.6F, 12.5F)
          horizontalLineToRelative(7.837F)
          lineToRelative(-3.715F, 3.721F)
          close()        
      }
    }
    return _arrowForward24!!
  }

private var _arrowForward24: ImageVector? = null
