package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PersonAlert20: ImageVector
  get() {
    if (_personAlert20 != null) {
      return _personAlert20!!
    }
    _personAlert20 = fluentIcon(name = "Regular.PersonAlert20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveTo(7.79F, 2.0F, 6.0F, 3.79F, 6.0F, 6.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          reflectiveCurveToRelative(4.0F, -1.79F, 4.0F, -4.0F)
          reflectiveCurveToRelative(-1.79F, -4.0F, -4.0F, -4.0F)
          close()
          moveTo(7.0F, 6.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          reflectiveCurveToRelative(-1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.343F, -3.0F, -3.0F)
          close()
          moveToRelative(3.0F, 12.0F)
          curveToRelative(-0.125F, 0.0F, -0.25F, -0.002F, -0.373F, -0.005F)
          curveToRelative(0.652F, -0.053F, 1.12F, -0.494F, 1.295F, -1.03F)
          curveToRelative(1.35F, -0.108F, 2.53F, -0.453F, 3.405F, -1.012F)
          curveTo(15.377F, 15.283F, 16.0F, 14.31F, 16.0F, 13.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(9.373F)
          curveToRelative(-0.091F, -0.355F, -0.23F, -0.69F, -0.409F, -1.0F)
          horizontalLineTo(15.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.896F, 2.0F, 2.0F)
          curveToRelative(0.0F, 1.691F, -0.833F, 2.966F, -2.135F, 3.797F)
          curveTo(13.583F, 17.614F, 11.855F, 18.0F, 10.0F, 18.0F)
          close()
          moveToRelative(-7.503F, -5.0F)
          curveToRelative(0.0F, -1.657F, 1.344F, -3.0F, 3.0F, -3.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(2.0F)
          lineToRelative(1.32F, 1.119F)
          curveTo(10.173F, 16.419F, 9.96F, 17.0F, 9.494F, 17.0F)
          horizontalLineTo(1.501F)
          curveToRelative(-0.465F, 0.0F, -0.678F, -0.58F, -0.323F, -0.881F)
          lineTo(2.498F, 15.0F)
          verticalLineToRelative(-2.0F)
          close()
          moveToRelative(3.0F, 6.0F)
          curveToRelative(-0.652F, 0.0F, -1.208F, -0.418F, -1.414F, -1.0F)
          horizontalLineToRelative(2.829F)
          curveToRelative(-0.206F, 0.582F, -0.761F, 1.0F, -1.415F, 1.0F)
          close()        
      }
    }
    return _personAlert20!!
  }

private var _personAlert20: ImageVector? = null
