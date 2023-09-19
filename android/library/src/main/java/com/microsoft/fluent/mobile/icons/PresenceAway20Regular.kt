package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceAway20: ImageVector
  get() {
    if (_presenceAway20 != null) {
      return _presenceAway20!!
    }
    _presenceAway20 = fluentIcon(name = "Regular.PresenceAway20", 20f) {
      materialPath {
          moveTo(10.0F, 9.586F)
          verticalLineTo(6.008F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, 0.266F, 0.105F, 0.52F, 0.293F, 0.707F)
          lineToRelative(3.0F, 3.0F)
          curveToRelative(0.39F, 0.391F, 1.024F, 0.391F, 1.414F, 0.0F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.023F, 0.0F, -1.414F)
          lineTo(10.0F, 9.586F)
          close()
          moveTo(0.0F, 9.996F)
          curveTo(0.0F, 4.475F, 4.475F, 0.0F, 9.995F, 0.0F)
          reflectiveCurveToRelative(9.996F, 4.475F, 9.996F, 9.995F)
          reflectiveCurveToRelative(-4.475F, 9.996F, -9.996F, 9.996F)
          curveTo(4.475F, 19.99F, 0.0F, 15.516F, 0.0F, 9.995F)
          close()
          moveTo(9.995F, 2.0F)
          curveTo(5.58F, 2.0F, 2.0F, 5.58F, 2.0F, 9.995F)
          curveToRelative(0.0F, 4.416F, 3.58F, 7.996F, 7.995F, 7.996F)
          curveToRelative(4.416F, 0.0F, 7.996F, -3.58F, 7.996F, -7.996F)
          curveTo(17.99F, 5.58F, 14.41F, 2.0F, 9.995F, 2.0F)
          close()        
      }
    }
    return _presenceAway20!!
  }

private var _presenceAway20: ImageVector? = null
