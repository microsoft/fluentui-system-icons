package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Person20: ImageVector
  get() {
    if (_person20 != null) {
      return _person20!!
    }
    _person20 = fluentIcon(name = "Regular.Person20", 20f) {
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
          moveToRelative(-1.991F, 5.0F)
          curveTo(3.903F, 11.0F, 3.0F, 11.887F, 3.0F, 13.0F)
          curveToRelative(0.0F, 1.691F, 0.833F, 2.966F, 2.135F, 3.797F)
          curveTo(6.417F, 17.614F, 8.145F, 18.0F, 10.0F, 18.0F)
          curveToRelative(1.855F, 0.0F, 3.583F, -0.386F, 4.865F, -1.203F)
          curveTo(16.167F, 15.967F, 17.0F, 14.69F, 17.0F, 13.0F)
          curveToRelative(0.0F, -1.104F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(5.009F)
          close()
          moveTo(4.0F, 13.0F)
          curveToRelative(0.0F, -0.553F, 0.448F, -1.0F, 1.009F, -1.0F)
          horizontalLineTo(15.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          curveToRelative(0.0F, 1.309F, -0.622F, 2.284F, -1.673F, 2.953F)
          curveTo(13.257F, 16.636F, 11.735F, 17.0F, 10.0F, 17.0F)
          curveToRelative(-1.735F, 0.0F, -3.257F, -0.364F, -4.327F, -1.047F)
          curveTo(4.623F, 15.283F, 4.0F, 14.31F, 4.0F, 13.0F)
          close()        
      }
    }
    return _person20!!
  }

private var _person20: ImageVector? = null
