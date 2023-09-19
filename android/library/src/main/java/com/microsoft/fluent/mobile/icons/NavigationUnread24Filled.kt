package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.NavigationUnread24: ImageVector
  get() {
    if (_navigationUnread24 != null) {
      return _navigationUnread24!!
    }
    _navigationUnread24 = fluentIcon(name = "Filled.NavigationUnread24", 24f) {
      materialPath {
          moveTo(19.25F, 8.5F)
          curveTo(20.769F, 8.5F, 22.0F, 7.269F, 22.0F, 5.75F)
          reflectiveCurveTo(20.769F, 3.0F, 19.25F, 3.0F)
          reflectiveCurveTo(16.5F, 4.231F, 16.5F, 5.75F)
          reflectiveCurveToRelative(1.231F, 2.75F, 2.75F, 2.75F)
          close()
          moveTo(15.713F, 7.0F)
          curveTo(15.575F, 6.609F, 15.5F, 6.188F, 15.5F, 5.75F)
          curveToRelative(0.0F, -0.257F, 0.026F, -0.508F, 0.075F, -0.75F)
          horizontalLineTo(3.0F)
          lineTo(2.883F, 5.007F)
          curveTo(2.386F, 5.065F, 2.0F, 5.487F, 2.0F, 6.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(12.713F)
          close()
          moveTo(21.0F, 17.0F)
          horizontalLineTo(3.0F)
          lineToRelative(-0.117F, 0.007F)
          curveTo(2.386F, 17.064F, 2.0F, 17.487F, 2.0F, 18.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(18.0F)
          lineToRelative(0.117F, -0.007F)
          curveTo(21.614F, 18.936F, 22.0F, 18.513F, 22.0F, 18.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          close()
          moveTo(3.0F, 11.0F)
          lineToRelative(18.0F, -0.002F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.447F, 1.0F, 1.0F)
          curveToRelative(0.0F, 0.513F, -0.386F, 0.935F, -0.883F, 0.993F)
          lineTo(21.0F, 12.998F)
          lineTo(3.0F, 13.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          curveToRelative(0.0F, -0.513F, 0.386F, -0.935F, 0.883F, -0.993F)
          lineTo(3.0F, 11.0F)
          close()        
      }
    }
    return _navigationUnread24!!
  }

private var _navigationUnread24: ImageVector? = null
