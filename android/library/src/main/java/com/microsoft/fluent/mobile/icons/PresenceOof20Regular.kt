package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceOof20: ImageVector
  get() {
    if (_presenceOof20 != null) {
      return _presenceOof20!!
    }
    _presenceOof20 = fluentIcon(name = "Regular.PresenceOof20", 20f) {
      materialPath {
          moveTo(10.697F, 7.702F)
          curveToRelative(0.39F, -0.391F, 0.39F, -1.024F, 0.0F, -1.415F)
          curveToRelative(-0.391F, -0.39F, -1.025F, -0.39F, -1.415F, 0.002F)
          lineToRelative(-2.995F, 3.0F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.022F, 0.0F, 1.413F)
          lineToRelative(2.995F, 3.0F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.391F, 1.414F, 0.0F)
          curveToRelative(0.391F, -0.39F, 0.392F, -1.022F, 0.002F, -1.413F)
          lineToRelative(-1.292F, -1.294F)
          horizontalLineToRelative(3.6F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-3.6F)
          lineToRelative(1.291F, -1.293F)
          close()
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
      }
    }
    return _presenceOof20!!
  }

private var _presenceOof20: ImageVector? = null
