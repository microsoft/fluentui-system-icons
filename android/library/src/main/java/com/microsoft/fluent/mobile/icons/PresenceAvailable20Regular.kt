package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceAvailable20: ImageVector
  get() {
    if (_presenceAvailable20 != null) {
      return _presenceAvailable20!!
    }
    _presenceAvailable20 = fluentIcon(name = "Regular.PresenceAvailable20", 20f) {
      materialPath {
          moveTo(9.995F, 0.0F)
          curveTo(4.475F, 0.0F, 0.0F, 4.475F, 0.0F, 9.995F)
          reflectiveCurveToRelative(4.475F, 9.996F, 9.995F, 9.996F)
          reflectiveCurveToRelative(9.996F, -4.475F, 9.996F, -9.996F)
          curveTo(19.99F, 4.475F, 15.516F, 0.0F, 9.995F, 0.0F)
          close()
          moveTo(2.0F, 9.995F)
          curveTo(2.0F, 5.58F, 5.58F, 2.0F, 9.995F, 2.0F)
          curveToRelative(4.416F, 0.0F, 7.996F, 3.58F, 7.996F, 7.995F)
          curveToRelative(0.0F, 4.416F, -3.58F, 7.996F, -7.996F, 7.996F)
          curveTo(5.58F, 17.99F, 2.0F, 14.41F, 2.0F, 9.995F)
          close()
          moveToRelative(12.207F, -3.202F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          lineToRelative(-4.5F, 4.5F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          lineTo(9.0F, 10.586F)
          lineToRelative(3.793F, -3.793F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          close()        
      }
    }
    return _presenceAvailable20!!
  }

private var _presenceAvailable20: ImageVector? = null
